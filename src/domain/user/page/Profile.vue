<template>
    <div>
        <h2> ProfilePage </h2>
        <div> current user name</div>
        <div> {{ name }}</div>
    </div>
</template>

<script>
  import {MODULE_NAME} from './store';
  import {mapState} from 'vuex';

  export default {
    computed: {
      ...mapState(MODULE_NAME, ['name'])
    }
  }
</script>
