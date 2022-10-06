import Button from 'src/components/Button/Button.styled'
import { breakpoint, color, maxWidth, spacing } from 'src/theme/helpers/helpers'
import styled, { css } from 'styled-components'

interface IModalState {
  visible?: boolean
}

export const ModalDialog = styled.div`
  position: relative;
  width: auto;
  margin: ${spacing(2)};
  pointer-events: none;
  transition: transform ${props => props.theme.animationDuration}s ease-out;
  transform: translate(0, -50px);
  @media (min-width: ${breakpoint('sm')}) {
    margin: ${spacing(5)};
    max-width: ${maxWidth('sm')};
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: ${breakpoint('md')}) {
    max-width: ${maxWidth('md')};
  }
`

export const ModalBackdrop = styled.div<IModalState>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100vw;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  transition: ${props => props.theme.animationDuration}s opacity;
  background-color: rgba(0, 0, 0, 0.5);
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`

export const ModalContainer = styled.div.attrs<IModalState>({
  tabIndex: -1,
  role: 'dialog'
})<IModalState>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1055;
  opacity: 0;
  visibility: hidden;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      visibility: visible;
    `}
  ${ModalDialog} {
    ${props =>
      props.visible &&
      css`
        transform: none;
      `}
  }
`

export const ModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: ${color('background')};
  border-bottom: 3px solid ${color('primary.main')};
  outline: 0;
  box-shadow: -${spacing(1)} ${spacing(2)} ${spacing(3)} rgba(0, 0, 0, 0.2);
`

export const ModalCloseButton = styled(Button)`
  box-sizing: content-box;
  width: 1em;
  height: 1em;
  color: #000;
  opacity: 0.3;
  font-weight: 600;
  font-size: 1.3rem;
`

export const ModalHeader = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: ${spacing(4)} ${spacing(4)};
  background-color: ${color('backgroundLight')};
  ${ModalCloseButton} {
    padding: ${spacing(2)} ${spacing(2)};
    margin: -${spacing(1)} -${spacing(1)} -${spacing(1)} auto;
  }
`
