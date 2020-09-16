import React from 'react';
import classes from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { userLogOut } from '../../store/actions';

export const Header = ( {setShowPopUp} ) => {

    const isLoggedIn = useSelector(state => state.loggedInStatus);
    const dispatch = useDispatch();

    return (
        <header className={classes.Header}>
           <nav>
                <NavLink exact to="/">Главная</NavLink>
                <NavLink exact to="/news">Новости</NavLink>
           </nav>

           {
               isLoggedIn ? <button type="button" onClick={()=>dispatch(userLogOut())}>Выход</button>
               : <button type="button" onClick={()=>setShowPopUp(true)}>Вход</button>
           }
        </header>
    )
}