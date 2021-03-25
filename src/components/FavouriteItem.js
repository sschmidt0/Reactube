import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Link from './styled/Link';

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
  const classes = useStyles();
  const path = `/videos/${video.id.videoId}`;

  return (
    <Link to={ path }>
      <div
        className={ classes.favouriteGrid }
        onClick={ (e) => handleVideoSelect(e.target) }
      >

        <div className={ classes.favouriteImageContainer }>
          <img
            alt={ video.snippet.title }
            src={ video.snippet.thumbnails.medium.url }
            title={ video.snippet.title }
            className={ classes.favouriteImage }
          />
        </div>
        <div className={ classes.favouriteIconContainer }>
          <FavoriteIcon color="secondary" />
        </div>
      </div>
    </Link>
  )
};

FavouriteItem.propTypes = {
  video: PropTypes.object,
  handleVideoSelect: PropTypes.func
};
