import React from 'react';
import classes from './HomePage.module.css'
import { useSelector } from 'react-redux';

export const HomePage = () => {

    const isLoggedIn = useSelector(state => state.loggedInStatus)

    return (
        <div className={classes.HomePage}>
            {
                isLoggedIn ? 'Привет, User!' : 'Привет, Гость!'
            }
        </div>
    )
}