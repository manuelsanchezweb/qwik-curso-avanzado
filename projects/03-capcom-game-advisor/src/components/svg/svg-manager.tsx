import { type JSXNode, component$ } from '@builder.io/qwik'
import { LogoCapcom } from './logos/logos'
import {
  IconGitHub,
  IconLinkedIn,
  IconMoon,
  IconSun,
  IconYouTube,
} from './icons/icons'
import {
  PlatformPS4,
  PlatformPS5,
  PlatformSteam,
  PlatformSwitch,
  PlatformXboxOne,
  PlatformXboxSeries,
} from './platforms/platforms'

export type SVGType =
  | 'capcom'
  | 'github'
  | 'linkedin'
  | 'youtube'
  | 'ps4'
  | 'ps5'
  | 'switch'
  | 'xbox-series'
  | 'xbox-one'
  | 'steam'
  | 'sun'
  | 'moon'

export const SVGManager = component$<{ svg: SVGType; classCustom?: string }>(
  (props): JSXNode => {
    const { svg, classCustom } = props

    switch (svg) {
      case 'capcom':
        return <LogoCapcom classCustom={classCustom} />
      case 'github':
        return <IconGitHub classCustom={classCustom} />
      case 'linkedin':
        return <IconLinkedIn classCustom={classCustom} />
      case 'youtube':
        return <IconYouTube classCustom={classCustom} />
      case 'ps4':
        return <PlatformPS4 classCustom={classCustom} />
      case 'ps5':
        return <PlatformPS5 classCustom={classCustom} />
      case 'switch':
        return <PlatformSwitch classCustom={classCustom} />
      case 'steam':
        return <PlatformSteam classCustom={classCustom} />
      case 'xbox-one':
        return <PlatformXboxOne classCustom={classCustom} />
      case 'xbox-series':
        return <PlatformXboxSeries classCustom={classCustom} />
      case 'sun':
        return <IconSun classCustom={classCustom} />
      case 'moon':
        return <IconMoon classCustom={classCustom} />

      default:
        // It should never get here if you are using TypeScript correctly.
        throw new Error(`Invalid svg type: ${svg}`)
    }
  }
)
