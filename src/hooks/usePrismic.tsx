import Prismic from 'prismic-javascript'
import { DefaultClient } from 'prismic-javascript/types/client'

const apiEndpoint = 'https://twenitweni.cdn.prismic.io/api/v2'

export function usePrismic(): DefaultClient {
  const client = Prismic.client(apiEndpoint)
  return client
}
