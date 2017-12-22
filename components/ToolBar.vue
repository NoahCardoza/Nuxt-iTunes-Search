<template lang="html">
  <v-toolbar dark color="grey darken-3">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-tool-title class="white--text">
      <nuxt-link class="title" to="/">iTunes Search</nuxt-link>
    </v-tool-title>
    <v-spacer/>
    <v-btn to="/" icon>
      <v-icon>refresh</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style scoped lang="css">
  .title, .title:visited {
    text-decoration: none;
    color: white;
  }
</style>
