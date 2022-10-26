import React from 'react';
import products from './../products/products';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';
import style from '../styles/search.module.css';
import { AuthContext } from './../context/AuthContext';
import {AddToCart} from '../storage/storage.js';
import './../styles/carts-responsive.css';

function Preparing({paths}){
  const navigate = useNavigate();
  const {CurrentUser} = useContext(AuthContext);

  let param = useParams().SearchName;

  function ThrewToCart(id){
    navigate("/cart");
    AddToCart({productID:id, userName:CurrentUser.userName, quantity:1});
  }

  function AddDiv(item){

    let input = item.toLowerCase();
    let result = input.indexOf(param.toLowerCase());
    
    return <p style={{marginTop: '1rem'}}>{item.slice(0, result)}<span style={{backgroundColor:'#4DC4CA'}}>{item.slice(result, result+param.length)}</span>{item.slice(result+param.length)}</p>  
    
  }


return(
  <>
    <div className='parrent_container' style={{width: '100%', margin: '0 0 1.6rem 0', justifyContent:'center'}}>
      <div className='parrent_container' style={{width: '75%', margin: '0', flexDirection:'column'}}>
        <p id={style.header}>{Object.keys(paths).length} of over {Object.keys(products).length} results for "{param}"</p>
        {Object.keys(paths).length !== 0 && <p id={style.headerResults}>RESULTS</p>}
          {Object.keys(paths).length !== 0 ? Object.keys(paths).map((item, index) => {
          return( 
                <Link style={{textDecoration: 'none', color: 'inherit', margin:'1.5rem 0'}} to={`/products/${paths[item].id}`} key={("veri", paths[item].id)} > 
                  <div className='wide-card'>
                    <div className='wide-card-picture-container' >
                      <img className="wide-card-picture" src={paths[item].imgsrc} />
                    </div>
                    <div className={"NameText"}>
                        {AddDiv(paths[item].name)} 
                    </div>
                    <div className={"price_div ".concat(style.price_container)} >
                            <div className='ratings_container' style={{width: '200px'}} >
                                <img className="ratings_stars" src={paths[item].ratingSrc} />
                                <p style={{fontSize: '1.2rem'}} >{paths[item].rating}</p>
                            </div>
                            <div className='product_price' >
                                <p style={{fontSize: '2rem', margin:'0'}}>$</p>
                                <p style={{fontSize: '2.2rem'}} >{paths[item].price}</p>
                            </div>
                            <div onClick={(e) => {ThrewToCart(paths[item].id); e.preventDefault()}} className={style.AddToCart} > 
                                    Add To Cart
                            </div>
                      </div>
                  </div>
                </Link>
            )
        } )
      :
      <img src={require("./../assets/images/no-data.png")} style={{width:'400px', marginTop:'1.2rem'}} />
      }
      </div>
    </div>
  </>
)

}


function Search() {
    const [path, setPath] = useState();
    const pathRef = useRef([]);

    let param = useParams().SearchName;
    param = param.trim();
    param = param.toLocaleLowerCase();

        useEffect(() => {
          pathRef.current = []; 
          let i = 0;
          const productsARRAY = [...products];

          (async() => {

            const promises = productsARRAY.map(async (item) => {

                let name = item.name.trim();
                name = item.name.toLocaleLowerCase();
                
                if(name.indexOf(param) === -1){
                }
                
                else {
                    const res1 = await item.productSrc;
                    const res2 = await item.ratingSrc();
    
                    return {
                      [item.id]:{
                      imgsrc:res1.default,
                      ratingSrc:res2.default,
                      name:item.name,
                      price:item.price,
                      rating:item.rating,
                      section:item.section,
                      id:item.id
                      }}
                }

            })


            const data = await Promise.all(promises);

            let filtered = {};

            data.forEach((item) => {

              if(item !== undefined){
                filtered = Object.assign(item, filtered) 
              }

            })
            
            setPath(filtered);

        })();

        }, [useParams().SearchName])


        return (
          <>
            {path && <Preparing paths={path} />}
          </>
        )
    
  }


export default Search