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

export const GET_PLACES = gql/* GraphQL */ `
  query GET_PLACES($first: Int) {
    places(first: $first) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`

export const GET_PLACE_BY_SLUG = gql/* GraphQL */ `
  query GET_PLACE_BY_SLUG($slug: String!) {
    place(where: { slug: $slug }) {
      id
      slug
      name
      location {
        latitude
        longitude
      }
      description {
        html
      }
      gallery {
        url
        height
        width
      }
    }
  }
`
