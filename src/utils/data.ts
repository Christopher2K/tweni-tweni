import type { Document } from 'prismic-javascript/types/documents'
import PrismicDOM from 'prismic-dom'
import { format, parse } from 'date-fns'

export function fromPrismicDataToArticleModel(doc: Document): Model.Article {
  const { uid, data } = doc

  return {
    uid: uid as string,
    title: data.title[0].text,
    date: format(parse(data.date, 'yyyy-MM-dd', new Date()), 'dd.MM.yy'),
    subject: data.subject,
    author: data.author,
    color: data.color,
    thumbnailPhoto: data.thumbnail_photo.url,
    description: PrismicDOM.RichText.asHtml(data.description),
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
