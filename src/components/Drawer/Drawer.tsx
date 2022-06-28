import classes from './Drawer.module.css'

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  open?: boolean
  onClose?: () => void
}

const Drawer = (props: DrawerProps) => {
  const {children, className, ...rest} = props

  const classesDrawer = [className].filter((cn) => cn)

  return (
    <div className={[classes.root, ...classesDrawer].join(' ')} {...rest}>
      {children}
    </div>
  )
}

export default Drawer
