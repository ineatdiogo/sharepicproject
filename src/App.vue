<template>
  <div id="app">
    <Header />
    <Login />
    <Register />
    <Home />
    <Pictures />
    <Upload />
    <Overlay />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Pictures from './components/Pictures.vue'
import Upload from './components/Upload.vue'
import Overlay from './components/Overlay.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'


export default {
  name: 'app',
  components: {
    Header,
    Login,
    Register,
    Home,
    Pictures,
    Upload,
    Overlay, 
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
