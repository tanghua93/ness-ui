import * as React from 'react'
import Modal, { IModalProps } from './modal'
import Alert from './alert'
import Prompt from './prompt'
import Confirm from './confirm'
import {
    createPortal
} from 'react-dom'
import CSSCore from '../../utils/CSSCore'
type ModalPortalFC<P> = React.FC<P> & {
    alert: typeof Alert,
    prompt: typeof Prompt,
    confirm: typeof Confirm
}
export interface IModalPortalProps extends IModalProps {
    isOpen?: boolean;
}
const ModalPortal: ModalPortalFC<IModalPortalProps> = (props: IModalPortalProps) => {
    const {
        isOpen
    } = props;
    React.useEffect(() => {
        renderModal(props);
    }, [isOpen, props]);
    const renderModal = (props: any) => {
        const isAddOrRemove = props.isOpen ? 'addClass' : 'removeClass'
        CSSCore[isAddOrRemove](document.body, 'has-modal-open');
    }
    return createPortal(<Modal {...props} />, document.body)

}
ModalPortal.defaultProps = {
    isOpen: false
}
ModalPortal.alert = Alert
ModalPortal.prompt = Prompt
ModalPortal.confirm = Confirm
export default ModalPortal