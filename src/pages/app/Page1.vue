<template>
  <div>
    <p>Page1</p>
    <img alt="Vue logo" :src="logUrl"/>
  </div>
</template>

<script>
export default {
  name: "Page1",
  computed: {
    logUrl () {
      return require('@root/assets/logo.png')
    }
  },
}
</script>

<style scoped>

</style>
