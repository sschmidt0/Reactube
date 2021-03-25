import PropTypes from 'prop-types';
import Link from './styled/Link';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';
import YouTube from 'react-youtube';

// import Cookies from 'universal-cookie';
// const cookies = new Cookies();
// cookies.set('cross-site-cookie'=bar, SameSite=None, Secure);
//Set-Cookie: flavor=choco; SameSite=None; Secure
//document.cookie = "cross-site-cookie=bar, SameSite=None, Secure";

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    marginRight: 20,
    marginBottom: 20,
  },
  videoItemContainer: {
    display: 'flex',
  },
  cardImatge: {
    maxHeight: 120,
    objectFit: 'cover',
  },
  cardBottom: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardBottomText: {
    color: 'lightgrey',
    fontSize: 13,
  },
  ytVideo: {
    width: 250,
    height: 120,
  },
  ytContainer: {
    backgroundColor: '#fff',
  }
});

export const VideoItem = ({ handleVideoSelect, video, isFavourite }) => {
  const classes = useStyles();
  const favourite = isFavourite(video);
  const { favouriteVideos, setFavouriteVideos } = useContext(VideoContext);
  const path = `/videos/${video.id.videoId}`;
  const { historyVideos, setHistoryVideos } = useContext(VideoContext);
  //const historyVideos = JSON.parse(localStorage.getItem('historyVideos'));

  const handleFavoriteIconDelete = (e, video) => {
    e.preventDefault();
    const fv = favouriteVideos.filter(elem => elem.id.videoId !== video.id.videoId);
    setFavouriteVideos(fv);
    localStorage.setItem('favouriteVideos', JSON.stringify(fv));
  }

  const handleFavoriteIconAdd = (e) => {
    e.preventDefault();
    const fv = [...favouriteVideos, video];
    setFavouriteVideos(fv);
    localStorage.setItem('favouriteVideos', JSON.stringify(fv));
  };

  const videoHistory = () => {
    console.log('playing');
    const hv = [...historyVideos, video];
    console.log(hv);
    setHistoryVideos(hv);
    localStorage.setItem('historyVideos', JSON.stringify(hv));
  };


  return (
    <Link to={ path }>
      <div
        className={ classes.videoItemContainer }
        onClick={ (e) => handleVideoSelect(e.target) }
      >
        <Card className={ classes.root }>
          <CardActionArea>
            <CardMedia
              alt={ video.snippet.title }
              className={ classes.cardImatge }
            >
              <YouTube
                videoId={ video.id.videoId }
                className={ classes.ytVideo }
                containerClassName={ classes.ytContainer }
                onPlay={ () => videoHistory() }
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="subtitle2" component="h3">
                { video.snippet.title.substring(0, 20) + '...' }
              </Typography>
              <div className={ classes.cardBottom }>
                <Typography gutterBottom component="h3" className={ classes.cardBottomText }>
                  { moment(video.snippet.publishedAt).fromNow() }
                </Typography>
                {
                  favourite ?
                  <FavoriteIcon color="secondary" onClick={ (e) => handleFavoriteIconDelete(e, video) } /> :
                  <FavoriteBorderIcon color="secondary" onClick={ (e) => handleFavoriteIconAdd(e) } />
                }
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    </Link>
  )
};

VideoItem.propTypes = {
  isFavourite: PropTypes.func,
  video: PropTypes.object,
  handleVideoSelect: PropTypes.func,
};
