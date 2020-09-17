import React from 'react';
import classes from './HomePage.module.css'
import { useSelector } from 'react-redux';

export const HomePage = () => {

    const isLoggedIn = useSelector(state => state.loggedInStatus);
    const userInfo = JSON.parse(localStorage[('userInfo')])
    const { userName } = userInfo;

    return (
        <div className={classes.HomePage}>
            {
                isLoggedIn ? <h1>{`Привет, ${userName}`}</h1> : <h1>Привет, Гость!</h1>
            }
        </div>
    )
}