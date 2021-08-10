import React, { FunctionComponent } from 'react'

interface CaseProps {
    value: any
}

export interface CaseComponent<CaseProps> extends FunctionComponent<CaseProps> {
    isCase: boolean
    isDefault: boolean
}

const Case: CaseComponent<CaseProps> = ({ children }) => {
    return <>{children}</>
}

Case.isCase = true
Case.isDefault = false

export default Case
