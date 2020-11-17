<template>
  <div class="traffic-light">
    <Signal
      v-for="signal in signals"
      :key="signal.color"
      :color="signal.color"
      :isActive="signal.isActive"
      :isDim="!signal.isActive"
    />
  </div>
</template>

<script>
  import Signal from './traffic-light-components/Signal.vue';
  export default {
    name: 'TrafficLight',
    components: {
      Signal
    },
    data() {
      return {
        signals: [
          {
            color: 'red',
            isActive: false
          },
          {
            color: 'yellow',
            isActive: false
          },
          {
            color: 'green',
            isActive: false
          }
        ]
      }
    }
  }
</script>


<style scoped>
  .traffic-light {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 200px;
    height: 500px;
    margin: 50px auto;
    background-color: rgba(0, 0, 0, 0.83);
    border-radius: 50px;
  }
</style>