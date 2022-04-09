import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'

import {
  Get_PagesQuery,
  Get_Page_By_SlugQuery
} from 'graphQL/genereted/graphql'
import { GET_PAGES, GET_PAGE_BY_SLUG } from 'graphQL/queries'
import client from 'graphQL/client'

import PageTemplate, { PageTemplateProps } from 'templates/Pages'

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <PageTemplate heading={heading} body={body} />
}

export const getStaticPaths = async () => {
  const { pages } = await client.request<Get_PagesQuery>(GET_PAGES, {
    first: 3
  })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<Get_Page_By_SlugQuery>(
    GET_PAGE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
