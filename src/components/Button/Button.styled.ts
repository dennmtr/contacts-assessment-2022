import styled from 'styled-components'

export interface IButton {
  mlAuto?: boolean
}

const Button = styled.button<IButton>`
  background: none;
  padding: 0;
  cursor: pointer;
  &:disabled {
    cursor: default;
  }
  position: relative;
  box-sizing: border-box;
  background-color: transparent;
  outline: 0;
  border: 0;
  margin: 0;
  border-radius: 0;
  padding: 0;
  user-select: none;
  vertical-align: middle;
  text-decoration: none;
  margin-left: ${props => (props.mlAuto ? 'auto' : 0)};
`

export default Button
