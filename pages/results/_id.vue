<template lang="html">
  <div>
    <br>
    <search-itunes/>
    <v-list three-line subheader>
      <v-subheader v-text="`Your Search: ${$route.params.id}`"/>
      <v-divider inset/>
      <itunes-item
      v-for="item in $store.state.results"
      v-bind:item="item"
      v-bind:playing="item.previewUrl == playing"
      v-on:toggle:preview="togglePreview"
      :key="item.artistId"/>
    </v-list>
    <span v-if="$store.state.results.length == 0">No results were found for: {{$route.params.id}}</span>
  </div>
</template>

<script>
import ItunesItem from '~/components/ItunesItem'
import SearchItunes from '~/components/SearchItunes';

export default {
  middleware: 'search',
  components:{
    ItunesItem,
    SearchItunes
  },
  data(){
    return {
      previews: {},
      playing: false,
      resultsBack: false
    }
  },
  beforeMount(){
    console.log(this.$store.state.results);
    // this.getItunesSearch();
  },
  methods: {
    togglePreview(url){
      if (!this.previews[url]){
        let audio = new Audio(url);
        const onEnded = () => this.playing = false;
        audio.addEventListener("ended", onEnded);
        this.previews[url] = {
          audio,
          onEnded
        }
      }
      const { audio } = this.previews[url];
      const { paused } = audio;
      if (this.playing)
        this.previews[this.playing].audio.pause();
      audio[(this.playing = paused) ? 'play' : 'pause']();
      audio.currentTime = 0;
      this.playing = this.playing && url;
    },
    getItunesSearch(){
      // Axios.get(`https://itunes.apple.com/search?media=music&term=${encodeURI(this.$route.params.id)}`)
      // .then(({ data: { results } }) => {
      //   this.results = results
      //   this.resultsBack = true;
      // })
      // .catch(console.error)
    }
  },
  destroyed(){
    if (this.playing)
      this.previews[this.playing].audio.pause();
    Object.keys(this.previews).forEach(
      k => this.previews[k].audio.removeEventListener('ended', this.previews[k].onEnded)
    )
  }
}
</script>

<style lang="css">
</style>
