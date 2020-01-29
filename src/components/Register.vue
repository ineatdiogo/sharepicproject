<template>
    <div class="row justify-content-center register">
        <div class="modal" role="dialog" id="userRegister">
            <div class="modal-dialog" role="document">
                <div class="row">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Inscription</h5>
                        </div>
                        <div class="modal-body">
                            <div v-if="error" class="alert alert-danger">{{error}}</div>
                                <form @submit.prevent="registration">
                                    <div class="form-group">
                                        <label for="username" class="control-label">Pseudo</label>
                                        <input id="username" type="username" class="form-control" required autofocus v-model="username"/>
                                    </div>

                                    <div class="form-group">
                                        <label for="email" class="control-label">Adresse E-mail</label>
                                        <input id="email" type="email" class="form-control" required autofocus v-model="email"/>
                                    </div>

                                    <div class="form-group">
                                        <label for="password" class="control-label">Mot de passe</label>
                                        <input id="password"  type="password" class="form-control"  required v-model="password" />
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
import firebase from "firebase";
export default {
    name: 'Register',

    data() {
        return {
            username: null,
            email: null,
            password: null,
            errors: null
        }
    },

    methods: {
        registration() {
            let user = firebase.auth().currentUser;

            if (user) {
                console.log('user added');
            } else {
                console.log('user not added');
            }
        }
    }

}
</script>

<style scoped>

</style>