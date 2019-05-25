import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { StyledListItemButtons, StyledToolTip, Grid } from '../styled-components';
import iconDots from '../images/icon-dots.svg';
import ToolTip from './Tooltip';

const { Item, Icon } = StyledListItemButtons;
const { Container } = StyledToolTip;
const { Flex } = Grid;

class ListItemButton extends PureComponent {
  constructor(props) {
    super(props);

    this.toolTip = React.createRef();
  }

  componentDidMount() {
    window.addEventListener('click', this.hideOptions);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.hideOptions);
  }

  hideOptions = e => {
    const { setShowOptionsId } = this.props;

    if (this.toolTip.current && !this.toolTip.current.contains(e.target)) {
      setShowOptionsId({ e });
    }
  };

  deleteCategory = () => {
    const { deleteCategory, onClick, id, activeItem } = this.props;

    deleteCategory({ id });

    if (id === activeItem) {
      onClick({});
    }
  };

  render() {
    const { onClick, activeItem, options, id, name, showOptions, setShowOptionsId } = this.props;

    return (
      <Item onClick={() => onClick({ id, name })} className={id === activeItem ? 'active' : undefined}>
        <Flex>
          <Icon />
          {name}
        </Flex>

        {options && (
          <Container>
            <button type="button" className="dots" onClick={e => setShowOptionsId({ e, id })}>
              <img src={iconDots} alt="" />
            </button>

            {showOptions && (
              <ToolTip ref={this.toolTip} onClick={e => e.stopPropagation()} direction="down">
                <button type="button" onClick={this.deleteCategory}>
                  Delete
                </button>
              </ToolTip>
            )}
          </Container>
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
  deleteCategory: () => {},
  showOptions: false,
  setShowOptionsId: () => {},
};

ListItemButton.propTypes = {
  onClick: PropTypes.func,
  activeItem: PropTypes.string,
  options: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  deleteCategory: PropTypes.func,
  showOptions: PropTypes.bool,
  setShowOptionsId: PropTypes.func,
};

export default ListItemButton;
