import { type QRL, component$, useVisibleTask$ } from '@builder.io/qwik'
import { BackButton } from '../back-button/back-button'
import { type TimelineDefinition, stagger, timeline } from 'motion'
import { useUserGlobalState } from '~/ctx/user'
import { GENRES } from '~/constants/constants'

interface Step2Props {
  handleNextStep: QRL<() => void>
  handlePreviousStep: QRL<() => void>
}

export const Step2 = component$(
  ({ handleNextStep, handlePreviousStep }: Step2Props) => {
    const ctx = useUserGlobalState()

    useVisibleTask$(() => {
      const button = document.querySelector('.btn--next') as HTMLButtonElement
      const logo = document.querySelector('.capcom-logo') as HTMLElement
      const title = document.querySelector('h2')
      const genres = document.querySelectorAll('.capcom-genres')

      const paragraphs = document.querySelectorAll('p')
      const back = document.querySelector('.btn--back') as HTMLButtonElement
      const navigation = document.querySelector('.capcom-nav')

      if (!title || !paragraphs.length || !genres || !back || !navigation)
        return

      const sequence: TimelineDefinition = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [genres, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
        [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
        [navigation, { opacity: [0, 1], y: [-50, 0] }, { at: 1.7 }],
      ]

      timeline(sequence, {})
    })

    return (
      <div>
        <BackButton onClick={handlePreviousStep} />

        <h2 class="text-xl md:text-3xl font-bold opacity-0">
          What is your favourite genre, {ctx.name}?
        </h2>

        <p class="text-md md:text-lg opacity-0 my-4">
          When I was a child, my sister used to challenge me to Street Fighter 3
          in the arcade machine we had in a bar close to our place.
        </p>

        <p class="text-md md:text-lg opacity-0 my-4">
          Good old times... But again, where were we... and yeah, your favorite
          genre?
        </p>

        <ul class="capcom-genres flex flex-wrap justify-center md:justify-start gap-5 max-w-[550px] opacity-0 border border-capcomBlack p-7 md:mx-auto">
          {GENRES.map((genre) => (
            <li
              class={{
                'px-6 py-3 border border-capcomBlue bg-capcomYellow text-capcomBlack hover:text-capcomWhite hover:bg-capcomBlue cursor-pointer':
                  true,
                '!bg-capcomBlue !text-capcomWhite': ctx.genre === genre.slug,
              }}
              key={genre.id}
              onClick$={() => (ctx.genre = genre.slug)}
            >
              {genre.name}
            </li>
          ))}
        </ul>

        <button
          class="btn btn--border btn--next opacity-0"
          onClick$={handleNextStep}
        >
          NEXT STEP
        </button>
      </div>
    )
  }
)
