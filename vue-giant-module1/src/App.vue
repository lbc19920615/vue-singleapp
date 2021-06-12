<template>
  <div id="app">
    <menu-panel></menu-panel>
    <div class="panel">
      <router-view />
    </div>
  </div>
</template>
<script>
import MenuPanel from '@/components/MenuPanel'

export default {
  name: 'App',
  components: {
    MenuPanel
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  .panel {
    flex: 1;
  }
}
</style>
