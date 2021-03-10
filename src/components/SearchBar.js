import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
//import SearchBar from "material-ui-search-bar";

const useStyles = makeStyles({
  navbar: {
    marginBottom: 20,
    padding: 20,
    border: '2px solid lightgrey'
  },
  navbarSearch: {
    display: 'flex'
  },
  searchIcon: {
    alignSelf: 'end'
  }
});

const SearchBar = ({ handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const classes = useStyles();

  const handleChange = (e) => setSearchTerm(e.target.value);

  return (
    <nav className={ classes.navbar }>
      <form
        onSubmit={ (e) => handleSubmit(e, searchTerm) }
        className={ classes.navbarSearch }
      >
        <SearchIcon className={ classes.searchIcon } />
        <TextField
          id="standard-search"
          label="Video Search"
          type="search"
          onChange={ (e) => handleChange(e) }
          value={ searchTerm }
          name="search"
        />
      </form>
    </nav>
  );
};

export default SearchBar;





