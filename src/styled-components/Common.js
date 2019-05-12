import styled from 'styled-components';

const Button = styled.button.attrs({
  type: 'submit',
})`
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[3]}`};
  background: ${props => props.theme.colors.main};
  border-radius: ${props => props.theme.radii[1]};
  color: ${props => props.theme.colors.white};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 100ms;
  line-height: ${props => props.theme.fontSizes[2]};

  :hover {
    background: ${props => props.theme.colors.mainDark};
  }

  :disabled {
    background: ${props => props.theme.colors.greys.medium};
    cursor: default;
  }
`;

const Hr = styled.hr`
  margin: 0;
  border: none;
  border-top: 1px solid ${props => props.theme.colors.greys.light};
`;

export const TextLink = styled.span`
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.medium};
  color: ${props => props.theme.colors.greys.dark};
  text-align: center;
  display: block;
  cursor: pointer;
  transition: all 100ms;

  :hover {
    color: ${props => props.theme.colors.main};
  }

  input {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    position: absolute;
    left: -9999em;
  }
`;

export const StyledPagination = styled.ul`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.light};
  color: ${props => props.theme.colors.greys.dark};
  text-align: center;
  display: block;

  li {
    display: inline-block;
  }

  .page-number {
    display: flex;
    width: 32px;
    height: 32px;
    align-items: center;
    justify-content: center;
    border-radius: ${props => props.theme.radii[2]};
    font-weight: ${props => props.theme.fontWeights.medium};
    margin: 0 ${props => props.theme.space[1]};

    :hover {
      background: ${props => props.theme.colors.greys.light};
    }

    &.active {
      background: ${props => props.theme.colors.main};
      color: ${props => props.theme.colors.white};
      cursor: default;
    }
  }
`;

const TextInput = styled.input.attrs({
  type: 'text',
})`
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.regular};
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[3]}`};
  background: ${props => props.theme.colors.overlay};
  border-radius: ${props => props.theme.radii[1]};
  color: ${props => props.theme.colors.greys.dark};
  line-height: ${props => props.theme.fontSizes[2]};
  display: block;
  width: 100%;
  border: 1px solid transparent;
  outline: none;

  :focus,
  :active {
    border-color: ${props => props.theme.colors.main};
  }

  ::placeholder {
    color: ${props => props.theme.colors.greys.medium};
    opacity: 1;
  }
`;

export default {
  Button,
  Hr,
  TextLink,
  StyledPagination,
  TextInput,
};
