declare namespace Model {
  interface PhotoWithCaption {
    url: string
    caption: string
  }

  interface Article {
    categories: string[]
    date: string
    title: string
    thumbnailPhoto: string
    author: string
    subject: string
    description: string
    carouselPhotos: PhotoWithCaption[]
  }
}
