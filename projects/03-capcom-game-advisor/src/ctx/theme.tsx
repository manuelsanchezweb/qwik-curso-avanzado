import {
  createContextId,
  useContext,
  useContextProvider,
  useStore,
  useVisibleTask$,
} from '@builder.io/qwik'

interface Theme {
  theme: 'light' | 'dark'
}

export const ThemeContext = createContextId<Theme>('theme')

export const useThemeProvider = () => {
  const store = useStore({
    theme: '',
  })

  useContextProvider(ThemeContext, store)

  useVisibleTask$(({ track }) => {
    const change = track(() => store.theme)

    // Initialize the theme
    if (!store.theme) {
      store.theme = localStorage.theme || 'dark'
    }

    // Change the data-theme
    document.documentElement.setAttribute('data-theme', change)

    // Save the theme in localStorage
    localStorage.theme = change
  })
}

export const useTheme = () => useContext(ThemeContext)
