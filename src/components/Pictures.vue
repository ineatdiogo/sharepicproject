<template>
    <div class="card">
        <div class="card-header">
            <h1 class="card-title">Liste des images (pictures)</h1>
        </div>
        <div class="card-body" v-for="picture in pictures" :key="picture.id">
            <h3>{{picture.title}}</h3>
            <p>{{ picture.author.firstname }} {{ picture.author.lastname }} <em> {{ picture.editorChoice }} </em> </p>

            <div> {{ picture.description }} </div>

            <div>
                <strong> {{ picture.likes.rating }} - </strong> <em>{{ picture.likes.src }}</em>
            </div>
        </div>
    </div>
</template>

<script>
import {db} from '../main.js'

export default {
    name: "Pictures",
    
    data() {
        return {
            pictures: [],
            picture: {
                author: {
                    firstname: null,
                    lastname: null
                },
                createdAt: null,
                editorChoice: null,
                description: null,
                likes: {
                    rating: 0,
                    src: null
                },
                src: null,
                title: null,
            }
        }
    },

    methods: {

        addData() {
            db.collection('pictures').add(this.picture)
            .then(doc => {
                console.log(`Id du document : ${ doc.id }`);
            })
            .catch(error => {
                console.log(error);
            });
        },


        readData() {
            
            db.collection("pictures").get()
            .then(query => {
                query.forEach((docRef) => {
                    console.log(`${docRef.id} => ${docRef.data()}`);
                    this.pictures.push(`${docRef.data()}`)
                });
            })
            .catch(error => {
                console.log("Error getting documents: ", error);
            });
        }
    }
}
</script>

