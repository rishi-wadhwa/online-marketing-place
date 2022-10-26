import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef, useContext } from 'react';
import style from '../../styles/search.module.css';
import { AuthContext } from './../../context/AuthContext';
import products from './../../products/products';
import * as local from './../../storage/storage';

function Preparing({paths}){
  let {CurrentUser} = useContext(AuthContext);
  let [Quantity, setQuantity] = useState(Quantities(paths));
  let totalAmount = useRef(0);
  
  function Quantities(path){
    const newObject = {};
    for(let i in path){
      newObject[path[i].id] = path[i].quantity;
    }
    return newObject;
  }
  
  function TotalAAmount() { 
    totalAmount.current = 0;
    for(let i in paths){ 
      let element = paths[i];
      Quantity[element.id] && (totalAmount.current += (Quantity[element.id] * parseFloat(element.price))); 
    }

    let stringAmount = String(totalAmount.current);
    let beforeDOT = (stringAmount.slice(0, stringAmount.indexOf('.')))
    
    let afterDOT = [];
    stringAmount = stringAmount.split('');
    stringAmount.forEach((element, index) => {
      if(element === "."){
        afterDOT = stringAmount.slice(index, index+3); 
      }
    })

    afterDOT = afterDOT.join('');
    if(stringAmount.indexOf('.') !== -1) {  
      return beforeDOT+afterDOT;
    }
    else{
      return stringAmount.join('');
    }
    
  }


return(
  <>
    <div className='parrent_container' style={{width: '100%', marginBottom: '1rem', justifyContent:'center'}}>
      <div className='parrent_container' style={{width: '75%', margin: '0', flexDirection:'column'}}>
        <p id={style.headerResults}>That's Your Cart</p>
          {Object.keys(paths).length !== 0 ? Object.keys(paths).map((item, index) => {
            
          return(
            Quantity[(paths[item].id)] &&
                <Link id="contlink" style={{textDecoration: 'none', color: 'inherit', margin:'1.5rem 0'}} to={`/products/${paths[item].id}`} key={("veri",paths[item].id)} >
                  
                  <div className='wide-card' style={{paddingRight:'1rem', boxSizing:'border-box'}} >

                    <div className='wide-card-picture-container' style={{margin:'0'}} >
                      <img className="wide-card-picture" src={paths[item].imgsrc} />
                    </div>

                <div className={style.cart_information} style={{display:'flex', flexDirection:'row', width:'100%'}}>
                    <div style={{display:'flex', flexDirection: 'column', justifyContent: 'space-between',width:'100%'}}>
                    
                    <div className={"NameText"} style={{marginLeft:'0px'}}>
                      <p style={{margin: '1rem 0 0 0' }} >{paths[item].name}</p>
                    </div>
                        
                        <div style={{marginBottom:'1rem'}}>
                            <div className='ratings_container' style={{width: '150px'}} >
                                <img className="ratings_stars" src={paths[item].ratingSrc} />
                                <p style={{fontSize: '1rem'}} >{paths[item].rating}</p>
                            </div>
                            <div className='product_price' >
                                <p style={{fontSize: '1.7rem', margin:'0'}} >$</p>
                                <p style={{fontSize: '1.9rem'}} >{paths[item].price}</p>
                            </div>
                        </div>
                    </div >


                      <div className={style.quantity_container} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}> 
                        
                          <div onClick={ (b) => {setQuantity(() => local.ChangeQuantity({id:paths[item].id, userName:CurrentUser.userName, count:1}) ); b.preventDefault();} }  className={style.circle}>
                            <svg style={{width:'1.1rem'}}  viewBox="0 0 448 512" ><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>  
                          </div>
              
                          <span style={{fontSize:'2rem'}} >{Quantity[(paths[item].id)]}</span>
                      
                          {
                            Quantity[paths[item].id] > 1 ?
                          <div onClick={ (b) => {setQuantity(() => local.ChangeQuantity({id:paths[item].id, userName:CurrentUser.userName, count:-1}) ); b.preventDefault();} } className={style.circle} >
                            <svg style={{width:'1.1rem'}} viewBox="0 0 448 512" >
                              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/>
                            </svg>  
                          </div>
                          : 
                          <div onClick={ (b) => {setQuantity(() => local.ChangeQuantity({id:paths[item].id, userName:CurrentUser.userName, count:-1}) ); b.preventDefault();} } className={style.circle} >
                            <svg style={{width:'1rem'}} viewBox="0 0 18 20">
                              <path d="M5.28125 0.691016C5.49219 0.2675 5.92578 0 6.39844 0H11.1016C11.5742 0 12.0078 0.2675 12.2187 0.691016L12.5 1.25H16.25C16.9414 1.25 17.5 1.80977 17.5 2.5C17.5 3.19023 16.9414 3.75 16.25 3.75H1.25C0.559766 3.75 0 3.19023 0 2.5C0 1.80977 0.559766 1.25 1.25 1.25H5L5.28125 0.691016ZM1.21484 5H16.25V17.5C16.25 18.8789 15.1289 20 13.75 20H3.71484C2.36914 20 1.21484 18.8789 1.21484 17.5V5ZM4.33984 8.125V16.875C4.33984 17.2188 4.65625 17.5 4.96484 17.5C5.34375 17.5 5.58984 17.2188 5.58984 16.875V8.125C5.58984 7.78125 5.34375 7.5 4.96484 7.5C4.65625 7.5 4.33984 7.78125 4.33984 8.125ZM8.08984 8.125V16.875C8.08984 17.2188 8.40625 17.5 8.71484 17.5C9.09375 17.5 9.375 17.2188 9.375 16.875V8.125C9.375 7.78125 9.09375 7.5 8.71484 7.5C8.40625 7.5 8.08984 7.78125 8.08984 8.125ZM11.875 8.125V16.875C11.875 17.2188 12.1562 17.5 12.5 17.5C12.8438 17.5 13.125 17.2188 13.125 16.875V8.125C13.125 7.78125 12.8438 7.5 12.5 7.5C12.1562 7.5 11.875 7.78125 11.875 8.125Z"/>   
                            </svg>
                          </div>
                          }
                    
                      </div>

                </div>

                  </div>

                </Link>
          
            )
        } )
      :
        <img src={require("./../../assets/images/empty-cart.png")} style={{width:'400px', marginTop:'1.2rem'}} /> 
      }
      <p id={style.headerResults}>Total Amount: {
        "$"+TotalAAmount()
      }
      </p>

      </div>
    </div>
  </> 
)

}





function Cart() {
  let {CurrentUser} = useContext(AuthContext);

  const navigate = useNavigate();
  const [paths, setPaths] = useState();
  
  useEffect(() => {

    (async () => {

        let Cart = local.GetCarts(CurrentUser.userName);

        const CartProducts = [];

        for(let property in Cart){

          let value = Cart[property];

          for(let item of products){

            if(item.id == property){

              const res1 = await item.productSrc;
              const res2 = await item.ratingSrc();

              CartProducts.push(
                {
                imgsrc:res1.default,
                ratingSrc:res2.default,
                name:item.name,
                price:item.price,
                rating:item.rating,
                section:item.section,
                quantity:value,
                id:item.id
                }
                );
                
            }
          }
        }

        setPaths(CartProducts);

    })();

  }, [])
  

        return (
          <>
            {
              !CurrentUser ? 
              <div style={{minHeight:'700px'}}>
                <div id={"alert_container"} style={{display:'flex', minHeight:'700px',  paddingBottom:'5rem', boxSizing:'border-box', flexDirection:'column', overflow:'auto', justifyContent:'center', alignItems: 'center'}}>  
                  <img src={require("./../../assets/images/verify.png")} style={{width:'375px', marginBottom:'1rem'}} />
                  <div>You have to register an account for have a cart!</div>
                  <div>
                    <Link to="/login" style={{fontWeight:'700', fontSize:'1.1rem', marginRight:'1rem', color:'#4DC4CA'}}>Login</Link>
                    <Link to="/register" style={{fontWeight:'700', fontSize:'1.1rem', color:'#4DC4CA'}}>Create New Account</Link>
                  </div>
                </div>
              </div>
              : paths && <Preparing paths={paths} />
            }
          </>
        )
        
    
  }



export default Cart