import styled, { css } from 'styled-components'

export const Wapper = styled.div`
  ${({ theme }) => css`
    position: fixed;
    z-index: 1100;
    top: ${theme.sizes.medium};
    right: ${theme.sizes.medium};
    color: ${theme.colors.white};

    svg {
      transition: color 0.3s ease-in-out;
    }

    &:hover {
      color: ${theme.colors.highLights};
    }
  `}
`
