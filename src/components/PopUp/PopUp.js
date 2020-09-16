import React from 'react';
import classes from './PopUp.module.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../store/actions';

export const PopUp = ({ setShowPopUp }) => {

    const dispatch = useDispatch();

    return (
        <div className={classes.PopUpWrapper}>
            <div className={classes.PopUp}>
                <Formik
                    initialValues={{ login: "", password: "" }}
                    onSubmit={()=>{
                            dispatch(userLogIn());
                            setShowPopUp(false);
                        }
                    }
                    validate={values => {
                        const errors = {};
                        if (values.login.length < 2) {
                          errors.login = 'Длина логина не меньше 2';
                        }
                        if (values.password.length < 8) {
                            errors.password = 'Длина пароля не меньше 8';
                          }
                        return errors;
                      }}
                >
                    <Form>
                        <div>
                            <Field name="login" type="text" placeholder="Your login" />
                            <ErrorMessage name="login" component="div" className={classes.ErrorMessage} />
                        </div>
                        <div>
                            <Field name="password" type="password" placeholder="Your pass" />
                            <ErrorMessage name="password" component="div" className={classes.ErrorMessage} />
                        </div>
                        <div>
                            <button type="submit">Войти</button>
                        </div>
                    </Form>
                </Formik>

            </div>
            <div className={classes.Overlay}></div>
        </div>
    )
}