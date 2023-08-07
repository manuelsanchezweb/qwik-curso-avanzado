import { type QRL, component$, useVisibleTask$ } from '@builder.io/qwik'
import { BackButton } from '../back-button/back-button'
import { useUserGlobalState } from '~/ctx/user'
import { type TimelineDefinition, stagger, timeline } from 'motion'
import { PLATFORMS } from '~/constants/constants'
import { SVGManager } from '../svg/svg-manager'

interface Step3Props {
  handleNextStep: QRL<() => void>
  handlePreviousStep: QRL<() => void>
}

export const Step3 = component$(
  ({ handleNextStep, handlePreviousStep }: Step3Props) => {
    const ctx = useUserGlobalState()

    useVisibleTask$(() => {
      const button = document.querySelector('.btn--next') as HTMLButtonElement
      const logo = document.querySelector('.capcom-logo') as HTMLElement
      const title = document.querySelector('h2')
      const platforms = document.querySelectorAll('.capcom-platforms')
      const paragraphs = document.querySelectorAll('p')
      const back = document.querySelector('.btn--back') as HTMLButtonElement
      const navigation = document.querySelector('.capcom-nav')

      if (!title || !paragraphs.length || !back || !navigation) return

      const sequence: TimelineDefinition = [
        [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
        [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
        [
          paragraphs,
          { opacity: [0, 1], y: [-50, 0] },
          { duration: 0.3, delay: stagger(0.2) },
        ],
        [platforms, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
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
          What are you using to play these days?
        </h2>
        <p class="text-md md:text-lg opacity-0 my-4">
          I had been always a Nintendo guy until I got Xbox 360 and Xbox One.
          But recently I’ve been playing Resident Evil 4 Remake in PS5.
        </p>
        <p class="text-md md:text-lg opacity-0 my-4">
          You know now how I spend my time, but... how do you usually chill,{' '}
          {ctx.name}?
        </p>

        <ul class="capcom-platforms flex flex-wrap justify-center gap-5 max-w-[650px] opacity-0 md:mx-auto">
          {PLATFORMS.map((platform) => (
            <li
              key={platform.id}
              style={{ backgroundColor: platform.color }}
              class={{
                'outline outline-5 outline-capcomBlue cursor-not-allowed opacity-1':
                  ctx.platform === platform.slug,
                'cursor-pointer opacity-40': ctx.platform !== platform.slug,
                'px-6 py-3 text-capcomWhite max-w-[125px] md:max-w-none': true,
              }}
              onClick$={() => (ctx.platform = platform.slug)}
            >
              <SVGManager
                classCustom="max-w-[75px] md:max-w-none coolIcon"
                svg={platform.slug}
              />
            </li>
          ))}
        </ul>
        <button
          class="btn btn--border btn--next opacity-0 mt-8"
          onClick$={handleNextStep}
        >
          NEXT STEP
        </button>
      </div>
    )
  }
)
