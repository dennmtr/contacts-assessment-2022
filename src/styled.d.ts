import { DefaultTheme } from 'styled-components'

export interface IPalette {
  background: string
  backgroundLight: string
  primary: IPalettePrimary
  neutral: IPaletteNeutral
}

export interface IPalettePrimary {
  main: string
}

export interface IPaletteNeutral {
  dark: string
  light: string
  veryLight: string
}

export interface IFont {
  baseSize: number
  fontFamily: string
  fontWeight: 200 | 400 | 600
}

export interface IBreakpoint {
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
}

export interface IContainerMaxWidths {
  sm: number
  md: number
  lg: number
  xl: number
}

export interface ISpacing {
  0: number
  1: number
  2: number
  3: number
  4: number
  5: number
}

export type TComponent = 'p' | 'h1' | 'h2' | 'h3' | 'h4'

export type TVariant =
  | TComponent
  | 'modal.title'
  | 'modal.subtitle'
  | 'contact.info.header'
  | 'contact.info.description'

export interface ITypographyBase {
  component?: TComponent
  fontWeight?: 200 | 400 | 600
  size?: number | ((theme: DefaultTheme) => number)
  lineHeight?: number
  color?: string | ((theme: DefaultTheme) => string)
  margin?: string | ((theme: DefaultTheme) => string)
}

export type TypographyProps = Record<TVariant, ITypographyBase>

declare module 'styled-components' {
  export interface DefaultTheme {
    typography: TypographyProps
    animationDuration: number
    spacing: ISpacing
    breakpoints: IBreakpoint
    containerMaxWidths: IContainerMaxWidths
    palette: IPalette
    font: IFont
  }
}
