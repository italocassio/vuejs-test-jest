<template>
  <div>
    <h2>Test Sum and Sub</h2>
    <div class="soma">{{ sum }}</div>
    <div class="subt">{{ sub }} <button @click="subtrair">subtrair</button></div>
  </div>
</template>

<script>
export default {
  name: 'Sum',
  props: {
    number1: {
      type: String,
      default: '0',
    },
    number2: {
      type: String,
      default: '0',
    },
  },
  data() {
    return {
      sum: 0,
      sub: 0,
    };
  },
  created() {
    this.somar();
  },
  methods: {
    somar() {
      // eslint-disable-next-line radix
      this.sum = parseInt(this.number1) + parseInt(this.number2);
    },
    subtrair() {
      // eslint-disable-next-line radix
      this.sub = parseInt(this.number1) - parseInt(this.number2);
    },
  },
};
</script>

<style lang='scss' scoped></style>
