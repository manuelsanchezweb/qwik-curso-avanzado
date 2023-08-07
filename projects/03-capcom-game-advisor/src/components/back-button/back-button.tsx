import { type QRL, component$ } from '@builder.io/qwik'

interface BackButtonProps {
  onClick: QRL<() => void>
  hasIcon?: boolean
  text?: string
}

export const BackButton = component$(
  ({ onClick, hasIcon = true, text }: BackButtonProps) => {
    return (
      <button
        class="btn btn--border p-0 text-capcomBlue btn--back opacity-0 absolute top-14 left-0 rounded-md flex justify-center items-center hover:scale-105 focus:scale-105 transition-transform"
        onClick$={onClick}
      >
        {hasIcon && (
          <svg
            class="bee bee-icons text-capcomBlue"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0673 19.1347L7.93266 12L15.0673 4.86534"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
        {text && <span class="p-2">{text}</span>}
      </button>
    )
  }
)
