import * as React from 'react'
import Modal from './modalPortal'
import ReactDom from 'react-dom'

function Alert(props: any) {
    ReactDom.render(<Modal 
        isOpen={true} 
        role="alert"
    {...props}>{props.message}</Modal>,document.createElement('div'))
}
export default Alert