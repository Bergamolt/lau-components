import cn from '../../helpers'
import classes from './Drawer.module.css'

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  open?: boolean
  onClose?: () => void
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
