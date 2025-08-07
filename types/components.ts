export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    icon?: React.ReactNode;
    title?: string;
    multiline?: boolean;
    divCssClass?: string;
    inputCssClass?: string;
    titleCssClass?: string;
}