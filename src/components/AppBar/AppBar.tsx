import classes from './AppBar.module.css'

export interface AppBarProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  fixed?: boolean
}

const AppBar = (props: AppBarProps) => {
  const {children, className, fixed, ...rest} = props

  const classesAppBar = [className, fixed && classes.fixed].filter((cn) => cn)

  return (
    <header className={[classes.root, ...classesAppBar].join(' ')} {...rest}>
      {children}
    </header>
  )
}

export default AppBar
