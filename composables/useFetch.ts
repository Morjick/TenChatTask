import { ofetch } from "ofetch"

type Methods = 'POST' | 'GET' | 'PATCH' | 'DELETE' | 'PUT'

interface OfetchParams {
  body?: any
  headers?: any
  methods: Methods
}

export const useFetch = async (url: string, params?: OfetchParams) => {
  const response = await ofetch(`https://dummyjson.com/${url}`, {
    body: JSON.stringify(params?.body) || null,
    method: params?.methods || 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...params?.headers
    }
  })
  return response
}
