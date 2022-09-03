import cn from 'utils'
import classes from './Paper.module.css'

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

const Drawer = (props: DrawerProps) => {
  const { children, className, ...rest } = props

  return (
    <div className={cn(classes.root, className)} {...rest}>
      {children}
    </div>
  )
}

export default Drawer
