import React from 'react'
import { WelcomeCard } from './ComponentStyles'
import { Redirect } from 'react-router-dom'

export const Home = (props) => {
    return !props.user ?
    (
        <WelcomeCard>
            <h1>Craft</h1>
            <h2>Login or Signup to start!</h2>
        </WelcomeCard>
    )
    :
    (
        <Redirect to="/home" />
    )
}

export default Home