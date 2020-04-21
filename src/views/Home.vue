<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <Sum number1="1" number2="2"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Sum from '@/components/Sum.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Sum
  },
};
</script>
