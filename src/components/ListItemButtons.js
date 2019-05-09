import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledListItemButtons } from '../styled-components';

const { Item, Icon } = StyledListItemButtons;

const ListItemButtons = memo(({ items, onClick, activeItem }) => (
  <ul>
    {items.map(item => (
      <Item key={item} onClick={() => onClick(item)} className={item === activeItem ? 'active' : undefined}>
        <Icon />
        {item}
      </Item>
    ))}
  </ul>
));

ListItemButtons.defaultProps = {
  items: [],
  onClick: () => {},
  activeItem: '',
};

ListItemButtons.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func,
  activeItem: PropTypes.string,
};

export default ListItemButtons;
