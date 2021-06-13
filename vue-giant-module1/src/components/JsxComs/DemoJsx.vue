<style lang="scss">
$tag: "DemoJsx";
$sel: "." + $tag;

#{$sel} {
}
</style>

<script>
export default {
  name: 'DemoJsx',
  data() {
    return {}
  },
  methods: {
    handleClick() {
      console.log('handleClick')
    }
  },
  render(createElement, context) {
    return (
      <button onClick={this.handleClick}>button</button>
    )
  }
}
</script>
