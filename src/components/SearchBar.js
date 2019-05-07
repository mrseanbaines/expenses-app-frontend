import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledSearchBar } from '../styled-components';

const { Input } = StyledSearchBar;

const SearchBar = memo(({ updateSearchQuery, searchQuery }) => (
  <Input onChange={updateSearchQuery} type="search" placeholder="Search expenses" value={searchQuery} />
));

SearchBar.defaultProps = {
  updateSearchQuery: () => {},
  searchQuery: '',
};

SearchBar.propTypes = {
  updateSearchQuery: PropTypes.func,
  searchQuery: PropTypes.string,
};

export default SearchBar;
