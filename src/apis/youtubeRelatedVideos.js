import axios from 'axios';

const key = 'AIzaSyBPgYnmt4NB2CrZy96vRls3b0oISGKzo3w';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '10',
    type: 'video',
    key: key
  }
});
