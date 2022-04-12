import client from 'graphQL/client'
import { Get_PlacesQuery } from 'graphQL/genereted/graphql'
import { GET_PLACES } from 'graphQL/queries'

import { MapProps } from 'components/Map'
import HomeTemplate from 'templates/Home'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}

export const getStaticProps = async () => {
  const { places } = await client.request<Get_PlacesQuery>(GET_PLACES)

  return {
    props: {
      places
    }
  }
}
