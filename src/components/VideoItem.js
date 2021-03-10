import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  videoItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'space-between',
    marginBottom: 20,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  videoItemTitle: {
    lineHeight: 1.2,
    marginTop: 7
  },
  videoItemImage: {
    width: '100%',
  },
});

export const VideoItem = ({ handleVideoSelect, video }) => {
  const classes = useStyles();

  return (
    <div
      className={ classes.videoItemContainer }
      onClick={ () => handleVideoSelect(video) }
    >
      <img
        src={ video.snippet.thumbnails.medium.url }
        alt={ video.snippet.description }
        className={ classes.videoItemImage }
      />
      <h5 className={ classes.videoItemTitle }>{ video.snippet.title }</h5>
    </div>
  )
};

VideoItem.propTypes = {
  video: PropTypes.object,
  handleVideoSelect: PropTypes.func
};
