import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ListItemButton from './ListItemButton';

const ListItemButtons = memo(({ items, onClick, activeItem, options }) => (
  <ul>
    {items.map(({ id, name }) => (
      <ListItemButton key={id} id={id} name={name} onClick={onClick} activeItem={activeItem} options={options} />
    ))}
  </ul>
));

ListItemButtons.defaultProps = {
  items: [],
  onClick: () => {},
  activeItem: '',
  options: false,
};

ListItemButtons.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
  activeItem: PropTypes.string,
  options: PropTypes.bool,
};

export default ListItemButtons;
