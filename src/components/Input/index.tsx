import AdornmentInput, {AdornmentInputProps} from './AdornmentInput'
import BaseInput from './BaseInput'
import './styles.scss'

export interface InputProps extends AdornmentInputProps {}

const Input = (props: InputProps) => {
  const {startAdornment, endAdornment, ...rest} = props

  if (startAdornment || endAdornment) {
    return (
      <AdornmentInput
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        {...rest}
      />
    )
  }

  return <BaseInput {...rest} />
}

export default Input
