import React from 'react';
import style from '../styles/NotFound.module.css';
import picture from '@assets/images/404notfound.png';
import {useEffect} from 'react';

function NotFound() {
    document.body.classList.add('body')
    useEffect(() => {
        document.querySelectorAll('*').forEach((item) => {
            item.classList.add("fullwidthandheight");
        })
    }, [])

return (
    <div className={style.picture_container}>
        <img className={style.img} src={picture} />
    </div>
  )
}

export default NotFound