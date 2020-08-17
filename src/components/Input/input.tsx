import React from 'react';
import classNames from 'classnames';
import { IInputItemProps } from './propType'
type assignedPropsType<T> = {
    [key: string]: T;
}
const InputItem: React.FC<IInputItemProps> = (props: IInputItemProps) => {
    const {
        classPrefix,
        type,
        className,
        labelBefore,
        labelAfter,
        containerClassName,
        ...restProps
    } = props;
    const isCheckboxOrRadioOrFile = () => {
        return type === 'radio' || type === 'checkbox' || type === 'file';
    };
    const renderField = () => {
        const fieldClassName = isCheckboxOrRadioOrFile() ?
            '' : classPrefix;
        const classes = classNames(className, fieldClassName);
        const commonProps = {
            key: 'formField',
            className: classes,
            type
        };
        const assignedProps: assignedPropsType<string | undefined> = {
            ...restProps,
            ...commonProps,
        };
        switch (type) {
            case 'textarea':
                return (
                    <textarea
                        {...assignedProps}
                    />
                );
                
            default:
                return (
                    <input
                        placeholder={props.placeholder}
                        {...assignedProps}
                    />
                );
        }
    }
    const renderFieldGroup = (children: JSX.Element) => {
        const groupPrefix = `${classPrefix}-group`;
        const groupClass = classNames(`${classPrefix}-group`,{
            [`after`]: !!labelAfter,
            [`before`]: !!labelBefore
        })
        const labelClassName = `${groupPrefix}-label`;
        const renderFiledLabel = (type:string) => {
            return props[type] ? (
                <span
                    className={labelClassName}
                    key={type}
                >
                    {props[type]}
                </span>
            ) : null;
        };
        return labelBefore || labelAfter ? (
            <div
                className={classNames(groupClass, containerClassName)}
                key="fieldGroup"
            >
                {renderFiledLabel('labelBefore')}
                {children}
                {renderFiledLabel('labelAfter')}
              
            </div>
        ) : children;
    }

    const field = renderField()
    return renderFieldGroup(field)
}

InputItem.defaultProps = {
    classPrefix: 'field'
}
export default InputItem