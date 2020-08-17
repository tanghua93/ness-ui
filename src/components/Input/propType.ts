export interface IInputItemProps {
    classPrefix?: string;
    labelBefore?: React.ReactNode;
    labelAfter?: React.ReactNode;
    className?: string;
    placeholder?: string;
    containerClassName?: string;
    type?: string;
    [index:string]: any;
}