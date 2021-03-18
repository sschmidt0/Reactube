import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button } from '@material-ui/core/';
import { VideoContext } from './VideoContext';
import { useContext } from 'react';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginRight: 30,
    width: '100%',
    backgroundColor: 'grey',
    borderBottom: '1px solid darkgrey',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  historyLeft: {
    display: 'flex',
    alignItems: 'center',
  },
  historyImage: {
    marginRight: 10,
  },
  historyDate: {
    marginLeft: 5,
    '&::before': {
      content: '"·"',
      marginRight: 5,
    },
  },
}));

export const HistoryListItem = ({ image, term, date, videos }) => {
  const { setVideos } = useContext(VideoContext);
  const classes = useStyles();

  const handleClick = async () => {
    await setVideos(videos);
  };

  return (
    <div className={ classes.root }>
      <div className={ classes.historyLeft }>
        <Avatar
          alt={ term }
          src={ image }
          className={ classes.historyImage }
        />
        <span>{ term }</span>
        <span className={ classes.historyDate }>{ date }</span>
      </div>
      <Button
        variant="contained"
        color="secondary"
        onClick={ () => handleClick() }
      >
        Cargar videos
      </Button>
    </div>
  )
};

HistoryListItem.propTypes = {
  image: PropTypes.string,
  term: PropTypes.string,
  date: PropTypes.string,
  video: PropTypes.object
};
