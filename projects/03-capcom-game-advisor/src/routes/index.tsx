import { component$, useVisibleTask$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { type TimelineDefinition, timeline } from 'motion'
import { CD } from '~/components/cd/cd'
import { Navigation } from '~/components/navigation/navigation'
import { SVGManager } from '~/components/svg/svg-manager'

export default component$(() => {
  useVisibleTask$(() => {
    const nav = document.querySelector('.capcom-nav')
    const cd = document.querySelector('.capcom-cd')
    const footer = document.querySelector('.capcom-footer')
    const text = document.querySelector('.capcom-text')
    if (!nav || !cd || !footer || !text) return

    const sequence: TimelineDefinition = [
      [text, { opacity: [0, 1], x: [-100, 0] }, { at: 0.1 }],
      [cd, { opacity: [0, 1], x: [100, 0] }, { at: 0.3 }],
      [nav, { opacity: [0, 1], y: [100, 0] }, { at: 0.5 }],
      [footer, { opacity: [0, 1], y: [-100, 0] }, { at: 0.7 }],
    ]

    timeline(sequence, {})
  })

  return (
    <div class="flex flex-col min-h-screen w-full max-w-[var(--max-page)] px-5 mx-auto md:px-16 lg:px-[120px]">
      <Navigation />

      <main class="flex flex-col min-h-[70vh] lg:flex-row items-center justify-center lg:justify-between gap-4 relative my-8">
        <div class="capcom-text opacity-0 flex flex-col items-center text-center lg:items-start lg:text-left my-12 gap-8 max-w-[550px]">
          <SVGManager
            svg="capcom"
            classCustom="w-[230px] md:w-[330px] h-auto"
          />
          <p class="md:text-2xl">
            There are pretty cool games recently and you might not know which
            one is for you. Let me help you!
          </p>
          <div class="flex flex-col w-full lg:flex-row items-center gap-8">
            <a class="btn btn--border" href="/advisor">
              Go to the advisor
            </a>
          </div>
        </div>

        <CD />
      </main>

      <footer class="capcom-footer opacity-0 w-full flex flex-col gap-4 my-12 mt-auto items-center text-center">
        <p>
          This is an unofficial app created with 💜 by{' '}
          <a
            title="Check my website"
            target="_blank"
            rel="nofollow noopener"
            href="https://www.manuelsanchezweb.com"
          >
            msweb
          </a>
        </p>
        <p>
          All the images and content are property of{' '}
          <a
            rel="nofollow noopener"
            target="_blank"
            title="Check General Capcom Page"
            href="https://www.capcom.com/"
          ></a>
        </p>
      </footer>
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
