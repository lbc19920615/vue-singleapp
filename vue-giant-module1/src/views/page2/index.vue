<template>
  <div class="page2">
    <Page2Form1></Page2Form1>

    <h2>官方DEMO</h2>
    <iframe
      class="a-iframe-block"
      src="https://ncform.github.io/ncform/ncform-theme-elementui/index.html"
      frameborder="0"
      style="height: 560px"
    ></iframe>
  </div>
</template>

<script>
import Page2Form1 from '@/views/page2/components/Page2Form1'
export default {
  name: 'Page2',
  components: {Page2Form1}
}
</script>
