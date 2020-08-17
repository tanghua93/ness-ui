export interface ICardPropsType{
    title?: React.ReactNode;
    className?:string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
}
export type CardItemType = 'header' | 'footer' ;
export interface ICardChildPropsType{
    role?: CardItemType;
    cover?: React.ReactNode;
    className?:string;
}