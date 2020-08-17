export interface IGroupProps {
    classPrefix?: string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    noPadded?: boolean;
    className?: string;
    [key: string]: React.ReactNode;
}