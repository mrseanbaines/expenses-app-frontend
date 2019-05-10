import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledListItemButtons } from '../styled-components';

const { Item, Icon } = StyledListItemButtons;

const ListItemButtons = memo(({ items, onClick, activeItem }) => (
  <ul>
    {items.map(item => (
      <Item key={item.id} onClick={() => onClick(item.id)} className={item.id === activeItem ? 'active' : undefined}>
        <Icon />
        {item.name}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  onClick: PropTypes.func,
  activeItem: PropTypes.string,
};

export default ListItemButtons;
