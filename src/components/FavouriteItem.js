import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';

const useStyles = makeStyles({
  favouriteGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridTemplateRows: '1fr',
    marginRight: 20,
  },
  favouriteImageContainer: {
    gridColumn: '1/-1',
    gridRow: '1/span 1',
    maxWidth: 190,
    marginBottom: 20,
    cursor: 'pointer',
  },
  favouriteIconContainer: {
    gridColumn: 'span 1/-1',
    gridRowStart: 1,
    alignSelf: 'stretch',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: '999',
  },
  favouriteImage: {
    width: '100%',
    objectFit: 'contain',
    borderRadius: 5,
  },
});

export const FavouriteItem = ({ handleVideoSelect, video }) => {
  const { favouriteVideos } = useContext(VideoContext);
  const classes = useStyles();

  const handleFavoriteVideo = (video) => {
    const index = favouriteVideos.findIndex(el => el.id.VideoId === video.id.VideoId);
    console.log('index: ', index);
    console.log(favouriteVideos.length);
    favouriteVideos.splice(index, 1);
    console.log(favouriteVideos.length);
    localStorage.setItem('favouriteVideos',JSON.stringify(favouriteVideos));
  }

  return (
    <div className={ classes.favouriteGrid }>
      <div className={ classes.favouriteImageContainer }>
        <img
          alt={ video.snippet.title }
          src={ video.snippet.thumbnails.medium.url }
          title={ video.snippet.title }
          className={ classes.favouriteImage }
          handleVideoSelect={ () => handleVideoSelect(video) }
        />
      </div>
      <div className={ classes.favouriteIconContainer }>
        <FavoriteIcon
          color="secondary"
          onClick={ (e) => handleFavoriteVideo(video) }
        />
      </div>
    </div>
  )
};

FavouriteItem.propTypes = {
  video: PropTypes.object,
  handleVideoSelect: PropTypes.func
};
