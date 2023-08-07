import { component$, useStylesScoped$ } from '@builder.io/qwik'
import styles from './cd.css?inline'

export const CD = component$(() => {
  useStylesScoped$(styles)

  return (
    <a href="/advisor" class="capcom-cd" title="Go To The Advisor">
      <div class="w-[280px] h-[280px] md:w-[450px] md:h-[450px]"></div>
    </a>
  )
})
