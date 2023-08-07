import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik'
import { type Game } from '~/types/types'

interface UserStore {
  name: string
  genre: string
  platform: string
  games: Game[]
}

export const UserContext = createContextId<UserStore>('user')

export const useProviderGlobalState = () => {
  const store = useStore({
    name: '',
    genre: 'action',
    platform: 'ps5',
    games: [],
  })

  useContextProvider(UserContext, store)
}

export const useUserGlobalState = () => useContext(UserContext)
