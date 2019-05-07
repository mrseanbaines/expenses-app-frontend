import styled from 'styled-components';

const Container = styled.div`
  background: ${props => props.theme.colors.white};
  padding: ${props => props.theme.space[3]};
  border-radius: ${props => props.theme.radii[1]};
  border: 1px solid ${props => props.theme.colors.greys.light};
  cursor: pointer;
  transition: box-shadow 200ms;

  :hover {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  }
`;

const User = styled.a`
  font-size: ${props => props.theme.fontSizes[2]};
  font-weight: ${props => props.theme.fontWeights.regular};
  transition: all 100ms;

  :hover {
    color: ${props => props.theme.colors.main};
  }
`;

const Merchant = styled.div`
  font-size: ${props => props.theme.fontSizes[3]};
  font-weight: ${props => props.theme.fontWeights.medium};
`;

const Amount = styled.div`
  font-size: ${props => props.theme.fontSizes[4]};
  font-weight: ${props => props.theme.fontWeights.regular};
`;

const DateTime = styled.div`
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.light};
  color: ${props => props.theme.colors.greys.medium};
`;

const CommentBox = styled.input.attrs({
  type: 'text',
})`
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.regular};
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[3]}`};
  background: ${props => props.theme.colors.greys.extraLight};
  border-radius: ${props => props.theme.radii[1]};
  color: ${props => props.theme.colors.greys.dark};
  display: block;
  width: 100%;

  ::placeholder {
    color: ${props => props.theme.colors.greys.medium};
    opacity: 1;
  }
`;

export const Comment = styled.div`
  strong {
    font-weight: ${props => props.theme.fontWeights.medium};
    display: block;
  }

  &,
  p {
    font-size: ${props => props.theme.fontSizes[0]};
    font-weight: ${props => props.theme.fontWeights.light};
    color: ${props => props.theme.colors.greys.dark};
  }
`;

export default {
  Container,
  User,
  Merchant,
  Amount,
  DateTime,
  CommentBox,
  Comment,
};
