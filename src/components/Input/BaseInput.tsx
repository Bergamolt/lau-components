import cx from 'classnames'
import { ChangeEvent, InputHTMLAttributes, useContext, useState } from 'react'

import { UiThemeContext } from '../../context/themeContext'
import classes from './styles.module.scss'

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
    <div className={cx(classes.root, componentTheme, className)}>
      <div
        className={cx(
          classes.base,
          isFocus && classes.focus,
          error && classes.error,
          classes[variant ? variant : 'underlined']
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
          className={cx(props.small && classes.small)}
        />
      </div>

      {helperText && (
        <span className={cx(classes.helperText, classHelperText)}>
          {helperText}
        </span>
      )}
    </div>
  )
}

export default Input
