<template>
    <div class="row register">
        <div class="modal" role="dialog" id="userRegister">
            <div class="modal-dialog" role="document">
                <div class="row">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Inscription</h5>
                        </div>
                        <div class="modal-body">
                            <div v-if="errors" class="alert alert-danger">{{errors}}</div>
                                <form @submit.prevent="register">

                                    <div class="form-group">
                                        <label for="email" class="control-label">Adresse E-mail</label>
                                        <input id="email" v-model="email" type="text" class="form-control" required autofocus/>
                                    </div>

                                    <div class="form-group">
                                        <label for="password" class="control-label">Mot de passe</label>
                                        <input id="password"  v-model="password" type="password" class="form-control"  required />
                                    </div>

                                    <button type="submit" class="btn btn-outline-secondary">S'inscrire</button>
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {fb} from '../main.js'

export default {
    
    data() {   
        return {
            email: null,
            password: null,
            errors: null 
        };
    },

    methods: {
        register() {
            if(!this.email) {
                this.errors = 'Adresse e-mail incorrect!';
            }else if(!this.password) {
                this.errors = 'Le mot de passe ne peut être vide!';
            } else {
                fb
                .auth()
                .createUserWithEmailAndPassword(this.email, this.password)
                .then((result) => {
                    console.log(result);
                }).catch((err) => {
                    console.log(err.message);
                })
            }
        }
    }

}
</script>

<style scoped>

</style>