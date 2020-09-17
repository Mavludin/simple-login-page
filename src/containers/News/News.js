import React, { useEffect, useState } from 'react';
import classes from './News.module.css';
import { AddNewsPopUp } from './components/AddNewsPopUp/AddNewsPopUp';
import { useDispatch, useSelector } from 'react-redux';
import { setNewsData } from '../../store/actions';

export const News = () => {

    const newsData = useSelector(state => state.newsData);
    const [localNewsData, setLocalNewsData] = useState(newsData);
    const dispatch = useDispatch();
    const { role } = JSON.parse(localStorage[('userInfo')]);
    const isLoggedIn = useSelector(state => state.loggedInStatus);
    const [showPopUp, setShowPopUp] = useState(false);

    const handleApproval = (pos) => {
        const tempArray = [...newsData]
        tempArray[pos].approved = true;
        dispatch(setNewsData(tempArray))
    }

    const renderNewsData = localNewsData.map((item,pos) => {
        let classList = classes.NewsItem;
        if (!item.approved && ( role === 'admin' || role === 'user'))
            classList = `${classes.NewsItem} ${classes.NotApproved}`;
        return (
            <React.Fragment>
            {   
                !isLoggedIn && !item.approved ? null
                :
                <div key={item.id} className={classList}>
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>
                    <div>{item.date}</div>
                    {
                        !item.approved && role === 'admin' 
                        ? <button type="button" onClick={()=>handleApproval(pos)}>Одобрить</button> 
                        : null
                    }
                </div>
            }
            </React.Fragment>
        )
    })

    const filterData = (string) => {
        if (string.length) {
            const tempArray = newsData.filter(item => {
                for (let key in item) {
                    if (item[key].toString().toLowerCase().includes(string.toLowerCase())) {
                        return item;
                    }
                }
                return null
            })
            setLocalNewsData(tempArray)
        }
    }

    useEffect(()=>{
        if (!localStorage[('newsData')]) localStorage.setItem('newsData', JSON.stringify(newsData))
    }, [newsData])

    return (
        <div className={classes.NewsPage}>
            { showPopUp ? <AddNewsPopUp setShowPopUp={setShowPopUp} setLocalNewsData={setLocalNewsData} /> : null }
            <h1>Новости</h1>
            <form action="">
                <div>
                    <input type="text" placeholder="Поиск" onChange={(e)=>filterData(e.target.value)} />
                </div>
            </form>
            {
               role === 'user' && isLoggedIn ? <button className={classes.AddNewsBtn} onClick={()=>setShowPopUp(true)}>Добавить новость</button>
               : null 
            }
            {renderNewsData}
        </div>
    )
}