type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description?: {
      html: string
    }
    gallery: ImageProps[]
  }
}

export default function PlacesTemplate({ place }: PlaceTemplateProps) {
  return (
    <>
      <h1>{place.name}</h1>
      <div
        dangerouslySetInnerHTML={{
          __html:
            place.description?.html ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }}
      />
      {place.gallery.map((image, index) => (
        <img key={`photo-${index}`} src={image.url} alt={place.name} />
      ))}
    </>
  )
}
