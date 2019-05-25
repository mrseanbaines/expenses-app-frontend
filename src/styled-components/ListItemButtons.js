import styled, { css } from 'styled-components';

const Item = styled.li`
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[3]}`};
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.greys.medium};
  border-radius: ${props => props.theme.radii[1]};
  cursor: pointer;
  display: ${props => (props.inline ? 'inline-flex' : 'flex')};
  justify-content: space-between;
  align-items: center;
  user-select: none;
  line-height: ${props => props.theme.fontSizes[2]};
  border: 1px solid transparent;
  position: relative;

  &:not(:last-child) {
    margin-bottom: ${props => props.theme.space[1]};
  }

  .dots {
    padding: 0;
    border-radius: ${props => props.theme.radii[2]};
    cursor: pointer;
    border: none;
    background: none;
    align-self: flex-end;

    :hover,
    :focus,
    :active,
    &.active {
      background: ${props => props.theme.colors.overlay};
      box-shadow: 0 0 0 ${props => props.theme.space[1]} ${props => props.theme.colors.overlay};
    }
  }

  :hover,
  :focus,
  :active,
  &.active {
    background: ${props => props.theme.colors.overlay};
  }

  img {
    display: block;
  }

  ${({ noBg }) =>
    noBg &&
    css`
      padding: 0;

      &,
      :hover,
      :focus,
      :active,
      &.active {
        background: none;
      }
    `}

  ${({ outline }) =>
    outline &&
    css`
      border-color: ${props => props.theme.colors.overlay};

      :hover,
      :focus,
      :active,
      &.active {
        border-color: transparent;
      }
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
`;

const Icon = styled.div`
  border-radius: ${props => props.theme.radii[2]};
  width: ${props => props.theme.space[3]};
  height: ${props => props.theme.space[3]};
  background: ${props => props.theme.colors.main};
  margin-right: ${props => props.theme.space[2]};
`;

export default { Item, Icon };
