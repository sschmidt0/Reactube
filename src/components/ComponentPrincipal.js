import { VideoList } from './VideoList';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { FavouriteVideoList } from './FavouriteVideoList';
import { HistoryList } from './HistoryList';

const useStyles = makeStyles({
  flexbox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  flexItemLeft: {
    width: 500,
    marginRight: 20,
    marginBottom: 40,
  },
  flexItemRight: {
    minWidth: 380,
    maxWidth: 700
  }
});

export const ComponentPrincipal = ({ handleVideoSelect }) => {
  const { videos, favouriteVideos, searchHistory } = useContext(VideoContext);
  const classes = useStyles();

  return (
    <section>
      <VideoList
        title="Recommended Videos"
        handleVideoSelect={ handleVideoSelect }
        videos={ videos }
        sliceVal="5"
      />
      <Box
        display="flex"
        flexWrap="wrap"
        className={ classes.flexbox }
      >
        <Box>
          <article className={ classes.flexItemLeft }>
            { searchHistory.length > 0 ? <h3>Last searches</h3> : <h3>No searches yet</h3> }
            { searchHistory.length > 0 && <HistoryList /> }
          </article>
        </Box>
        <Box flexGrow={1}>
          <article className={ classes.flexItemRight }>
            <h3>Favourite Videos · { favouriteVideos.length }</h3>
            <FavouriteVideoList />
          </article>
        </Box>
      </Box>
    </section>
  )
};
