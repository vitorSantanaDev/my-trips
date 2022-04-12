/* eslint-disable @typescript-eslint/ban-ts-comment */
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline'

import { MapProps } from 'components/Map'

import LinkWrapper from 'components/LinkWrapper'

// @ts-ignore
const Map = dynamic(() => import('components/Map'), { ssr: false })

const HomeTemplate = ({ places }: MapProps) => {
  return (
    <>
      <LinkWrapper href="/about" aria-label="About">
        <InfoOutline size={32} />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}

export default HomeTemplate
