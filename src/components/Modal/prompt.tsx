import * as React from 'react'
import Modal,{IModalPortalProps} from './modalPortal'
import ReactDom from 'react-dom'
import InputItem from '../Input/input'
export interface IPromptProps extends IModalPortalProps{
    placeholder?:string;
}
function Prompt(props: IPromptProps) {
    ReactDom.render(<Modal
        isOpen={true}
        role="prompt"
        {...props}
        >
        <InputItem type="text" placeholder={props.placeholder} />
        </Modal>, document.createElement('div'))
}
export default Prompt