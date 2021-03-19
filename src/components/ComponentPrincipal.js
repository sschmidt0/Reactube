import { VideoList } from './VideoList';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { FavouriteVideoList } from './FavouriteVideoList';
import { HistoryList } from './HistoryList';
import { SearchBar } from './SearchBar';

const useStyles = makeStyles({
  gridItemLeft: {
    width: 460,
    marginBottom: 40,
  },
});

export const ComponentPrincipal = ({ handleVideoSelect, handleSubmit }) => {
  const { videos, favouriteVideos, searchHistory } = useContext(VideoContext);
  const classes = useStyles();

  return (
    <div>
      <SearchBar handleSubmit={ handleSubmit } />
      <section>
        <VideoList
          title="Recommended Videos"
          handleVideoSelect={ handleVideoSelect }
          videos={ videos }
          sliceVal="5"
        />
        <Grid
          container
          direction="row"
          spacing={1}
        >
          <Grid item xs={12} sm={12} md={6} >
            <article className={ classes.gridItemLeft }>
              { searchHistory.length > 0 ? <h3>Last searches</h3> : <h3>No searches yet</h3> }
              { searchHistory.length > 0 && <HistoryList /> }
            </article>
          </Grid>
          <Grid item xs={12} sm={12} md={6} >
            <article>
              <h3>Favourite Videos · { favouriteVideos.length }</h3>
              <FavouriteVideoList />
            </article>
          </Grid>
        </Grid>
      </section>
    </div>
  )
};
