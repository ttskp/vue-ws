<template>
    <div class="cat">
        cat name: {{ name }} {{ age.humanAge}}
    </div>
</template>

<script>

  export default {
    props: {
      name: {
        type: String,
        default: ''
      },
      age: {
        type: Object,
        default: () =>({
          catAge: 12,
          humanAge: 55
        })
      }
    }
  }
</script>

<style scoped>
    .cat {
        background-color: red
    }
</style>