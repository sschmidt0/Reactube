import axios from 'axios';

const key = 'AIzaSyDmNHKAJGH0p2p2pA8egzu5zrO54yPZRZg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '10',
    type: 'video',
    key: key
  }
});
