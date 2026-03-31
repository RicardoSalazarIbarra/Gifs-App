import { describe, expect, test } from 'vitest'
import AxiosMockAdapter from 'axios-mock-adapter'
import { getGifsByQuery } from './get-gifs-by-query.action'
import { giphySearchResponseMock } from './../../../tests/mocks/giphy.response.data'
import { giphyApi } from '../api/giphy.api'

describe('getGifsByQuery', () => {
  const mock = new AxiosMockAdapter(giphyApi)
  // test('should return a list of gifs', async () => {
  //   const gifs = await getGifsByQuery('goku')
  //   const [gif1] = gifs

  //   expect(gifs.length).toBe(10)

  //   expect(gif1).toStrictEqual({
  //     id: expect.any(String),
  //     title: expect.any(String),
  //     url: expect.any(String),
  //     width: expect.any(Number),
  //     height: expect.any(Number)
  //   })
  // })

  test('should return a lift og gifs', async () => {
    mock.onGet('/search').reply(200, giphySearchResponseMock)

    const gifs = await getGifsByQuery('goku')

    expect(gifs.length).toBe(10)

    gifs.forEach((gifs) => {
      expect(typeof gifs.id).toBe('string')
      expect(typeof gifs.title).toBe('string')
      expect(typeof gifs.url).toBe('string')
      expect(typeof gifs.width).toBe('number')
      expect(typeof gifs.height).toBe('number')
    })

  })
})