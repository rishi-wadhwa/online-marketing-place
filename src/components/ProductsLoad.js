import React from 'react'
import products from '../products/products'
import { useParams, Link, useNavigate } from 'react-router-dom'
import {useRef, useState, useContext, useEffect} from 'react'
import style from '../styles/ProductsLoad.module.css'
import useProductSection from '../products/productSection'
import generalProductPicture from '@assets/images/generalProductPicture.png';
import { AuthContext } from './../context/AuthContext';
import {AddToCart} from './../storage/storage.js';

function Preparing({paths, param}){
    const StateSection = useRef('');
    const {CurrentUser} = useContext(AuthContext);
    const navigate = useNavigate();

    function ThrewToCart(){
        AddToCart({productID:param.id, userName:CurrentUser.userName, quantity:1});
        navigate("/cart");
    }

return (
<>
<div className='parrent_container' >
    {products.map((item) => {
        if(item.id == param.id){
            StateSection.current = item.section;
            return(
        <div key={item.id} className='parrent_container' style={{width: '75%', margin: '4rem 0px 0px', flexDirection: 'column'}}>
            <div className={'parrent_container '.concat(style.product_container)}  >
                <div className={style.picture_container}>
                    <img src={paths[item.id] && paths[item.id].imgsrc} className={style.picture} />
                </div>
                <div className={style.product_content} >
                    <div>
                        <p>{item.name}</p>
                    </div>
                    <div className={style.price_container}>
                        <div className={style.price_and_ratings}>
                            <div className='ratings_container' style={{width: '200px'}}>
                                <img className="ratings_stars" src={paths[item.id] && paths[item.id].retingSrc} />
                                <p style={{fontSize: '1.2rem'}}>{item.rating}</p>
                            </div>
                            <div className='product_price'>
                                <p style={{fontSize: '2.2rem'}}>$</p>
                                <p style={{fontSize: '2.2rem'}}>{item.price}</p>
                            </div>
                                <div onClick={() => ThrewToCart()} className={style.AddToCart}>
                                    Add To Cart
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{width: '100%', height:'1px' , margin: '4rem 0', backgroundColor: 'rgba(156, 156, 156, 1)'}}/>
        </div>
            )
        }
    })}
</div>


<div className='parrent_container' style={{justifyContent:'center', marginBottom:'2.8rem'}}>
    <div className='parrent_container' style={{width: '75%', margin: '0'}}>
        <div className={'parrent_container '.concat(style.all_carts)} style={{width: '100%', margin: '0'}}>
        {useProductSection(StateSection).map((item) => 
            <Link key={(item.id)} className={"card advicesCard"} style={{textDecoration: 'none', color: 'inherit'}} to={`/products/${item.id}`}>
                    <div className="product_picture_container">
                    <img className="product_picture" src={paths[item.id] && paths[item.id].imgsrc} />
                    </div>
                    <p>
                    {item.name}
                    </p>
                    <div className='ratings_container'>
                    <div style={{width: '80px'}}>
                        <img className="ratings_stars" src={paths[item.id] && paths[item.id].retingSrc} />  
                    </div>
                    <p>{item.rating}</p>
                    </div>
                    <div className='product_price'  style={{}}>
                    <p>$</p>
                    <p>{item.price}</p>
                    </div>
            </Link>
        )}
        </div>
    </div>
</div>



<div className={'parrent_container '} style={{justifyContent:'center', marginBottom:'2.8rem'}}>
    <div className={'parrent_container '.concat(style.cart_information_container)} style={{width:'75%', flexDirection:'row', marginBottom:'2.8rem'}}>

        <div><img className={'general_Product_Picture '.concat(style.general_picture)} src={generalProductPicture}></img></div>
        <div><p style={{margin:'0px 0px 0px 16px', fontSize:'1.1rem'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt consectetur tempora magni, ex, blanditiis rem explicabo esse voluptas delectus cumque repellat ratione nemo, quos tempore doloribus aliquid impedit perspiciatis omnis odio reprehenderit iste iure exercitationem voluptatum. Itaque vitae adipisci et ex quisquam inventore eos. amet consectetur adipisicing elit. Saepe deserunt consectetur tempora magni, ex, blanditiis rem explicabo esse voluptas delectus cumque repellat ratione nemo, quos tempore doloribus aliquid impedit perspiciatis omnis odio reprehenderit iste iure exercitationem voluptatum. Itaque vitae adipisci et ex quisquam inventore eos.</p></div>

    </div>
</div>

</>
)
}



function ProductsLoad() {
    window.scrollTo({top:0, left:0})

    const param = useParams();

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
                retingSrc:res2
                }
            })
            )

          })
        });
      })
    }, [])

return (
<>
    {path && <Preparing paths={path} param={param} />}
</>
)
}


export default ProductsLoad