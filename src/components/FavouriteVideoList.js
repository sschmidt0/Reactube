import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import { FavouriteItem } from './FavouriteItem';

const useStyles = makeStyles({
  favouriteVideoListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
});

export const FavouriteVideoList = ({ handleVideoSelect }) => {
  const { favouriteVideos } = useContext(VideoContext);
  const classes = useStyles();

  const renderedVideos = favouriteVideos.slice(0, 5).map((video, key) =>
    <FavouriteItem
      key={ key }
      handleVideoSelect={ () => handleVideoSelect(video) }
      video = { video }
    />
  );

  return (
    <div className={ classes.favouriteVideoListContainer }>
      { renderedVideos }
    </div>
  )
};

FavouriteVideoList.propTypes = {
  //videos: PropTypes.array,
  handleVideoSelect: PropTypes.func
};
