import { gql } from 'graphql-request'

export const GET_PAGES = gql/* GraphQL */ `
  query GET_PAGES($first: Int) {
    pages(first: $first) {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`

export const GET_PAGE_BY_SLUG = gql/* GraphQL */ `
  query GET_PAGE_BY_SLUG($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      heading
      body {
        html
      }
    }
  }
`
