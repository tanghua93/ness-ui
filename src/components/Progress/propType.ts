export type ButtonSize =
    "xs" |
    "sm" |
    "lg" |
    "xl";
export interface IProgressProps {
    percent?: string | number;
    style?: React.CSSProperties;
    theme?:
    "primary" |
    "secondary" |
    "success" |
    "warning" |
    "danger" |
    "dark";
    classPrefix?: string;
    size?: ButtonSize;
    stripes?: boolean;
    rounded?: boolean;
    barStyle?: React.CSSProperties;
    animate?: boolean;
    unfilled?: boolean;
    children?: React.ReactNode;
}