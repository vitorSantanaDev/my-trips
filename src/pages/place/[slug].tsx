import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'

import client from 'graphQL/client'
import { GET_PLACES, GET_PLACE_BY_SLUG } from 'graphQL/queries'
import {
  Get_PlacesQuery,
  Get_Place_By_SlugQuery
} from 'graphQL/genereted/graphql'

import PlacesTemplate, { PlaceTemplateProps } from 'templates/Places'
import Loading from 'components/Loading'

export default function Place({ place }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return <Loading />

  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  const { places } = await client.request<Get_PlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: 'blocking' }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { place } = await client.request<Get_Place_By_SlugQuery>(
    GET_PLACE_BY_SLUG,
    {
      slug: `${params?.slug}`
    }
  )

  if (!place) return { notFound: true }

  return {
    revalidate: 60,
    props: {
      place
    }
  }
}
