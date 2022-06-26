import cx from 'classnames'
import { ReactNode } from 'react'
import './styles.scss'

import Input, {BaseInputProps} from './BaseInput'

export interface AdornmentInputProps extends BaseInputProps {
  startAdornment?: ReactNode
  endAdornment?: ReactNode
}

function AdornmentInput(props: AdornmentInputProps) {
  const {startAdornment, endAdornment, ...rest} = props

  return (
    <div
      className={cx('UiInputAdornment_root', props.small && 'UiInput-small')}
    >
      {startAdornment && (
        <div className={cx('UiInput-adornment', 'UiInput_start-adornment')}>
          {startAdornment}
        </div>
      )}
      <Input {...rest} />
      {endAdornment && (
        <div className={cx('UiInput_adornment', 'UiInput_and-adornment')}>
          {endAdornment}
        </div>
      )}
    </div>
  )
}

export default AdornmentInput
