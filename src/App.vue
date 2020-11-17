<template>
  <div id="app">
    <TrafficLight/>
  </div>
</template>

<script>
  import TrafficLight from "./components/TrafficLight.vue"
  export default {
    components: {
      TrafficLight
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
