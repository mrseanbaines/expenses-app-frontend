import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledListItemButtons } from '../styled-components';

const { Item, Icon } = StyledListItemButtons;

const ListItemButtons = memo(({ items }) => (
  <ul>
    {items.map(item => (
      <Item>
        <Icon />
        {item}
      </Item>
    ))}
    <Item>
      <Icon />
      Add category
    </Item>
  </ul>
));

ListItemButtons.defaultProps = {
  items: [],
};

ListItemButtons.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
};

export default ListItemButtons;
