import React from 'react';
import classes from './CloseBtn.module.css';
import closeBtn from '../../assets/images/close-btn.svg'

export const CloseBtn = ({setShowPopUp}) => {
    return (
        <div className={classes.closeBtn} onClick={()=>setShowPopUp(false)}>
        <img src={closeBtn} alt="Close" />
    </div>
    )
}