<template>
  <div class="traffic-light">
    <Signal
      v-for="signal in signals"
      :key="signal.color"
      :color="signal.color"
      :isActive="signal.color === activeColor"
      :isDim="!(signal.color === activeColor)"
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
    props: {
      activeColor: String,
      timer: Number
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
        ],
        signalsOrder: this.setSignalsOrderByDefault(),

      }
    },
    created() {
      console.log('created ' + this.activeColor)
      this.startTimer()
    },
    updated() {
      console.log('updated ' + this.activeColor)
      console.log(this.signalsOrder)
      this.startTimer()
    },
    watch: {
      // 'signalsOrder': () => {
      //   localStorage.setItem('signalsOrder', JSON.stringify(this.signalsOrder))
      // }
    },
    methods: {
      // getItFromLocalStorage(key) {
      //   const item = localStorage.getItem(key)
      //   if (item) {
      //     return JSON.parse(item)
      //   } else {
      //     return null
      //   }
      // },
      startTimer() {
        setTimeout(() => {
          this.$router.push(`/${this.signalsOrder[1]}`)
          this.signalsOrder.push(this.signalsOrder.shift())
        }, this.timer)
      },
      setSignalsOrderByDefault() {
        switch (this.activeColor) {
          case 'red':
            return ['red', 'yellow', 'green']
          case 'yellow':
            return ['yellow', 'green', 'red']
          case 'green':
            return ['green', 'red', 'yellow']
        }
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