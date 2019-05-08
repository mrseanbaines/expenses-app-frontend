import styled from 'styled-components';

const Item = styled.li`
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[3]}`};
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.regular};
  color: ${props => props.theme.colors.greys.medium};
  border-radius: ${props => props.theme.radii[1]};
  cursor: pointer;
  display: flex;
  align-items: center;

  :hover,
  :focus,
  :active {
    background: ${props => props.theme.colors.greys.light};
  }
`;

const Icon = styled.div`
  border-radius: ${props => props.theme.radii[2]};
  width: ${props => props.theme.space[3]};
  height: ${props => props.theme.space[3]};
  background: ${props => props.theme.colors.main};
  margin-right: ${props => props.theme.space[2]};
`;

export default { Item, Icon };