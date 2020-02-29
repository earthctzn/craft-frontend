import React from 'react'
import { BreweryCard } from './ComponentStyles'

const Review = (props) => {
    return (
        <BreweryCard>
            <h3>{props.review.content}</h3>
        </BreweryCard>
    )
}

export default Review



