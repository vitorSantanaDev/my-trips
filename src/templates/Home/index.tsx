/* eslint-disable @typescript-eslint/ban-ts-comment */
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import { MapProps } from 'components/Map'

import LinkWrapper from 'components/LinkWrapper'

// @ts-ignore
const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapProps) => {
  return (
    <>
      <NextSeo
        title="My trips"
        description="A simple project to show in a map the places that I went and show more informations an photos when clicked"
        openGraph={{
          url: 'https://my-trips.vitorsantana.com.br',
          title: 'My trips',
          description:
            'A simple project to show in a map the places that I whent and show more informations an photos when clicked',
          images: [
            {
              url: '/images/cover.png',
              width: 1280,
              height: 720,
              alt: 'My trips'
            }
          ],
          site_name: 'My trips'
        }}
      />
      <LinkWrapper href="/about" aria-label="About">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

export default HomeTemplate
