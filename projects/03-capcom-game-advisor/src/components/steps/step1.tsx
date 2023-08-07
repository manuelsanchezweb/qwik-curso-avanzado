import { type QRL, component$, $, useVisibleTask$ } from '@builder.io/qwik'
import { BackButton } from '../back-button/back-button'
import { useNavigate } from '@builder.io/qwik-city'
import { useUserGlobalState } from '~/ctx/user'
import { type TimelineDefinition, stagger, timeline } from 'motion'

interface Step1Props {
  handleNextStep: QRL<() => void>
}

export const Step1 = component$(({ handleNextStep }: Step1Props) => {
  const nav = useNavigate()
  const ctx = useUserGlobalState()

  useVisibleTask$(() => {
    const button = document.querySelector('.btn--next') as HTMLButtonElement
    const logo = document.querySelector('.capcom-logo') as HTMLElement
    const title = document.querySelector('h2')
    const paragraphs = document.querySelectorAll('p')
    const name = document.querySelector('.capcom-name') as HTMLInputElement
    const back = document.querySelector('.btn--back') as HTMLButtonElement
    const navigation = document.querySelector('.capcom-nav')

    if (!title || !paragraphs.length || !name || !back || !navigation) return

    const sequence: TimelineDefinition = [
      [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
      [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
      [
        paragraphs,
        { opacity: [0, 1], y: [-50, 0] },
        { duration: 0.3, delay: stagger(0.2) },
      ],
      [name, { opacity: [0, 1], y: [-50, 0] }, { at: 1.1 }],
      [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
      [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
      [navigation, { opacity: [0, 1], y: [-50, 0] }, { at: 1.7 }],
    ]

    timeline(sequence, {})
  })

  return (
    <>
      <BackButton onClick={$(() => nav('/'))} />
      <h2 class="text-xl md:text-3xl font-bold opacity-0">
        Welcome to the Capcom Advisor
      </h2>
      <p class="text-md md:text-lg opacity-0">
        A cool way to help you find yout new game!
      </p>
      <p class="text-md md:text-lg opacity-0">But first things first...</p>

      <div class="capcom-name opacity-0 flex gap-4 flex-col items-start">
        <label for="name">Your name:</label>
        <input
          class="border border-black rounded-sm py-3 px-4 text-black"
          type="text"
          name="name"
          id="name"
          placeholder="Paco Lugo"
          value={ctx.name}
          onInput$={(e: InputEvent & { target: HTMLInputElement }) => {
            ctx.name = e.target.value
          }}
        />
        <button
          disabled={!ctx.name}
          class="opacity-0 btn btn--border btn--next disabled:bg-gray-200 disabled:pointer-events-none flex justify-center mx-auto"
          onClick$={handleNextStep}
        >
          Next step
        </button>
      </div>
    </>
  )
})
