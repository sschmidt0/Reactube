import './App.css';
import { useEffect } from 'react';
import { VideoContext } from './components/VideoContext';
import { useContext } from 'react';

import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { youtube, youtubeRecommendedVideos, youtubeRelatedVideos } from './apis/config';
import { VideoDetail } from './components/VideoDetail';
import { ComponentPrincipal } from './components/ComponentPrincipal';
import { VideoList } from './components/VideoList';
import ResponsiveDrawer from './components/ResponsiveDrawer';
import { makeStyles } from '@material-ui/core/styles';
import { HistoryPage } from './components/HistoryPage';

const history = createBrowserHistory();

const useStyles = makeStyles({
  appContainer: {
    display: 'flex',
    flexWrap: 'no-wrap',
    height: '100vh',
    backgroundColor: '#000014',
    color: '#DEE4E7',
  }
});

export const App = () => {
  const { videos, setVideos, setSelectedVideo, setRelatedVideos, searchHistory, setSearchHistory, favouriteVideos } = useContext(VideoContext);
  const classes = useStyles();

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
    //localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
  };

  const handleVideoSelect = async (video) => {
    await setSelectedVideo(video);

    // get detailed video information for DetailSelectedVideo component
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
    <Router history={ history }>
      <div className={ classes.appContainer }>
        <ResponsiveDrawer>
          <div style={{ display: 'flex', padding: 0, margin: 0, width: '100%' }} >
            <Switch>
              <Route exact path="/" render={() => <ComponentPrincipal
                handleVideoSelect={ handleVideoSelect }
                handleSubmit={ handleSubmit }
                videos={ videos }
              /> } />
              <Route exact path="/history" render={() => <HistoryPage
                title="Historial de videos"
                handleVideoSelect={ handleVideoSelect }
                videos={ videos }
                sliceVal="25"
              /> } />
              <Route exact path="/favourites" render={() => <VideoList
                title="Videos favoritos"
                handleVideoSelect={ handleVideoSelect }
                videos={ favouriteVideos }
                sliceVal="25"
              /> } />
              <Route path="/videos/:id" render={() => <VideoDetail
                handleVideoSelect={ handleVideoSelect }
              /> } />
            </Switch>
          </div>
        </ResponsiveDrawer>
      </div>
    </Router>
  );
};
