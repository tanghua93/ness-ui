type BadgeDefaultStyle = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark';
export interface IBadgeProps {
    classPrefix?: string;
    theme?: BadgeDefaultStyle | string;
    className?: string;
    rounded?: boolean;
    dot?: boolean;
    hollow?: boolean;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}