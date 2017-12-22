<template>
  <section class="container">
    <div>
      <ToolBar/>
      <nuxt/>
    </div>
  </section>
</template>

<script>
  import ToolBar from '~/components/ToolBar.vue';
  export default {
    components:{
      ToolBar
    }
  }
</script>

<style>
  html {
    font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }

  a[href] {
    color: inherit;
    text-decoration: none;
    /* transition: opacity 0.2s linear; */
  }
  a[href]:hover {
    opacity: 0.7;
  }
</style>
