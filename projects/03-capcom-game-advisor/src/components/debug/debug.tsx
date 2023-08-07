import { component$, useSignal } from '@builder.io/qwik'
import { useUserGlobalState } from '~/ctx/user'

export const Debug = component$(() => {
  const { name, genre, platform, games } = useUserGlobalState()
  const isDebugOpened = useSignal(false)

  return (
    <>
      {isDebugOpened.value ? (
        <div class="fixed top-0 left-0 p-4 z-10 border border-black text-md text-left z-100">
          <button
            onClick$={() => (isDebugOpened.value = false)}
            class="btn mb-2 flex w-fit ml-auto"
          >
            X
          </button>
          <div class="text-2xl mb-5">Context</div>
          <hr class="bg-black h-[5px] my-2" />
          <ul>
            <li>Name: {name}</li>
            <li>Genre: {genre}</li>
            <li>Platform: {platform}</li>
            <li>Main Game: {games[0]?.name}</li>
          </ul>
        </div>
      ) : (
        <button
          class="fixed top-0 left-0 bg-capcomYellow text-capcomText p-4 z-10 border border-black text-md text-left"
          onClick$={() => (isDebugOpened.value = true)}
        >
          Open Debug
        </button>
      )}
    </>
  )
})
