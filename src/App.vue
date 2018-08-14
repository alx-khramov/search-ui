<template>
  <div id="app">
    <TheMainScreen/>
  </div>
</template>

<script>
import TheMainScreen from './components/TheMainScreen.vue';
import store from './store/index';

export default {
  name: 'app',
  store,
  components: {
    TheMainScreen
  }
};
</script>

<style lang="scss">
@import '~normalize.css';
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

body {
  font-family: 'Roboto', sans-serif;
}
</style>
