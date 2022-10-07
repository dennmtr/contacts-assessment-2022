import React from 'react'
import magnifier from 'src/assets/images/icon-supervisor.png'
import IconContainer from 'src/components-domain/Icons/IconContainer.styled'
import Button, { IButton } from 'src/components/Button/Button.styled'

interface IMagniIcon
  extends Omit<React.PropsWithChildren<React.HTMLProps<HTMLButtonElement>>, 'ref'>,
    IButton {}

const MagniIcon = React.forwardRef<HTMLButtonElement, IMagniIcon>(({ onClick, mlAuto }, ref) => {
  return (
    <IconContainer>
      <Button ref={ref} onClick={onClick} title="Inspect" mlAuto={mlAuto}>
        <img src={magnifier} alt="Inspect" width={45} />
      </Button>
    </IconContainer>
  )
})

export default MagniIcon
