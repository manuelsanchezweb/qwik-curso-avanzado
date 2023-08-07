import { component$, useVisibleTask$ } from '@builder.io/qwik'
import { useTheme } from '~/ctx/theme'
import { SVGManager } from '../svg/svg-manager'

export const ModeToggle = component$(() => {
  const theme = useTheme()

  useVisibleTask$(() => {
    const themeToggle = document.getElementById('toggler') as HTMLButtonElement

    function switchTheme() {
      if (document.documentElement.getAttribute('data-theme') === 'light') {
        theme.theme = 'dark'
      } else {
        theme.theme = 'light'
      }
    }

    themeToggle.addEventListener('click', switchTheme, false)
  })

  return (
    <button id="toggler" aria-label="Switch Mode" class="btn--icon">
      {theme.theme == 'light' ? (
        <SVGManager svg="moon" classCustom="text-capcomBlue h-6 w-6" />
      ) : (
        <SVGManager svg="sun" classCustom="text-capcomBlue h-6 w-6" />
      )}
    </button>
  )
})
