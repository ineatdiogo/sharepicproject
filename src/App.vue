<template>
  <div id="app">
    <Header />
    <Home />
    <Upload />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import Upload from './components/Upload.vue'

export default {
  name: 'app',
  components: {
    Header,
    Home,
    Upload,
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
