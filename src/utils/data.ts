import type { Document } from 'prismic-javascript/types/documents'
import PrismicDOM from 'prismic-dom'
import { format, parse } from 'date-fns'

export function fromPrismicDataToArticleModel(doc: Document): Model.Article {
  const { uid, data } = doc

  return {
    uid: uid as string,
    title: data.title[0].text,
    subtitle: data.subtitle[0].text,
    date: format(parse(data.date, 'yyyy-MM-dd', new Date()), 'dd.MM.yy'),
    author: data.author,
    thumbnailPhoto: data.thumbnail_photo.url,
    content: PrismicDOM.RichText.asHtml(data.content),
    categories: (data.categories as any[]).map(c => c.category),
  }
}

export function fromPrismicDataToInxpirationModel(
  doc: Document,
): Model.Inspiration {
  const { id, data } = doc

  return {
    id,
    title: data.title[0].text,
    artist: data.artist,
    color: data.color,
    description: PrismicDOM.RichText.asHtml(data.description),
    date: format(parse(data.date, 'yyyy-MM-dd', new Date()), 'dd.MM.yy'),
    subject: data.subject,
    categories: (data.categories as any[]).map(c => c.category),
    carousel: (data.carousel as any[]).map(item => ({
      url: item.photo.url,
      caption: item.caption,
    })),
  }
}

export function fromPrismicDataToMixModel(doc: Document): Model.Mix {
  const { data, id } = doc

  return {
    id,
    title: data.title[0].text,
    author: data.author,
    thumbnailPhoto: data.thumbnail_photo.url,
    url: data.url.url,
  }
}
