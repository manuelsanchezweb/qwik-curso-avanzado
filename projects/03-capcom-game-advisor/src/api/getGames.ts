import { type Game } from '~/types/types'

export async function getGames(): Promise<Game[]> {
  const url = `${import.meta.env.PUBLIC_APP_URL}data/data.json`

  const response = await fetch(url)

  if (!response.ok) {
    throw new Error('Error fetching games')
  }

  const data = await response.json()

  return data
}
