import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  videoItemContainer: {
    display: 'flex',
    //flexDirection: 'column',
    //justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 3,
    marginTop: 2,
    paddingBottom: 3,
    borderBottom: '1px solid lightgrey',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  imageContainer: {
    width: 200
  },
  videoItemTitle: {
    lineHeight: 1.2,
    marginTop: 7,
    marginLeft: 3,
    width: 160
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
      <div className="imageContainer">
        <img
          src={ video.snippet.thumbnails.medium.url }
          alt={ video.snippet.description }
          className={ classes.videoItemImage }
        />
      </div>
      <h6 className={ classes.videoItemTitle }>{ video.snippet.title }</h6>
    </div>
  )
};

VideoItem.propTypes = {
  video: PropTypes.object,
  handleVideoSelect: PropTypes.func
};
