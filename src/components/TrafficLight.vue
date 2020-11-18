<template>
  <div class="traffic-light">
    <Signal
      v-for="signal in signals"
      :key="signal.color"
      :color="signal.color"
      :isActive="signal.color === activeColor"
      :isDim="!(signal.color === activeColor)"

      :timer="timer"
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
        signalsOrder: this.setSignalsOrder(),
        prevColor: null,
        timerId: null
      }
    },
    computed: {
    },
    created() {
      console.log('created ' + this.activeColor)
      this.prevColor = this.activeColor
      this.startTimer()
    },
    updated() {
      console.log('updated ' + this.activeColor)
      console.log(this.signalsOrder)
      this.prevColor = this.activeColor
      this.startTimer()
    },
    watch: {
      activeColor() {
        this.signalsOrder = this.setSignalsOrder()
      }
    },
    methods: {
      startTimer() {
        if (this.timerId) {
          clearTimeout(this.timerId)
        }
        this.timerId = setTimeout(() => {
          const nextColor = this.signalsOrder[1]
          this.$router.push(`/${nextColor}`)
          this.prevColor = this.activeColor
          console.log(this.prevColor)
        }, this.timer)
      },
      setSignalsOrder() {
        switch (this.activeColor) {
          case 'red':
            return ['red', 'yellow', 'green']
          case 'yellow':
            return ['yellow', this.prevColor === 'green' ? 'red' : 'green', this.prevColor || 'red']
          case 'green':
            return ['green','yellow', 'red']
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