import React from 'react'
import { ITypographyBase, TVariant } from 'src/styled'
import styled, { DefaultTheme, ThemedStyledProps } from 'styled-components'

interface ITypography extends ITypographyBase {
  children?: React.ReactNode
  theme: DefaultTheme
  variant?: TVariant
}

const getCssValue =
  (property: keyof ITypographyBase, cssProperty: string, suffix = '') =>
  (props: ThemedStyledProps<ITypography, DefaultTheme>) => {
    const variant = props.variant ?? 'p'
    let value = props[property]
    if (value == null) {
      value = props.theme.typography[variant][property]
    }
    if (typeof value === 'function') {
      value = value(props.theme)
    }
    if (!value) return ''
    return `${cssProperty}: ${value}${suffix};`
  }

const Typography = styled(({ children, ...props }: ITypography) => {
  return React.createElement(props.component ?? props.variant ?? 'p', props, children)
})`
  ${getCssValue('lineHeight', 'line-height')}
  ${getCssValue('fontWeight', 'font-weight')}
  ${getCssValue('size', 'font-size', 'px')}
  ${getCssValue('color', 'color')}
  ${getCssValue('margin', 'margin')}
`

export default Typography
