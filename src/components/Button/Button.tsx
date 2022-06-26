import classes from './styles.module.scss'

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <button className={classes.root}>{props.label}</button>
}

export default Button
