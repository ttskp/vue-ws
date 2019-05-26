<template>
  <v-app>
  <v-toolbar>
    <v-toolbar-side-icon data-test-id="menu">
      <v-icon>menu</v-icon>
    </v-toolbar-side-icon>
    <v-toolbar-title>Title</v-toolbar-title>
    <v-spacer/>
    <v-btn icon>
        <v-img :src="image" @click="gotoVue"/>
    </v-btn>
  </v-toolbar>
  <v-content style="padding-top: 20px;">
    <router-view/>
  </v-content>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        image: require('@/assets/logo.png')
      }
    },
    methods: {
      gotoVue(){
        // this.$router.replace({name: 'profile'});
       window.location = 'https://vuejs.org/';
      }
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
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
