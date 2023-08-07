import { type QRL, component$, $, useVisibleTask$ } from '@builder.io/qwik'
import { BackButton } from '../back-button/back-button'
import { useNavigate } from '@builder.io/qwik-city'
import { useUserGlobalState } from '~/ctx/user'
import { type TimelineDefinition, stagger, timeline } from 'motion'

interface Step4Props {
  handleEnd: QRL<() => void>
}

export const URL = import.meta.env.PUBLIC_APP_URL

export const Step4 = component$(({ handleEnd }: Step4Props) => {
  const nav = useNavigate()
  const { games } = useUserGlobalState()

  useVisibleTask$(() => {
    const button = document.querySelector('.btn--next') as HTMLButtonElement
    const logo = document.querySelector('.capcom-logo') as HTMLElement
    const title = document.querySelector('h2')
    const options = document.querySelectorAll('.capcom-options')
    const back = document.querySelector('.btn--back') as HTMLButtonElement
    const navigation = document.querySelector('.capcom-nav')

    if (!title || !options || !back || !navigation) return

    const sequence: TimelineDefinition = [
      [logo, { opacity: [0, 1], y: [-50, 0] }, { at: 0.1 }],
      [title, { opacity: [0, 1], y: [-50, 0] }, { at: 0.3 }],
      [
        options,
        { opacity: [0, 1], y: [-50, 0] },
        { duration: 0.3, delay: stagger(0.2) },
      ],
      [button, { opacity: [0, 1], y: [-50, 0] }, { at: 1.3 }],
      [back, { opacity: [0, 1], y: [-50, 0] }, { at: 1.5 }],
      [navigation, { opacity: [0, 1], y: [-50, 0] }, { at: 1.7 }],
    ]

    timeline(sequence, {})
  })

  return (
    <div>
      <BackButton hasIcon={false} text="Home" onClick={$(() => nav('/'))} />

      <h2 class="text-xl md:text-3xl font-bold opacity-0">
        This is what you are looking for:
      </h2>

      <div class="capcom-options opacity-0">
        {games.length > 0 ? (
          <ul class="w-full">
            {games.map((game) => (
              <li
                class="flex flex-col-reverse md:flex-row gap-4 md:gap-10 my-8"
                key={game.id}
              >
                {/* IMAGEN  */}
                <figure>
                  <a
                    target="_blank"
                    rel="nofollow noopener"
                    href={game.urlOfficial}
                  >
                    {' '}
                    <picture class="flex overflow-hidden">
                      <img
                        height={300}
                        width={500}
                        class="md:min-w-[350px]"
                        src={`${URL}${game.assets.imgSmall.url}`}
                        alt={game.name}
                      />
                    </picture>
                  </a>
                  <figcaption class="text-left text-xs my-1">
                    Image from{' '}
                    <a
                      target="_blank"
                      rel="nofollow noopener"
                      href={game.assets.imgSmall.copyrightUrl}
                    >
                      official page
                    </a>
                  </figcaption>
                </figure>

                {/* TEXTO  */}
                <div class="flex flex-col gap-4 md:items-start md:text-left">
                  <h3 class="text-2xl font-bold">{game.name}</h3>
                  <p class="text-lg line-clamp-4">{game.description}</p>
                  <a
                    class="btn btn--border"
                    target="_blank"
                    rel="nofollow noopener"
                    title={`See official page of ${game.name}`}
                    href={game.urlOfficial}
                  >
                    Visit official page
                  </a>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p class="mt-8">
            We do not have a game for your search criteria. Please try something
            else!
          </p>
        )}
      </div>

      <div class="capcom-buttons flex flex-col md:flex-rwo gap-6 justify-between items-center">
        <button
          class="btn btn--border btn--next opacity-0 mt-8"
          onClick$={handleEnd}
        >
          Launch the advisor again
        </button>
      </div>
    </div>
  )
})
