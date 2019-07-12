import { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ScrollToTop extends PureComponent {
  componentDidUpdate = prevProps => {
    const { location } = this.props;

    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  };

  render = () => {
    const { children } = this.props;

    return children;
  };
}

ScrollToTop.defaultProps = {
  children: null,
  location: {
    pathname: '',
  },
};

ScrollToTop.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

export default withRouter(ScrollToTop);
