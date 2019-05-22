import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { StyledToolTip } from '../styled-components';

const { Wrapper, TooltipArrow } = StyledToolTip;

const ToolTip = memo(({ children, direction, ...props }) => (
  <Wrapper direction={direction} {...props}>
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
