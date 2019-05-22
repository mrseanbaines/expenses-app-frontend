import styled, { css } from 'styled-components';

const pixelize = arg => (typeof arg === 'number' ? `${arg}px` : arg);

const Wrapper = styled.div`
  padding: ${props => `${props.theme.space[2]} ${props.theme.space[3]}`};
  border-radius: ${props => props.theme.radii[1]};
  font-size: ${props => props.theme.fontSizes[0]};
  font-weight: ${props => props.theme.fontWeights.regular};
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.warn};
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  position: absolute;
  z-index: 1;
  transform: translateX(-50%);
  cursor: default;

  top: ${({ top }) => top && pixelize(top)};
  right: ${({ right }) => right && pixelize(right)};
  bottom: ${({ bottom }) => bottom && pixelize(bottom)};
  left: ${({ left }) => left && pixelize(left)};
`;

Wrapper.defaultProps = {
  top: '100%',
  left: '50%',
};

const TooltipArrow = styled.div`
  width: 100%;
  height: 25px;
  position: absolute;
  overflow: hidden;
  pointer-events: none;
  left: 0;

  &::after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: white;
    transform: translate(-50%, -50%) rotate(45deg);
    left: 50%;
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  }

  ${({ direction }) => {
    switch (direction) {
      case 'down': {
        return css`
          top: auto;
          bottom: 100%;

          &::after {
            top: 100%;
          }
        `;
      }

      default: {
        return css`
          top: 100%;

          &::after {
            top: 0;
          }
        `;
      }
    }
  }}
`;

export default { Wrapper, TooltipArrow };
