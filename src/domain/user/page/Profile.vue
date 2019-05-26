<template>
    <div>
        <h2> ProfilePage </h2>
        <div> current user name</div>
        <div> {{ name }}</div>
        <v-text-field v-model="changeNameInput" label="new name"></v-text-field>
        <v-btn @click="changeName">change name</v-btn>
    </div>
</template>

<script>
  import {CHANGE_NAME, MODULE_NAME} from './store';
  import {mapState} from 'vuex';

  export default {
    data(){
      return {
        changeNameInput: ''
      }
    },
    computed: {
      ...mapState(MODULE_NAME, ['name'])
    },

    methods: {
      changeName(){
        console.warn(this.changeNameInput);
        debugger;
        this.$store.commit(`${MODULE_NAME}/${CHANGE_NAME}`, this.changeNameInput);
      }
    }
  }
</script>
