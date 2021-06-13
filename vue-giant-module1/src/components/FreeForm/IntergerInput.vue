<style lang="scss">
$tag: "interger-input";
$sel: "." + $tag;

#{$sel} {
}
</style>

<template>
  <el-input
    v-model="famount"
    class="interger-input"
    v-bind="$attrs"
    @keyup.native="number"
  ></el-input>
</template>

<script>
const IntergerRegexp = /[^\.\d]/g

function checkIsPureNumber(val) {
  return !IntergerRegexp.test(val) && (val.indexOf('.') < 0)
}

export default {
  name: 'IntergerInput',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: null
  },
  data() {
    return {
      famount: undefined
    }
  },
  watch: {
    famount(newVal) {
      if (checkIsPureNumber(newVal)) {
        this.$emit('input', newVal)
      }
    }
  },
  created() {
    this.genInput()
  },
  methods: {
    genInput() {
      this.famount = this.value
    },
    number() {
      const v = this.famount.replace(IntergerRegexp, '')
      this.famount = v.replace('.', '')
    }
  }
}
</script>
