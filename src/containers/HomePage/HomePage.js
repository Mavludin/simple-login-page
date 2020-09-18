import React from 'react';
import classes from './HomePage.module.css'
import { useSelector } from 'react-redux';

export const HomePage = () => {

    const isLoggedIn = useSelector(state => state.loggedInStatus);
    let userInfo = {}, userName = '';

    if (isLoggedIn) {
        userInfo = JSON.parse(localStorage[('userInfo')]);
        userName = userInfo.userName
    }

    return (
        <div className={classes.HomePage}>
            {
                isLoggedIn ? <h1>{`Привет, ${userName}`}</h1> : <h1>Привет, Гость!</h1>
            }
        </div>
    )
}