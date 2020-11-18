<template>
  <div :class="['signal', color+'-signal', {'dim-signal': isDim}]"></div>
</template>

<script>
  export default {
    name: 'Signal',
    props: {
      color: String,
      isActive: Boolean,
      isDim: Boolean
    }
  }
</script>

<style scoped>
  .signal {
    position: relative;
    width: 100px;
    height: 100px;
    border: 10px solid black;
    border-radius: 50%;
    box-shadow: 0 0 10px black inset;
  }
  .red-signal {
    background-color: red;
  }
  .yellow-signal {
    background-color: yellow;
  }
  .green-signal {
    background-color: green;
  }
  .dim-signal:after {
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    left: -1px;
    bottom: -1px;
    z-index: 100;
    border-radius: 50%;
    background-color: #000;
    opacity: 0.8;
  }
  .blink:after {
    animation: blink 0.6s infinite;
  }
  @keyframes blink {
    0% { opacity: 0.8 }
    50% { opacity: 0.1 }
    100% { opacity: 0.8 }
  }
</style>