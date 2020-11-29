declare namespace Model {
  interface PhotoWithCaption {
    url: string
    caption: string
  }

  interface Article {
    uid: string
    title: string
    date: string
    subject: string
    author: string
    color: string
    thumbnailPhoto: string
    description: string
    categories: string[]
    carousel: PhotoWithCaption[]
  }

  interface Mix {
    id: string
    title: string
    author: string
    thumbnailPhoto: string
    url: string
  }
}
