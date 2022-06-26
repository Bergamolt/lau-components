import { ReactNode } from 'react';
interface ContextState {
    isDarkTheme: boolean;
    changeTheme: (dark: boolean) => void;
}
declare const UiThemeContext: import("react").Context<ContextState>;
declare type Props = {
    children: ReactNode;
};
declare const UiThemeProvider: (props: Props) => JSX.Element;
export { UiThemeContext, UiThemeProvider };
