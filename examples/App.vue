<template>
  <div id="app">
    <p>不同类型的按钮</p>
    <x-button v-bind="btn1">button1</x-button>
    <x-button v-bind="btn2">button2</x-button>
    <x-button v-bind="btn3">button3</x-button>
    <x-button v-bind="btn4">button4</x-button>
    <p>不同大小的按钮</p>
    <x-button v-bind="btn5">button5</x-button>
    <x-button v-bind="btn6">button6</x-button>
    <x-button v-bind="btn7">button7</x-button>
    <x-button v-bind="btn8">button8</x-button>
    <p>不同格式的按钮</p>
    <x-button v-bind="btn9">button9</x-button>
    <x-button v-bind="btn10">button10</x-button>
    <x-button v-bind="btn11">button11</x-button>
    <x-button v-bind="btn12">button12</x-button>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
    
  },
  data () {
    return {
      btn1: {
        type: 'primary'
      },
      btn2: {
        type: 'warning'
      },
      btn3: {
        type: 'error'
      },
      btn4: {
        type: 'success'
      },
      btn5: {
        type: 'primary',
        size: 'medium'
      },
      btn6: {
        type: 'warning',
        size: 'small'
      },
      btn7: {
        type: 'error',
        size: 'mini'
      },
      btn8: {
        type: 'success',
        size: 'mini'
      },
      btn9: {
        type: 'primary',
        size: 'medium',
        round: true
      },
      btn10: {
        type: 'warning',
        size: 'small',
        disabled: true
      },
      btn11: {
        type: 'error',
        size: 'mini',
        circle: true
      },
      btn12: {
        type: 'success',
        size: 'mini',
        plain: true
      }
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
