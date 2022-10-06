/* eslint-disable max-len */
import { color, spacing } from 'src/theme/helpers/helpers'
import styled from 'styled-components'

const Card = styled.div`
  background-color: ${color('background')};
  box-sizing: border-box;
  width: 100%;
  margin: ${spacing(3)} ${spacing(2)};
  box-shadow: -${spacing(1)} ${spacing(2)} ${spacing(3)} rgba(0, 0, 0, 0.2);
  border-radius: 0.25rem;
  border-top: 2px solid ${color('primary.main')};
  transition: transform 0.3s;
  :hover {
    transform: scale(1.02);
  }
  padding: ${spacing(4)} ${spacing(4)};
`

export default Card
