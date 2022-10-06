import React from 'react'
import { breakpoint, spacing } from 'src/theme/helpers/helpers'
import styled from 'styled-components'

interface IGridItem {
  children?: React.ReactNode
  component?: 'section' | 'article'
  md?: 3 | 6
  xl?: 4
}

const GridItem = styled(({ children, ...props }: IGridItem) =>
  React.createElement(props.component ?? 'div', props, children)
)`
  display: flex;
  box-sizing: border-box;
  padding-right: ${spacing(2)};
  padding-left: ${spacing(2)};
  width: 100%;
  @media (min-width: ${breakpoint('md')}) {
    flex: 0 0 auto;
    ${props =>
      props.md === 3 &&
      `
      flex: 0 0 auto;
      width: 25%;
    `}
    ${props =>
      props.md === 6 &&
      `
      flex: 0 0 auto;
      width: 50%;
    `}
  }
  @media (min-width: ${breakpoint('xl')}) {
    ${props =>
      props.xl === 4 &&
      `
    flex: 0 0 auto;
    width: 33.33333333%;
  `}
  }
`

export default GridItem
