<template>
  <div class="page2">
    <router-link to="basic">basic</router-link>

    <Page2Form1></Page2Form1>

    <router-view></router-view>
  </div>
</template>

<script>
import Page2Form1 from '@/views/page2/components/Page2Form1'
export default {
  name: 'Page2',
  components: {Page2Form1}
}
</script>
