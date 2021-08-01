import React, { FunctionComponent } from 'react'
import { DefaultComponent } from './Default'

interface SwitchProps {
    value: string
}

const Switch: FunctionComponent<SwitchProps> = ({ value, children }) => {
    const childrenArray = React.Children.toArray(children);
    let defaultElement: React.ReactElement = <></>
    for (const child of childrenArray) {
        const elementChild = child as React.ReactElement
        const type = elementChild.type as DefaultComponent
        if (type.isDefault) {
            defaultElement = elementChild
        }
        if (type.isCase) {
            if (elementChild.props.value === value) {
                return elementChild
            }
        }
    }
    return defaultElement
}

export default Switch
