import React from 'react'
import { ReactComponent as Img } from 'src/assets/images/icon-supervisor.svg'
import IconContainer from 'src/components-domain/Icons/IconContainer.styled'
import Button, { IButton } from 'src/components/Button/Button.styled'

interface IMagniIcon
  extends Omit<React.PropsWithChildren<React.HTMLProps<HTMLButtonElement>>, 'ref'>,
    IButton {}

const MagniIcon = React.forwardRef<HTMLButtonElement, IMagniIcon>(({ onClick, mlAuto }, ref) => {
  return (
    <IconContainer>
      <Button ref={ref} onClick={onClick} title="Inspect" mlAuto={mlAuto}>
        <Img viewBox="0 0 65 65" width={55} />
      </Button>
    </IconContainer>
  )
})

export default MagniIcon
