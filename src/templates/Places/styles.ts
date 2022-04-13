import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.sizes.large};
  `}
`

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.container.containerWidth};
    margin: auto;
  `}
`

export const Heading = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.large};
    margin-bottom: ${theme.sizes.medium};
  `}
`

export const Body = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.sizes.large};

    p {
      margin-bottom: ${theme.sizes.medium};
    }
  `}
`

export const Gallery = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-gap: ${theme.sizes.medium};

    img {
      background-color: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f8 100%
      );
      background-size: 80rem 14rem;
      animation: placeholderShimer 1s linear infinite forwards;

      @keyframes placeholderShimer {
        0% {
          background-position: -40rem 0;
        }
        100% {
          background-position: 40rem 0;
        }
      }
    }
  `}
`
