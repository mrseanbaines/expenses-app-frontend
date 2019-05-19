import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  overflow: scroll;
  z-index: 1;

  .close {
    text-align: center;
    color: ${props => props.theme.colors.white};
  }

  * {
    max-width: 100%;
  }
`;

export default {
  Container,
};
