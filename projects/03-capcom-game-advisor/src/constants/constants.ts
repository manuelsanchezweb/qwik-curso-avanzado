import { type SVGType } from '~/components/svg/svg-manager'

interface Genre {
  id: number
  name: string
  slug: string
}

export const GENRES: Genre[] = [
  {
    id: 1,
    name: 'Action',
    slug: 'action',
  },
  {
    id: 2,
    name: 'Adventure',
    slug: 'adventure',
  },
  {
    id: 3,
    name: 'RPG',
    slug: 'rpg',
  },
  {
    id: 4,
    name: 'Horror',
    slug: 'horror',
  },
]

type Platform = {
  id: number
  name: string
  slug: SVGType
  color: string
}

export const PLATFORMS: Platform[] = [
  {
    id: 1,
    name: 'Steam',
    slug: 'steam',
    color: '#000',
  },
  {
    id: 2,
    name: 'PlayStation 4',
    slug: 'ps4',
    color: '#2A5DAA',
  },
  {
    id: 3,
    name: 'PlayStation 5',
    slug: 'ps5',
    color: '#2A5DAA',
  },
  {
    id: 4,
    name: 'Xbox One',
    slug: 'xbox-one',
    color: '#366E24',
  },
  {
    id: 5,
    name: 'Xbox Series',
    slug: 'xbox-series',
    color: '#366E24',
  },
  {
    id: 6,
    name: 'Nintendo Switch',
    slug: 'switch',
    color: '#B3251F',
  },
]
