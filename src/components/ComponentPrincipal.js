import { VideoList } from './VideoList';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FavouriteVideoList } from './FavouriteVideoList';

const useStyles = makeStyles({
  flexbox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  flexItem: {
    width: '45%',
  },
});

export const ComponentPrincipal = ({ handleVideoSelect, videos }) => {
  const { favouriteVideos } = useContext(VideoContext);
  const classes = useStyles();

  return (
    <section>
      <VideoList
        title="Recommended Videos"
        handleVideoSelect={ handleVideoSelect }
        videos={ videos }
        sliceVal="5"
      />
      <div className={ classes.flexbox }>
        <article>
          <h3>Last searches</h3>
          left
        </article>
        <article>
          <h3>Favourite Videos · { favouriteVideos.length }</h3>
          <FavouriteVideoList />
        </article>
      </div>
    </section>
  )
};
