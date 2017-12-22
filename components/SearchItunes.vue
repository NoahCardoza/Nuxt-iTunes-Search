<template lang="html">
  <v-text-field
    label="Search"
    v-model="search"
    v-on:keyup.enter="submit"
    spellcheck="false"
    autofocus
  />
</template>

<script>
export default {
  name: 'search-itunes',
  data(){
    return {
      search: ''
    }
  },
  methods: {
    submit(){
      this.$router.push(`results/${this.search}`)
    }
  }
}
</script>

<style lang="css">
</style>
