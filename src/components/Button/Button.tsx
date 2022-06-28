import classes from './Button.module.css'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  className?: string
  variant?: 'filled' | 'outlined' | 'text'
}

const Button = (props: ButtonProps) => {
  const {children, className, variant, ...rest} = props

  const classesButton = [className, classes[variant || 'filled']].filter(
    (cn) => cn
  )

  return (
    <button className={[classes.root, ...classesButton].join(' ')} {...rest}>
      {children}
    </button>
  )
}

export default Button
