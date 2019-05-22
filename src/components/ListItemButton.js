import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledListItemButtons } from '../styled-components';
import iconDots from '../images/icon-dots.svg';
import ToolTip from './Tooltip';

const { Item, Icon } = StyledListItemButtons;

class ListItemButton extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      showOptions: false,
    };
  }

  toggleShowOptions = e => {
    if (e) {
      e.stopPropagation();
    }

    this.setState(prevState => ({
      showOptions: !prevState.showOptions,
    }));
  };

  render() {
    const { onClick, activeItem, options, id, name } = this.props;
    const { showOptions } = this.state;

    return (
      <Item onClick={() => onClick({ id, name })} className={id === activeItem ? 'active' : undefined}>
        <Icon />
        {name}
        {options && (
          <>
            <button
              type="button"
              className="dots"
              onClick={this.toggleShowOptions}
              onMouseLeave={showOptions ? this.toggleShowOptions : undefined}
            >
              <img src={iconDots} alt="" />
              {showOptions && (
                <ToolTip onClick={e => e.stopPropagation()} direction="down">
                  Delete
                </ToolTip>
              )}
            </button>
          </>
        )}
      </Item>
    );
  }
}

ListItemButton.defaultProps = {
  onClick: () => {},
  activeItem: '',
  options: false,
  id: '12345',
  name: 'Lorem ipsum',
};

ListItemButton.propTypes = {
  onClick: PropTypes.func,
  activeItem: PropTypes.string,
  options: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
};

export default ListItemButton;
