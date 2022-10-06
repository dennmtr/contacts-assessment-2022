import { color, spacing } from 'src/theme/helpers/helpers'
import styled from 'styled-components'

const DescriptionListStyled = styled.dl`
  color: ${color('neutral.light')};
  font-size: ${props => props.theme.font.baseSize * 0.8}px;
  letter-spacing: 0.3px;
  margin: ${spacing(2)} 0;
  & dt {
    display: inline-block;
    margin: ${spacing(1)};
    margin-left: 0;
  }
  & dd {
    display: inline;
    font-weight: 600;
    margin: ${spacing(1)} ${spacing(0)};
    &:after {
      display: block;
      content: '';
    }
  }
`

export default DescriptionListStyled
