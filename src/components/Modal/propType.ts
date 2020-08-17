export interface IModalPropsType{
    isOpen?: boolean;
    role?: 'alert' | 'confirm' | 'prompt' | 'loading' | 'actions' | 'popup';
    title?: React.ReactNode;
    confirmText?: React.ReactNode;
    cancelText?: React.ReactNode;
    closeBtn?: boolean;
    closeViaBackdrop?: boolean;
    onAction?: (data?: any, e?: React.MouseEvent) => void;
    onOpen?: () => void;
    afterClose?: () => void;
    beforeClose?: (e?: React.MouseEvent) => void;
    className?: string;
}