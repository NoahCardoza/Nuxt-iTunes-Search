<template lang="html">
  <v-list-tile dark avatar @click="">
    <div style="margin-right: 16px;">
      <v-avatar tile size="70px">
        <img class="fill" :src="item.artworkUrl100" alt="">
      </v-avatar>
    </div>
    <v-list-tile-content>
      <a target="_blank" :href="item.trackViewUrl">
       <v-list-tile-title v-text="item.trackName"/>
      </a>
      <a target="_blank" :href="item.collectionViewUrl">
        <v-list-tile-sub-title v-text="item.collectionName"/>
      </a>
      <a target="_blank" :href="item.artistViewUrl">
       <v-list-tile-sub-title class="grey--text text--darken-3" v-text="item.artistName"/>
      </a>
     </v-list-tile-content>
     <div>
       <v-btn color="grey darken-2" large icon v-on:click="preview">
         <v-icon large color="white">{{(playing ? 'refresh' : 'play_circle_filled')}}</v-icon>
       </v-btn>
     </div>
  </v-list-tile>
</template>
<script>
  export default {
    name: 'itunes-item',
    props: ['item', 'playing'],
    methods:{
      preview(){
        this.$emit('toggle:preview', this.item.previewUrl);
      }
    }
  }
</script>

<style lang="css" scoped>
  .fill {
    height: auto !important;
    width: auto !important;
    max-height: 100%;
    max-width: 100%;
  }
  /* a {
    color: inherit;
  } */
</style>
