import { component$ } from '@builder.io/qwik'
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from '@builder.io/qwik-city'
import { RouterHead } from './components/router-head/router-head'

import './global.css'
import { useThemeProvider } from './ctx/theme'
import { useProviderGlobalState } from './ctx/user'

export default component$(() => {
  useThemeProvider()
  useProviderGlobalState()
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />

        <script
          dangerouslySetInnerHTML={`
          if (window.matchMedia("(prefers-color-scheme: dark)").matches &&
            localStorage.theme !== 'light') {
            localStorage.theme = 'dark';
          }
        
          document.documentElement.className = localStorage.theme || 'dark';
        `}
        />
        <ServiceWorkerRegister />
      </head>
      <body lang="en">
        <RouterOutlet />
      </body>
    </QwikCityProvider>
  )
})
