import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin: auto;
    height: 100vh;
    max-width: ${theme.container.containerWidth};

    text-align: center;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  `}
`
export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.large};
    margin-bottom: ${theme.sizes.large};
  `}
`
export const Body = styled.div`
  ${({ theme }) => css`
    line-height: ${theme.fontSizes.medium};
  `}
`
