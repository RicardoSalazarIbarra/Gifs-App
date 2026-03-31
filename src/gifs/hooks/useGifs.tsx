import { getGifsByQuery } from "../actions/get-gifs-by-query.action"
import { useRef, useState } from "react"
import type { Gif } from "../interfaces/gif.interface"

export const useGifs = () => {
  const [gifs, setGifs] = useState<Gif[]>([])
  const [previousterms, setPreviousterms] = useState<string[]>([])

  const gifsCache = useRef<Record<string, Gif[]>>({})

  const handleTermClicked = async (term: string) => {
    if (gifsCache.current[term]) {
      setGifs(gifsCache.current[term])
      return
    }

    const gifs = await getGifsByQuery(term)
    setGifs(gifs)
  }

  const handleSearch = async (query: string) => {
    query = query.trim().toLocaleLowerCase()

    if (query.length === 0) return

    if (previousterms.includes(query)) return

    setPreviousterms([query, ...previousterms].splice(0, 8))

    const gifs = await getGifsByQuery(query)

    setGifs(gifs)

    gifsCache.current[query] = gifs

  };

  return {
    gifs,
    handleSearch,
    previousterms,
    handleTermClicked,
  }
}
