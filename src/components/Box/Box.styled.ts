import React from 'react'
import { ISpacing } from 'src/styled'
import styled from 'styled-components'

interface IBox {
  children?: React.ReactNode
  padding?: keyof ISpacing
  paddingY?: keyof ISpacing
  paddingX?: keyof ISpacing
}

const Box = styled.div<IBox>`
  padding-top: ${({ theme, padding, paddingY }) => theme.spacing[paddingY ?? padding ?? 1]}rem;
  padding-right: ${({ theme, padding, paddingX }) => theme.spacing[paddingX ?? padding ?? 1]}rem;
  padding-bottom: ${({ theme, padding, paddingY }) => theme.spacing[paddingY ?? padding ?? 1]}rem;
  padding-left: ${({ theme, padding, paddingX }) => theme.spacing[paddingX ?? padding ?? 1]}rem;
`

export default Box
