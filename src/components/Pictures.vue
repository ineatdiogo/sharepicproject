<template>
    <div class="card">
        <div class="card-header">
            <h1 class="card-title">Liste des images (pictures)</h1>
        </div>
        <div class="card-body">
            <h3>Picture title goes here</h3>
        </div>
    </div>
</template>

<script>
import {db} from '../main.js'

export default {
    name: "Pictures",
    pictures: [],
    
    data() {
        return {
            author: {
                firstname: null,
                lastname: null
            },
            createdAt: null,
            editorChoice: false,
            description: null,
            likes: {
                rating: 0,
                src: null
            },
            src: null,
            title: null
        }
    },

    readData() {
        
        db.collection("pictures").get()
            .then((querySnapshot) => {
                querySnapshot.forEach((docRef) => {
                    console.log(`${docRef.id} => ${docRef.data()}`);
                    this.pictures.push(`${docRef.data()}`)
                });
            })
            .catch((error) => {
                console.log("Error getting documents: ", error);
            });
    }
}
</script>

