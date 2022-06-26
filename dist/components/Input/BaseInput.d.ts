import { ChangeEvent, InputHTMLAttributes } from 'react';
export interface BaseInputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: any;
    error?: boolean;
    helperText?: any;
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (e: ChangeEvent<HTMLInputElement>) => void;
    classHelperText?: string;
    small?: boolean;
    variant?: 'underlined' | 'outlined';
    theme?: 'light' | 'dark';
}
declare function Input(props: BaseInputProps): JSX.Element;
export default Input;
