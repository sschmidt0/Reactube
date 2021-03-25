import { useContext } from 'react';
import { makeStyles, fade } from '@material-ui/core/styles';
import { InputBase } from '@material-ui/core/';
import { Search } from '@material-ui/icons/';
import PropTypes from 'prop-types';
import { VideoContext } from './VideoContext';

const useStyles = makeStyles((theme) => ({
  navbarSearch: {
    marginLeft: 15,
    marginTop: 20,
  },
  navBox: {
    backgroundColor: '#000014',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: '-24px !important',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#909099',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export const SearchBar = ({ handleSubmit }) => {
  const { searchTerm, setSearchTerm } = useContext(VideoContext);
  const classes = useStyles();

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <form
      onSubmit={ (e) => handleSubmit(e, searchTerm) }
      className={ classes.navbarSearch }
    >
      <div className={ classes.search }>
        <div className={ classes.searchIcon }>
          <Search />
        </div>
        <InputBase
          placeholder="Search..."
          onChange={ (e) => handleChange(e) }
          value={ searchTerm }
          name="search"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </form>
  );
};

SearchBar.propTypes = {
  handleSubmit: PropTypes.func
};
