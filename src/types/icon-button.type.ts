import type { FontAwesomeIconProps } from '@fortawesome/vue-fontawesome'

type IconButtonBase = {
  color?: string
  tooltip?: string
  tooltipPosition?: string
} & FontAwesomeIconProps

export type IconButtonProps =
  | (IconButtonBase & {
      type?: HTMLButtonElement['type']
      onClick: () => void
      href?: HTMLAnchorElement['href']
      target?: HTMLAnchorElement['target']
    })
  | (IconButtonBase & {
      type: HTMLButtonElement['type']
      onClick?: () => void
      href?: HTMLAnchorElement['href']
      target?: HTMLAnchorElement['target']
    })
  | (IconButtonBase & {
      type?: HTMLButtonElement['type']
      onClick?: () => void
      href: HTMLAnchorElement['href'] | undefined
      target?: HTMLAnchorElement['target']
    })
