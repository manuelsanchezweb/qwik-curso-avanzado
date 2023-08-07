import { component$ } from '@builder.io/qwik'
import { SVGManager } from '../svg/svg-manager'
import { ModeToggle } from '../mode-toggle/mode-toggle'

export const Navigation = component$(() => {
  return (
    <nav class="capcom-nav opacity-0 w-full flex items-center justify-end gap-4 mt-12">
      <ModeToggle />
      {/* LinkedIn  */}
      <a
        class="btn--icon"
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://www.linkedin.com/in/manusanchez2/"
        title="Check my LinkedIn profile"
      >
        <SVGManager svg="linkedin" classCustom="text-capcomBlue h-6 w-6" />
      </a>
      {/* YouTube  */}
      <a
        class="btn--icon"
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://www.youtube.com/@manuelsanchezweb"
        title="Check my YouTube profile"
      >
        <SVGManager svg="youtube" classCustom="text-capcomBlue h-6 w-6" />
      </a>
      {/* GitHub  */}
      <a
        class="btn--icon"
        target="_blank"
        rel="noopener noreferrer nofollow"
        href="https://github.com/manuelsanchezweb"
        title="Check my GitHub profile"
      >
        <SVGManager svg="github" classCustom="text-capcomBlue h-6 w-6" />
      </a>
    </nav>
  )
})
