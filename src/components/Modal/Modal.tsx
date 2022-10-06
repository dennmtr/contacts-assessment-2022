import React from 'react'
import Box from 'src/components/Box/Box.styled'
import * as S from './Modla.styled'

interface IModal {
  children?: React.ReactNode
  open?: boolean
  onClose?: (reason: string) => void
  onTransitionEnd?: () => void
  headerComponent?: React.ReactNode
}

const Modal: React.FC<IModal> = ({ children, open, onClose, onTransitionEnd, headerComponent }) => {
  const dialogRef = React.useRef<HTMLDivElement>(null)
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) =>
    !dialogRef.current?.contains(e.target as HTMLDivElement) && onClose?.('backdrop')
  const handleTransitionEnd = () => {
    onTransitionEnd?.()
  }
  const handleButtonClick = () => onClose?.('user')
  return (
    <>
      <S.ModalContainer visible={open} onClick={handleClick}>
        <S.ModalDialog onTransitionEnd={handleTransitionEnd} ref={dialogRef}>
          <S.ModalContent>
            <S.ModalHeader>
              <Box paddingX={2}>{headerComponent}</Box>
              <S.ModalCloseButton onClick={handleButtonClick} title="Close">
                &times;
              </S.ModalCloseButton>
            </S.ModalHeader>
            {children}
          </S.ModalContent>
        </S.ModalDialog>
      </S.ModalContainer>
      <S.ModalBackdrop visible={open} />
    </>
  )
}

export default Modal
