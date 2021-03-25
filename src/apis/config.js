import axios from 'axios';

//const key = 'AIzaSyCG1fbGhVZIYcB1BQ9338RaU2zbEX74QEQ';
//const key = 'AIzaSyBPgYnmt4NB2CrZy96vRls3b0oISGKzo3w';
//const key = 'AIzaSyCnXD2gk2wBcitPyBUzhtIaldhVAQXTrbM';
const key = 'AIzaSyAWOYENCPlfNnwxNxarNDbNleKDvtyvHP0';

export const youtube = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '25',
    key: key
  }
});

export const youtubeRecommendedVideos = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: '25',
    type: 'video',
    //regionCode: 'ISO 3166-1 es',
    h1: 'es-ES',
    key: key,
  }
});

export const youtubeRelatedVideos = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: '25',
    type: 'video',
    key: key
  }
});
