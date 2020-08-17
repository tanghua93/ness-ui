import React from 'react'
import classNames from 'classnames'
import AccordionItem from './accordionItem'
import { IAccordionProps} from './propType'
class Accordion extends React.PureComponent<IAccordionProps, any>{
    static Item: typeof AccordionItem = AccordionItem
    constructor(props: IAccordionProps) {
        super(props)
        const defaultActiveKey = props.defaultActiveKey ? props.defaultActiveKey : null
        this.state = {
            activeKey: defaultActiveKey,
        }
    }
    static defaultProps: IAccordionProps = {
        classPrefix: 'accordion'
    }
    handleSelect(e: any, key: number | null) {
        e.preventDefault();
        e.selected = true;
        if (this.props.onChange) {
            this.props.onChange(e);
        }
        if (this.state.activeKey === key) {
            key = null;
        }
        this.setState({
            activeKey: key
        });
    }
    handleToggle() {
        this.setState({ expanded: !this.state.expanded });
    }
    renderItems() {
        const activeKey = this.props.activeKey != null ?
            this.props.activeKey : this.state.activeKey;
        const _this = this
        return React.Children.map(this.props.children, (child: any, index) => {
            let {
                eventKey,
            } = child.props;
            const props = {
                key: index,
                onChange: this.handleSelect.bind(_this),
                expanded: false,
                eventKey: 0
            };

            if (eventKey === undefined) {
                props.eventKey = eventKey = index;
            }
            props.expanded = eventKey === activeKey;
            return React.cloneElement(child, props);
        });
    }
    render() {
        let {
            className,

            classPrefix,
            ...restProps
        } = this.props;
        const insetClass = classNames(classPrefix, className, {
           
        })
        return (
            <section
                className={insetClass}
            >
                {this.renderItems()}
            </section>
        );
    }
}

export default Accordion 