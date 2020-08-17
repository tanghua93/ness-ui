type Align = "right" | "center" | "between" | "around"
type Wrap = "wrap" | "wrap-reverse"
export interface IGridProps {
    classPrefix?: string;
    children?: React.ReactNode;
    collapse?: boolean;
    avg?: number;
    align?: Align;
    wrap?: Wrap;
    bordered?: boolean;
    className?: string;
    style?: React.CSSProperties;
}