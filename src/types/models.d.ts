declare namespace Model {
  interface PhotoWithCaption {
    url: string
    caption: string
  }

  interface Article {
    id: string
    categories: string[]
    date: string
    title: string
    thumbnailPhoto: string
    author: string
    subject: string
    description: string
    carouselPhotos: PhotoWithCaption[]
    color: string
  }

  interface Mix {
    id: string
    title: string
    author: string
    thumbnailPhoto: string
    url: string
  }
}
