<template>
  <el-select :value="value" v-bind="$attrs" :clearable="clearable" @change="onChange">
    <el-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value" />
  </el-select>
</template>

<script>
export default {
  name: 'MonthOptions',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    value: null,
    start: {
      type: Number,
      default: 1
    },
    clearable: Boolean
  },
  data() {
    const start = this.start
    const options = new Array(12).fill(0).map((v, index) => {
      const year = start + index
      return {
        label: year + '',
        value: year
      }
    })

    return {
      options
    }
  },
  methods: {
    onChange(v) {
      this.$emit('input', v)
    }
  }
}
</script>

<style scoped>
</style>
