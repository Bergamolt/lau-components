import cn from '../../helpers'
import { ReactNode } from 'react'

import Input, { BaseInputProps } from './BaseInput'
import classes from './styles.module.scss'

export interface AdornmentInputProps extends BaseInputProps {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

function AdornmentInput(props: AdornmentInputProps) {
  const { startAdornment, endAdornment, ...rest } = props

  return (
    <div className={cn(classes.adornmentRoot, props.small && classes.small)}>
      {startAdornment && <div className={cn(classes.adornment, classes.adornmentStart)}>{startAdornment}</div>}
      <Input {...rest} />
      {endAdornment && <div className={cn(classes.adornment, classes.adornmentEnd)}>{endAdornment}</div>}
    </div>
  )
}

export default AdornmentInput
