import React from 'react'
import { ErrorCard } from './ComponentStyles'


export const ErrorComponent = (props) => {
    return (

        <ErrorCard >
            {props.error}
        </ErrorCard>
    ) 
}