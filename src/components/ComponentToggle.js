import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ButtonInputToggle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: 0,
    };

    this.ref = React.createRef();
  }

  toggleActive = () => {
    const { activeIndex } = this.state;

    this.setState(
      prevState => ({
        activeIndex: prevState.activeIndex === 0 ? 1 : 0,
      }),
      () => {
        if (!activeIndex && this.ref.current) {
          this.ref.current.focus();
        }
      }
    );
  };

  render() {
    const { activeIndex } = this.state;
    const { children } = this.props;
    const child = children[activeIndex] || children;
    const { toggleHandler } = child.props;

    return React.cloneElement(child, {
      [toggleHandler || 'onClick']: this.toggleActive,
      ref: this.ref,
    });
  }
}

ButtonInputToggle.defaultProps = {
  children: null,
};

ButtonInputToggle.propTypes = {
  children: PropTypes.node,
};
