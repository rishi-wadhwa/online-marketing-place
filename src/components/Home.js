import React, { useState, useEffect } from 'react';
import banner from '../assets/images/image-banner.png';
import style from '../styles/Home.module.css';
import products from '../products/products.js';
import { Link } from 'react-router-dom';

function Preparing({paths}){
  
  return(
      <>
      <img id={style.banner} src={banner}></img>
      <div className='parrent_container'>
        <div className={style.middle}>
            {products.map((item) => 
            <Link key={item.id} className="card" style={{textDecoration: 'none', color: 'inherit'}} to={`/products/${item.id}`}>
                <div className="product_picture_container">
                  <img className="product_picture" src={paths[item.id] && paths[item.id].imgsrc} /> 
                </div>
                <p>
                  {item.name}
                </p>
                <div className='ratings_container2'>
                  <div style={{width: '80px'}}>
                    <img className="ratings_stars" src={paths[item.id] && paths[item.id].ratingSrc} />
                  </div>
                  <p>{item.rating}</p>
                </div>
                <div className='product_price2' style={{}}>
                  <p>$</p>
                  <p>{item.price}</p>
                </div>
            </Link>
            )}
        </div>
      </div>
      </>
  )

}


function Home() {

  const [path, setPath] = useState();
  
      useEffect(() => {
        let pathsArray = products.map(async (item) => {
          item.productSrc.then((res) => res.default).then((res) => {

            item.ratingSrc().then((res2) => res2.default).then((res2) => {

              setPath((prevValue) => 
              ({
                  ...prevValue,
                  [item.id]:{
                  imgsrc:res,
                  ratingSrc:res2
                  }
              })
              )
            })

          });
        })
      }, [])

  return (
    <>
      {path && <Preparing paths={path}/>}
    </>
  )
  
} 

export default Home;