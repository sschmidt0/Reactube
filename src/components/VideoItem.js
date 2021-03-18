import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from './styled/Link';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import moment from 'moment';

const useStyles = makeStyles({
  root: {
    maxWidth: 210,
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
  }
});

export const VideoItem = ({ handleVideoSelect, video }) => {
  const [favorite, setFavorite] = useState(false);
  const { favouriteVideos, setFavouriteVideos } = useContext(VideoContext);
  const classes = useStyles();
  const path = `/videos/${video.id.videoId}`;

  const handleFavoriteIcon = (e) => {
    e.preventDefault();
    setFavorite(!favorite);
  //   if (favorite) {
  //     setFavouriteVideos([...favouriteVideos, video]);
  // } else {
  //   const index = favouriteVideos.findIndex(el => el.id.VideoId === video.id.VideoId);
  //   console.log('index: ', index);
  //   console.log(favouriteVideos.length);
  //   favouriteVideos.splice(index, 1);
  //   console.log(favouriteVideos.length);
  // }
  setFavouriteVideos([...favouriteVideos, video]);
  localStorage.setItem('favouriteVideos', JSON.stringify(favouriteVideos));
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
              component="img"
              alt={ video.snippet.title }
              image={ video.snippet.thumbnails.medium.url }
              title={ video.snippet.title }
              className={ classes.cardImatge }
            />
            <CardContent>
              <Typography gutterBottom variant="subtitle2" component="h3">
                { video.snippet.title.substring(0, 20) + '...' }
              </Typography>
              <div className={ classes.cardBottom }>
                <Typography gutterBottom component="h3" className={ classes.cardBottomText }>
                  { moment(video.snippet.publishedAt).fromNow() }
                </Typography>
                {
                  favorite ?
                  <FavoriteIcon color="secondary" onClick={ (e) => handleFavoriteIcon(e) } /> :
                  <FavoriteBorderIcon color="secondary" onClick={ (e) => handleFavoriteIcon(e) } />
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
  //video: PropTypes.object,
  handleVideoSelect: PropTypes.func
};
