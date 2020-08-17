import * as React from 'react'
import Modal, { IModalPortalProps} from './modalPortal'
import ReactDom from 'react-dom'
export interface IConfirmProps extends IModalPortalProps {
    message?: string;
}
function Confirm(props: IConfirmProps) {
    ReactDom.render(<Modal
        isOpen={true}
        role="confirm"
        {...props}>{props.message}</Modal>, document.createElement('div'))
}
export default Confirm