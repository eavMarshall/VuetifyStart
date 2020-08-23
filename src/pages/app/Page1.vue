<template>
  <div>
    <p>Page1</p>
    <img alt="Vue logo" :src="require('@assets/logo.png')"/>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "@components/HelloWorld";

export default {
  name: "Page1",
  components: {
    HelloWorld
  },
}
</script>

<style scoped>

</style>
