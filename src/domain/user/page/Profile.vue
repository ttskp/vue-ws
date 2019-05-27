<template>
    <div>
        <h2> ProfilePage </h2>
        <div> current user name</div>
        <div> {{ name }} age: {{ age }}</div>
        <v-text-field v-model="changeNameInput" label="new name"></v-text-field>
        <v-btn @click="changeName">change name</v-btn>
        <v-img :src="url"></v-img>
        <v-btn @click="randomPic">random pic</v-btn>
    </div>
</template>

<script>
  import {CHANGE_NAME, MODULE_NAME, RANDOM_PICTURE} from './store';
  import {mapState} from 'vuex';

  export default {
    data(){
      return {
        changeNameInput: ''
      }
    },
    computed: {
      ...mapState(MODULE_NAME, ['name', 'age', 'url'])
    },
    methods: {
      changeName(){
        this.$store.commit(`${MODULE_NAME}/${CHANGE_NAME}`, this.changeNameInput);
      },
      randomPic() {
        return this.$store.dispatch(`${MODULE_NAME}/${RANDOM_PICTURE}`);
      }
    }
  }
</script>
