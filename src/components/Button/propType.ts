export type ButtonType = "default" | "secondary" | "success" | "warning" | "danger" | "dark" | "link";
export type ButtonSize = "xs" | "sm" |"lg" | "xl";
export interface IButtonProps {
    classPrefix: string,
    children: React.ReactNode;
    href?: string;
    /** 按钮类型 */
    btnType?: ButtonType;
    size?: ButtonSize | null;
    hollow?: boolean;
    block?: boolean;
    disabled?: boolean;
    className?: string | null;
    loading?: boolean;
}
