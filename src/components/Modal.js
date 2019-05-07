import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, StyledModal } from '../styled-components';

const { Flex, Box } = Grid;
const { Container } = StyledModal;

const Modal = memo(({ children, closeModal }) => (
  <Container onClick={closeModal}>
    <Flex py={3} justifyContent="center" alignItems="center" css={{ minHeight: '100%' }}>
      <Box width={[10 / 12, 8 / 12, 6 / 12]}>
        <Flex justifyContent="center" alignItems="center">
          {children}
        </Flex>
        <Box mt={2} className="close">
          Click to close
        </Box>
      </Box>
    </Flex>
  </Container>
));

Modal.defaultProps = {
  children: null,
  closeModal: () => {},
};

Modal.propTypes = {
  children: PropTypes.node,
  closeModal: PropTypes.func,
};

export default Modal;
