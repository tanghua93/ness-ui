export type NotificationType =
    'primary' |
    'secondary' |
    'success' |
    'warning' |
    'danger';
export interface INprops {
    classPrefix?: string;
    title?: string | React.ReactNode;
    theme?: NotificationType;
    closable?: boolean;
    animateEnd?: (el: any) => void;
    visible: boolean;
    className?: string;
    style?: React.CSSProperties;
    onClose?: React.MouseEventHandler<HTMLButtonElement>;
}