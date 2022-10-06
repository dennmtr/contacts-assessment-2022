import { IContainerMaxWidths, ISpacing } from 'src/styled'
import { breakpoint, maxWidth, spacing } from 'src/theme/helpers/helpers'
import styled, { css, DefaultTheme, ThemedStyledProps } from 'styled-components'

interface IContainer {
  textCenter?: boolean
  size?: keyof IContainerMaxWidths
  paddingY?: keyof ISpacing
}

const handleSize = ({ size }: ThemedStyledProps<IContainer, DefaultTheme>) => {
  switch (size) {
    case 'sm':
    case 'md':
    case 'lg':
    case 'xl':
      return css`
        max-width: ${maxWidth(size)};
      `
    default:
      return css`
        @media (min-width: ${breakpoint('sm')}) {
          max-width: ${maxWidth('sm')};
        }
        @media (min-width: ${breakpoint('md')}) {
          max-width: ${maxWidth('md')};
        }
        @media (min-width: ${breakpoint('lg')}) {
          max-width: ${maxWidth('lg')};
        }
        @media (min-width: ${breakpoint('xl')}) {
          max-width: ${maxWidth('xl')};
        }
      `
  }
}

const handlePadding = ({ paddingY }: ThemedStyledProps<IContainer, DefaultTheme>) => {
  return css`
    padding-top: ${spacing(paddingY ?? 0)};
    padding-bottom: ${spacing(paddingY ?? 0)};
  `
}

const Container = styled.div<IContainer>`
  width: 100%;
  padding-right: ${spacing(0)};
  padding-left: ${spacing(0)};
  margin-right: auto;
  margin-left: auto;
  ${({ textCenter }) =>
    textCenter &&
    css`
      text-align: center;
    `}
  ${handleSize}
  ${handlePadding}
`

export default Container
