import {
  $,
  component$,
  useComputed$,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city'
import { getGames } from '~/api/getGames'
// import { Debug } from '~/components/debug/debug'
import { Navigation } from '~/components/navigation/navigation'
import { Step1, Step2, Step3, Step4 } from '~/components/steps'
import { SVGManager } from '~/components/svg/svg-manager'
import { useUserGlobalState } from '~/ctx/user'

export const useGames = routeLoader$(async () => {
  try {
    return await getGames()
  } catch (error) {
    console.error('An error occurred while fetching games!', error)
    return []
  }
})

export default component$(() => {
  const step = useSignal(1)
  const ctx = useUserGlobalState()
  const { value: games } = useGames()

  const gamesForPlayer = useComputed$(() => {
    if (games.length === 0) return []

    const gamesForPlayer = games.filter((game) =>
      game.genres.includes(ctx.genre)
    )

    gamesForPlayer.filter((game) =>
      game.platforms.some((platform) => platform.name === ctx.platform)
    )

    return gamesForPlayer
  })

  useVisibleTask$(({ track }) => {
    track(step)

    ctx.games = gamesForPlayer.value
  })

  const handleNextStep = $(() => {
    if (step.value < 4) {
      step.value += 1
    }
  })

  const handlePreviousStep = $(() => {
    if (step.value > 1) {
      step.value -= 1
    }
  })

  const handleEnd = $(() => {
    step.value = 1

    // Reset user context
    ctx.name = ''
    ctx.genre = 'action'
    ctx.platform = 'ps5'
    ctx.games = []
  })

  return (
    <div class="flex flex-col items-center min-h-screen w-full max-w-[var(--max-page)] px-5 mx-auto md:px-16 lg:px-[120px]">
      <div class="w-full relative min-h-screen">
        <Navigation />
        {/* <Debug /> */}

        <div class="flex flex-col items-center justify-center gap-6 text-center max-w-[750px] mx-auto mt-20 mb-12 min-h-[70vh]">
          <SVGManager
            svg="capcom"
            classCustom="capcom-logo opacity-0 w-[230px] md:w-[330px] h-auto"
          />
          {step.value === 1 && <Step1 handleNextStep={handleNextStep} />}
          {step.value === 2 && (
            <Step2
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {step.value === 3 && (
            <Step3
              handleNextStep={handleNextStep}
              handlePreviousStep={handlePreviousStep}
            />
          )}
          {step.value === 4 && <Step4 handleEnd={handleEnd} />}
        </div>
      </div>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'Unofficial Capcom Advisor',
  meta: [
    {
      name: 'description',
      content: 'Find out which game is for you with this cool advisor!',
    },
    {
      name: 'keywords',
      content: 'capcom, game, steam, re4, monster hunter, Qwik',
    },
    {
      name: 'author',
      content: 'manuelsanchezweb',
    },
    {
      property: 'og:title',
      content: 'Unofficial Capcom Advisor',
    },
    {
      property: 'og:description',
      content: 'Find out which game is for you with this cool advisor!',
    },
    {
      property: 'og:image',
      content: 'https://capcom-game-advisor.vercel.app/thumbnail.png',
    },
    {
      property: 'og:url',
      content: 'https://capcom-game-advisor.vercel.app/',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:site',
      content: '@manuelsandoble',
    },
    {
      name: 'twitter:title',
      content: 'Unofficial Capcom Advisor',
    },
    {
      name: 'twitter:description',
      content: 'Find out which game is for you with this cool advisor!',
    },
    {
      name: 'twitter:image',
      content: 'https://capcom-game-advisor.vercel.app/thumbnail.png',
    },
  ],
}
