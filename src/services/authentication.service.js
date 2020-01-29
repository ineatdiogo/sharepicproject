import firebase from "firebase";

export default class Authentication {
    
    data() {
        return {
            username: null,
            email: null,
            password: null,
            error: null
        }
    }
    
    submit() {
        
        firebase.auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then((data) => data())
            .catch(function(error) {
                error.message
            })  
    }
}