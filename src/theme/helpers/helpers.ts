import { IBreakpoint, IContainerMaxWidths, ISpacing } from 'src/styled'
import { DefaultTheme, ThemedStyledProps } from 'styled-components'

export const spacing =
  <T>(size: keyof ISpacing) =>
  (props: ThemedStyledProps<T, DefaultTheme>) => {
    const {
      theme: { spacing }
    } = props
    const value = spacing[size]
    return `${spacing[size]}${value ? 'rem' : ''}`
  }

export const breakpoint =
  <T>(value: keyof IBreakpoint) =>
  (props: ThemedStyledProps<T, DefaultTheme>) => {
    const {
      theme: { breakpoints }
    } = props
    return `${breakpoints[value]}px`
  }

export const maxWidth =
  <T>(value: keyof IContainerMaxWidths) =>
  (props: ThemedStyledProps<T, DefaultTheme>) => {
    const {
      theme: { containerMaxWidths }
    } = props
    return `${containerMaxWidths[value]}px`
  }

export const color =
  <T>(value: string) =>
  (props: ThemedStyledProps<T, DefaultTheme>) => {
    const {
      theme: { palette }
    } = props
    const objProps = value.split('.')
    let color = palette as never
    for (const prop of objProps) {
      color = color[prop]
    }
    if (typeof color === 'string') {
      return color
    }
    return ''
  }
