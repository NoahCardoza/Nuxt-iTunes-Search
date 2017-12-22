import Axios from 'axios';

export default function ({ params, store }){
  return Axios.get(`https://itunes.apple.com/search?media=music&term=${encodeURI(params.id)}`)
  .then(({ data: { results } }) => {
    store.commit('addMusic', results);
  })
}
