import React, { useEffect } from 'react';
import classes from './AddNewsPopUp.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { setNewsData } from '../../../../store/actions';
import { CloseBtn } from '../../../../components/CloseBtn/CloseBtn'

export const AddNewsPopUp = ({ setShowPopUp,setLocalNewsData }) => {

    const dispatch = useDispatch();

    useEffect(()=>{
        const handlePopUpFade = (e) => {
            if (e.key === 'Escape') setShowPopUp(false)
        }
        window.addEventListener('keyup', handlePopUpFade)

        return ()=> window.removeEventListener('keyup', handlePopUpFade)

    }, [setShowPopUp])

    return (
        <div className={classes.PopUpWrapper}>
            <div className={classes.AddNewsPopUp}>

                <Formik
                    initialValues={{ title: "", content: "" }}
                    onSubmit={(values)=>{

                        const newsData = JSON.parse(localStorage.getItem('newsData'));

                        const date = new Date();

                        let day = date.getDay() < 10 ?  '0' + date.getDay() : date.getDay();
                        let month = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();

                        const obj = {
                            id: newsData.length,
                            title: values.title,
                            content: values.content,
                            date: `${day}.${month}.${date.getFullYear()}`,
                            approved: false
                        }

                        newsData.push(obj);
                        dispatch(setNewsData(newsData));
                        setLocalNewsData(newsData)
                        localStorage.setItem('newsData', JSON.stringify(newsData));

                        setShowPopUp(false);

                        }
                    }
                    validate={values => {
                        const errors = {};

                        if (!values.title|| !values.content) errors.content = 'Поля не должны быть пустые';

                        return errors;
                      }}
                >
                    <Form>
                        <div>
                            <Field name="title" type="text" placeholder="Заголовок" />
                        </div>
                        <div>
                            <Field as="textarea" name="content" type="" placeholder="Описание" />
                            <ErrorMessage name="content" component="div" className={classes.ErrorMessage} />
                        </div>
                        <div>
                            <button type="submit">Добавить</button>
                        </div>
                    </Form>
                </Formik>

                <CloseBtn setShowPopUp={setShowPopUp} />

            </div>
            <div className={classes.Overlay}></div>
        </div>
    )
}