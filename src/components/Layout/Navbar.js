import React from 'react'
import style from '../../styles/Navbar.module.css';
import {Link, useNavigate} from 'react-router-dom';
import logo from '../../assets/images/e-commerce-logo.png';
import {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext.js'
import DropDown from './../DropDown';
import {logOut} from '../../storage/storage';

function Navbar() {

  const [SearchInput, setSearchInput] = useState('');

  const {CurrentUser} = useContext(AuthContext);


  const navigate = useNavigate();
  
  const HandleAndSend = (e) => {
      e.preventDefault();
      let data = SearchInput.trim();
      (data !== "" && navigate(`/search/${data}`));
    }

    
  return (
    <nav id={style.navbar}>
      <Link to="/">
        <div id={style.logo}>
          <img src={logo} alt="logo"/>
        </div>
      </Link>
        <div className={style.search_container}>
          <form onSubmit={(e) => HandleAndSend(e)}>
            <input type="text" value={SearchInput} onChange={(e) => setSearchInput(e.target.value)} />  
            <div>
              <button style={{cursor: 'pointer'}}>SEARCH</button>
            </div>
          </form>
        </div>

        <div id={style.navs}>
          
        {
        CurrentUser === false ? <div className={style.signin} >
          <div style={{height:'100%'}}>
            <div style={{height:'100%', display: 'flex', alignItems: 'center'}}><div style={{display: 'flex', flexDirection: 'column'}}><span style={{fontSize: '0.9rem'}} id={style.newAccountSignIN}>Sign in &</span><span id={style.newAccount} style={{fontWeight: 'bolder', fontSize: '1.1rem'}}>New Account</span></div></div>    
              <DropDown  payload={ [{name:"Login", href:"/login", id:1}, {name:"New Account", href:"/register", id:2}] }  /> 
          </div>
          </div>
            :
        <div className={style.signin} > 
          <div style={{height:'100%'}}>
            <div style={{height:'100%', display: 'flex', alignItems: 'center'}}><div style={{display: 'flex', flexDirection: 'column'}}><span style={{fontWeight: 'bolder', fontSize: '1.1rem'}}>{CurrentUser.userName}</span></div></div>  
            <DropDown payload={ [{name:"Log Out", function:logOut, id:1}] }  /> 
          </div>
        </div>
        }

          <Link to="/cart" className={"link " .concat(style.hover_button)}>
            <div>
            <svg id={style.cart_logo_svg}>
                <g id={style.cart_logo_g}>
                  <metadata id="CorelCorpID_0Corel-Layer"/>
                  <g>
                  <g>
                    <g>
                    <path d="M517.6 1498.05c-88.99,0 -161.39,-72.4 -161.39,-161.38 0,-89 72.4,-161.4 161.39,-161.4 88.98,0 161.38,72.4 161.38,161.4 0,88.98 -72.4,161.38 -161.38,161.38zm0 -220.38l0 0c-32.53,0 -58.99,26.47 -58.99,59 0,32.53 26.46,58.98 58.99,58.98 32.52,0 58.98,-26.46 58.98,-58.98 0,-32.53 -26.47,-59 -58.98,-59z"/>
                    </g>
                    <g>
                    <path d="M1217.46 1498.05c-88.99,0 -161.39,-72.4 -161.39,-161.38 0,-89 72.4,-161.4 161.39,-161.4 88.98,0 161.38,72.4 161.38,161.4 0,88.98 -72.4,161.38 -161.38,161.38zm0 -220.38l0 0c-32.53,0 -58.99,26.47 -58.99,59 0,32.53 26.47,58.98 58.99,58.98 32.52,0 58.98,-26.46 58.98,-58.98 0,-32.53 -26.46,-59 -58.98,-59z"/>
                    </g>
                  </g>
                  <g>
                    <g>
                    <path d="M1678 357.46c-64.43,-2.72 -128.86,-5.34 -193.36,-6.98 -65.34,-1.89 -130.77,-2.33 -196.19,-3.09l-98.21 0.27 -98.31 1.68c-65.58,1.87 -131.18,3.95 -196.98,9.18 64.56,13.75 129.33,24.35 194.12,34.73l97.25 14.46 97.34 13.05c64.95,7.76 129.89,15.84 194.92,22.47 43.18,4.55 86.4,8.6 129.62,12.53 -11.28,32.74 -24.21,64.85 -38.91,96.1 -137.86,1.24 -275.72,4.8 -413.58,11.38 -174.75,8.76 -349.49,21.02 -524.23,44.73 174.75,23.71 349.49,35.97 524.23,44.73 117.23,5.6 234.47,9 351.7,10.69 -4.87,7.57 -9.7,15.16 -14.78,22.58 -33.94,48.31 -72.47,93.06 -114.48,134 -79.6,1.93 -159.2,4.91 -238.8,9.41 -147.74,8.76 -295.47,21.02 -443.21,44.73 147.74,23.71 295.47,35.97 443.21,44.73 37.16,2.1 74.32,3.65 111.48,5.17 -80.6,53.33 -169.07,93.69 -261.54,118.06l-38.02 8.18c-12.66,2.78 -25.4,5.85 -37.44,6.96 -24.43,3.92 -48.58,5.38 -72.38,5.63 -47.5,-0.13 -92.87,-9.13 -131.96,-27.62 -39.16,-18.39 -72.01,-46.03 -97.14,-81.19 -25.13,-35.14 -42.61,-77.65 -52.82,-123.72l-3.99 -17.23 -2.38 -17.94c-1.57,-12.12 -3.47,-23.05 -4.65,-37.87l-8.02 -83.62 -16.27 -167.17c-2.46,-28.04 -6.59,-55.23 -7.47,-84.07 -2.26,-31.53 -6.56,-63.87 -13.31,-95.76 -13.67,-63.82 -36.61,-128.12 -77.14,-187.79 -20.17,-29.72 -45.74,-57.98 -76.9,-81.98 -70.56,-54.36 -143.44,-64.62 -215.83,-52 -108.13,18.85 -166.06,138.26 -114.56,235.19l78.95 -41.91c37.63,-19.97 72.64,-25.83 101.02,-18.96 28.5,6.32 57.23,27.22 80.91,61.09 23.54,33.66 40.82,77.26 51.03,123.6 5.16,23.32 8.63,47.05 10.65,71.84 1.06,27.66 5.57,56.41 8.32,84.6l19.67 169.83 9.95 84.88c1.31,13.33 4.14,30.26 6.62,46.09l3.88 23.96 5.9 23.96c15.48,63.66 42.5,127.51 85.05,182.97 42.06,55.54 99.87,101.07 164.02,128.43 64.14,27.78 132.82,38.03 198.08,36.29 32.62,-1.24 64.91,-4.18 96.07,-10.45 16.05,-2.36 30.67,-6.39 45.48,-10.2l44.4 -11.47c117.04,-35.55 226.62,-92.6 322.87,-165.91 95.52,-74.41 176.91,-165.46 241.13,-266.63 63.08,-101.98 108.9,-214 134.86,-330.22l0.51 -2.26c0.92,-4.26 1.31,-8.72 1.11,-13.32 -1.2,-26.92 -24.59,-47.64 -51.51,-48.79z"/>
                    </g>
                  </g>
                  </g>
                </g>
            </svg>
              <span id={style.Cart} style={{fontWeight: 'bolder', fontSize: '1.1rem'}}>Cart</span>
            </div>
          </Link>

        </div>

    </nav>
  )
}


function getWindowSize() {
  const {innerWidth, innerHeight} = window;
  return {innerWidth, innerHeight};
}


export default Navbar