import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledToolTip } from '../styled-components';

const { Wrapper, TooltipArrow } = StyledToolTip;

const ToolTip = forwardRef(({ children, direction, ...props }, ref) => (
  <Wrapper direction={direction} {...props} ref={ref}>
    {children}
    <TooltipArrow direction={direction} />
  </Wrapper>
));

ToolTip.defaultProps = {
  direction: 'down',
  children: null,
};

ToolTip.propTypes = {
  direction: PropTypes.string,
  children: PropTypes.node,
};

export default ToolTip;
