import React from 'react';
import style from '../../styles/Footer.module.css';
import logo from '../../assets/images/e-commerce-logo.png';
import {Link} from 'react-router-dom';
import {useState, useEffect} from 'react';


function GetScreenSize(){
  const {innerWidth} = window;
  return innerWidth;
}


function Footer() {
  
  const [innerWidth, setInnerWidth] = useState(GetScreenSize());

  useEffect(() => {

    function screensize(){
      setInnerWidth(GetScreenSize);
    }

    window.addEventListener('resize', screensize);
    
    return () => {
      window.removeEventListener('resize', screensize);
    }

  }, [])


  if(innerWidth > 1000){

    return (
    
      <footer className={style.footer}>
          <div className={style.footer_top}>
  
              <ul>
                <div>Amazon Science</div>
                <li><Link to="/" className={`link ${style.footer_link}`}>Careers</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Blog</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>About Amazon</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Investor Relations</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Amazon Devices</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Amazon Science</Link></li>
              </ul>
              <ul>
                <div>Make Money with Us</div>
                <li><Link to="/" className={`link ${style.footer_link}`}>Sell products on Amazon</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Sell on Amazon Business </Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Sell apps on Amazon</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Become an Affiliate</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Advertise Your Products</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Self-Publish with Us</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Host an Amazon Hub</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>See More Make Money with Us</Link></li>
              </ul>
              <ul>
                <div>Amazon Payment Products</div>
                <li><Link to="/" className={`link ${style.footer_link}`}>Amazon Business Card</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Shop with Points</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Reload Your Balance</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Amazon Currency Converter</Link></li>
              </ul>
              <ul>
                <div>Let Us Help You</div>
                <li><Link to="/" className={`link ${style.footer_link}`}>Amazon and COVID-19</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Your Account</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Your Orders</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Shipping Rates & Policies</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Returns & Replacements</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Manage Your Content and Devices</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Amazon Assistant</Link></li>
                <li><Link to="/" className={`link ${style.footer_link}`}>Help</Link></li>
              </ul>
  
          </div>
  
          <div className={style.footer_bottom}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
  
      </footer>
    )


  }
  else{
    return (
      <footer className={style.footer} >
        <div className={style.footer_top} style={{flexDirection:'column'}}>
          <div>Amazon Science</div>
          <div>Make Money with Us</div>
          <div>Amazon Payment Products</div>
          <div>Let Us Help You</div>
        </div>
        <div className={style.footer_bottom}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
      </footer>
    )

  }

}

export default Footer;