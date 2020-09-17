import React, { useEffect, useState } from 'react';
import classes from './PopUp.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../store/actions';
import { users } from  '../../utils/projectData';
import { CloseBtn } from '../CloseBtn/CloseBtn';

export const PopUp = ({ setShowPopUp }) => {

    useEffect(()=>{
        const handlePopUpFade = (e) => {
            if (e.key === 'Escape') setShowPopUp(false)
        }
        window.addEventListener('keyup', handlePopUpFade)

        return ()=> window.removeEventListener('keyup', handlePopUpFade)

    }, [setShowPopUp])

    const dispatch = useDispatch();
    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <div className={classes.PopUpWrapper}>
            <div className={classes.PopUp}>
                <Formik
                    initialValues={{ login: "", password: "" }}
                    onSubmit={()=>{
                            dispatch(userLogIn());
                            localStorage.setItem('userInfo', JSON.stringify(loggedInUser))
                            setShowPopUp(false);
                        }
                    }
                    validate={values => {
                        const errors = {};
                        let flag;

                        for (let i=0; i<users.length; i++) {
                            if (users[i].userName === values.login && users[i].password === values.password) {
                                flag = true;
                                setLoggedInUser(users[i])
                                break;
                            } else flag = false
                        }
                        
                        if (!flag) errors.password = 'Неверный логин или пароль';

                        return errors;
                      }}
                >
                    <Form>
                        <div>
                            <Field name="login" type="text" placeholder="Логин" />
                        </div>
                        <div>
                            <Field name="password" type="password" placeholder="Пароль" />
                            <ErrorMessage name="password" component="div" className={classes.ErrorMessage} />
                        </div>
                        <div>
                            <button type="submit">Войти</button>
                        </div>
                    </Form>
                </Formik>

                <CloseBtn setShowPopUp={setShowPopUp} />
                
            </div>
            <div className={classes.Overlay}></div>
        </div>
    )
}