import axios from 'axios';

const key = 'AIzaSyCG1fbGhVZIYcB1BQ9338RaU2zbEX74QEQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '10',
    type: 'video',
    key: key
  }
});
