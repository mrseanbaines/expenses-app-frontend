import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ListItemButton from './ListItemButton';

class ListItemButtons extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      toggleId: '',
    };
  }

  setShowOptionsId = ({ e, id = '' }) => {
    if (e) {
      e.stopPropagation();
    }

    this.setState(prevState => ({
      toggleId: prevState.toggleId === id ? '' : id,
    }));
  };

  render() {
    const { items, onClick, activeItem, options, deleteCategory } = this.props;
    const { toggleId } = this.state;

    return (
      <ul>
        {items.map(({ id, name }) => (
          <ListItemButton
            key={id}
            id={id}
            name={name}
            onClick={onClick}
            activeItem={activeItem}
            options={options}
            deleteCategory={deleteCategory}
            showOptions={toggleId === id}
            setShowOptionsId={this.setShowOptionsId}
          />
        ))}
      </ul>
    );
  }
}

ListItemButtons.defaultProps = {
  items: [],
  onClick: () => {},
  activeItem: '',
  options: false,
  deleteCategory: () => {},
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
  deleteCategory: PropTypes.func,
};

export default ListItemButtons;
