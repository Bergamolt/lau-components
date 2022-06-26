import { ReactNode } from 'react';
import { BaseInputProps } from './BaseInput';
export interface AdornmentInputProps extends BaseInputProps {
    startAdornment?: ReactNode;
    endAdornment?: ReactNode;
}
declare function AdornmentInput(props: AdornmentInputProps): JSX.Element;
export default AdornmentInput;
