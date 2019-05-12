import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledListItemButtons } from '../styled-components';

const { Item, Icon } = StyledListItemButtons;

const ListItemButtons = memo(({ items, onClick, activeItem }) => (
  <ul>
    {items.map(({ id, name }) => (
      <Item key={id} onClick={() => onClick({ id, name })} className={id === activeItem ? 'active' : undefined}>
        <Icon />
        {name}
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
