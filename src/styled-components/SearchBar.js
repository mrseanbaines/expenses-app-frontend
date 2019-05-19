import styled from 'styled-components';

const Input = styled.input.attrs({
  type: 'search',
})`
  -webkit-appearance: none;
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.greys.dark};
  padding: ${props => props.theme.space[3]};
  width: 100%;
  outline: none;

  ::placeholder {
    font-weight: ${props => props.theme.fontWeights.light};
    color: ${props => props.theme.colors.greys.medium};
    opacity: 1;
  }
`;

export default {
  Input,
};
