import styled from 'styled-components';
import { Flex, Box } from '@rebass/grid';

const Container = styled(Flex)`
  max-width: 960px;
  position: relative;
`;

Container.defaultProps = {
  mx: 'auto',
  px: [2, 2, 3],
  flexDirection: 'column',
};

const Row = styled(Flex)``;

Row.defaultProps = {
  mx: [-1, -1, -2],
  flexWrap: 'wrap',
};

const Col = styled(Box)``;

Col.defaultProps = {
  px: [1, 1, 2],
};

export default {
  Container,
  Row,
  Col,
  Flex,
  Box,
};
