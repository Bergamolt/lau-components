import cx from 'classnames'
import { ReactNode } from 'react'

import Input, { BaseInputProps } from './BaseInput'
import classes from './styles.module.scss'

export interface AdornmentInputProps extends BaseInputProps {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

function AdornmentInput(props: AdornmentInputProps) {
  const {startAdornment, endAdornment, ...rest} = props

  return (
    <div className={cx(classes.adornmentRoot, props.small && classes.small)}>
      {startAdornment && (
        <div className={cx(classes.adornment, classes.adornmentStart)}>
          {startAdornment}
        </div>
      )}
      <Input {...rest} />
      {endAdornment && (
        <div className={cx(classes.adornment, classes.adornmentEnd)}>
          {endAdornment}
        </div>
      )}
    </div>
  )
}

export default AdornmentInput
