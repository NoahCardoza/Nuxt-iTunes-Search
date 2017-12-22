<template>
  <div>
    <h1>Search iTunes</h1>
    <search-itunes/>
  </div>
</template>

<script>
  import SearchItunes from '~/components/SearchItunes';

  export default {
    components: {
      SearchItunes
    }
  }
</script>

<style scoped>
  * {
    text-align: center;
  }

  h1 {
    padding: 20px;
  }
</style>
