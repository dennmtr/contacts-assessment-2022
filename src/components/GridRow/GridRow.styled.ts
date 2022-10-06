import React from 'react'
import { spacing } from 'src/theme/helpers/helpers'
import styled from 'styled-components'

interface IGridRow {
  children?: React.ReactNode
  component?: 'section' | 'article'
  mh?: number
}

const GridRow = styled(({ children, ...props }: IGridRow) =>
  React.createElement(props.component ?? 'div', props, children)
)`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  padding-top: ${spacing(3)};
  padding-bottom: ${spacing(3)};
  align-items: flex-start;
  align-content: flex-start;
  ${props =>
    props.mh &&
    `
      min-height: ${props.mh}px;
    `}
`

export default GridRow
