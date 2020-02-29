import React from 'react'
import { BreweryCard } from './ComponentStyles'
import Brewery from './Brewery'

const Review = (props) => {
    return (
        <BreweryCard>
            <BreweryCard>
                <Brewery brewery={props.review.brewery}/>
            </BreweryCard>
            <h3>{props.review.content}</h3>
        </BreweryCard>
    )
}

export default Review