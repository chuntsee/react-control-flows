import React, { FunctionComponent } from 'react'

export interface DefaultComponent extends FunctionComponent {
    isCase: boolean
    isDefault: boolean
}

const Default: DefaultComponent = ({ children }) => {
    return <>{children}</>
}

Default.isCase = false
Default.isDefault = true

export default Default
