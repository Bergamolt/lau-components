/// <reference types="react" />
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    variant?: 'filled' | 'outlined' | 'text';
}
declare const Button: (props: ButtonProps) => JSX.Element;
export default Button;
