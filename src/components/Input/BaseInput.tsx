import cx from 'classnames'
import {ChangeEvent, InputHTMLAttributes, useContext, useState} from 'react'
import {UiThemeContext} from '../../context/themeContext'
import './styles.scss'

export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: any
  error?: boolean
  helperText?: any
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
  onFocus?: (e: ChangeEvent<HTMLInputElement>) => void
  classHelperText?: string
  small?: boolean
  variant?: 'underlined' | 'outlined'
  theme?: 'light' | 'dark'
}

function Input(props: BaseInputProps) {
  const {
    theme,
    className,
    variant,
    error,
    helperText,
    classHelperText,
    pattern,
    onBlur,
    onFocus,
    ...rest
  } = props

  const [isFocus, setFocus] = useState(false)
  const {isDarkTheme} = useContext(UiThemeContext)

  const componentTheme = theme || isDarkTheme ? 'dark' : 'light'

  return (
    <div className={cx('UiInput_root', componentTheme, className)}>
      <div
        className={cx(
          'UiInput_base',
          isFocus && 'UiInput_focus',
          error && 'UiInput_error',
          variant ? `UiInput_${variant}` : 'UiInput_outlined'
        )}
      >
        <input
          {...rest}
          // @ts-ignore
          pattern={pattern?.match(/\/(.+)\/.*/)[1]}
          onBlur={(e) => {
            setFocus(false)
            onBlur?.(e)
          }}
          onFocus={(e) => {
            setFocus(true)
            onFocus?.(e)
          }}
          className={cx(props.small && 'UiInput_smail')}
        />
      </div>

      {helperText && (
        <span className={cx('UiInput_helper-text', classHelperText)}>
          {helperText}
        </span>
      )}
    </div>
  )
}

export default Input
