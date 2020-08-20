import React from 'react'
import { BreweryCard } from './ComponentStyles'

function formatDate(string){
    var options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(string).toLocaleDateString([],options);
}

const Review = (props) => {
    console.log(formatDate(props.review.created_at))
    return (
        <BreweryCard>
            <h5> {props.review.username} said: "{props.review.content}" on {formatDate(props.review.created_at)}</h5>
        </BreweryCard>
    )
}

export default Review



