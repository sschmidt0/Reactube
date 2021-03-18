import './App.css';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import youtube from './apis/youtube';
import youtubeRelatedVideos from './apis/youtubeRelatedVideos';
import youtubeRecommendedVideos from './apis/youtubeRecommendedVideos';
import { SearchBar } from './components/SearchBar';
import { VideoDetail } from './components/VideoDetail';
import { Container } from '@material-ui/core';
import { VideoContext } from './components/VideoContext';
import { useContext } from 'react';
import { ComponentPrincipal } from './components/ComponentPrincipal';

const history = createBrowserHistory();

export const App = () => {
  const { videos, setVideos, setSelectedVideo, setRelatedVideos, searchHistory, setSearchHistory } = useContext(VideoContext);

  const handleSubmit = async (e, termFromSearchBar) => {
    e.preventDefault();

    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    });

    await setVideos(response.data.items);
    const firstVideoImgSrc = response.data.items[0].snippet.thumbnails.medium.url;
    const searchHistoryItem = {
      firstVideoImgSrc,
      searchTerm: termFromSearchBar,
      searchDate: Date.now(),
      searchVideos: videos
    };
    console.log('searchHistoryItem: ', searchHistoryItem);
    setSearchHistory([...searchHistory, searchHistoryItem]);
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  };

  const handleVideoSelect = async (video) => {
    console.log('from handleVideoSelect ', video);
    await setSelectedVideo(video);

    const response = await youtubeRelatedVideos.get('/search', {
      params: {
        relatedToVideoId: video.id.videoId,
      }
    });
    await setRelatedVideos(response.data.items);
  };

  useEffect(() => {
    const getRecommendedVideos = async () => {
      const response = await youtubeRecommendedVideos.get('/search');
      await setVideos(response.data.items);
    };
    getRecommendedVideos();
  }, []);

  return (
    <Container
      maxWidth="lg"
      style={{ padding: 5 }}
    >
      <SearchBar handleSubmit={ handleSubmit } />
      <Container
        className="container-flexbox"
        maxWidth="lg"
        style={{ display: 'flex', padding: 0, }}
      >
        <Router history={ history }>
          <Switch>
            <Route exact path="/" render={() => <ComponentPrincipal
              handleVideoSelect={ handleVideoSelect }
              videos={ videos }
            /> } />
            <Route path="/videos/:id" render={() => <VideoDetail
              handleVideoSelect={ handleVideoSelect }
            /> } />
          </Switch>
        </Router>
      </Container>
    </Container>
  );
};
