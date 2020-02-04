<template>
    <div class="connexion">
        <div class="modal" role="dialog" id="userModal">
            <div class="modal-dialog" role="document">
                
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Connexion</h5>
                    </div>
                    <div class="modal-body">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                            <form @submit.prevent="submit">
                                <div class="form-group">
                                    <label for="email" class="control-label">Adresse E-mail</label>
                                    <input id="email" type="email" class="form-control" required autofocus v-model="email"/>
                                </div>

                                <div class="form-group">
                                    <label for="password" class="control-label">Mot de passe</label>
                                    <input id="password"  type="password" class="form-control"  required v-model="password" />
                                </div>

                                <button type="submit" class="btn btn-primary">Se connecter</button>
                                    
                            </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import {fb} from '../main.js'

export default {
    name: 'Login',
    data() {
        return {
            email: null,
            password: null,
            error: null
        };
    },
    methods: {
        submit() {
            fb
                .auth()
                .signInWithEmailAndPassword(this.email, this.password)
                .then((data) => console.log(data))
                .catch(function(error) {
                    error.message
                })  
        }
    }
};
</script>

<style scoped>
    
</style>