import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledListItemButtons } from '../styled-components';
import iconDots from '../images/icon-dots.svg';

const { Item, Icon } = StyledListItemButtons;

const ListItemButtons = memo(({ items, onClick, activeItem, options }) => (
  <ul>
    {items.map(({ id, name }) => (
      <Item key={id} onClick={() => onClick({ id, name })} className={id === activeItem ? 'active' : undefined}>
        <Icon />
        {name}
        {options && (
          <button type="button" className="dots" onClick={e => e.stopPropagation()}>
            <img src={iconDots} alt="" />
          </button>
        )}
      </Item>
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
