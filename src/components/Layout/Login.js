import React from 'react';
import { useEffect, useContext, useState, useRef } from 'react';
import '../../styles/sign.css';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import Alert from './../../utils/Alert';
import * as local from '../../storage/storage';

function Login() {
  const [alert, setAlert] = useState();
  const Username = useRef(null);
  const Password = useRef(null);
  const Rememberme = useRef(false);
  const {CurrentUser, dispatch} = useContext(AuthContext);
  
  const navigate = useNavigate();
  
  
  useEffect(() => {
    if(CurrentUser){
      navigate("/404NotFound");
  }
  })


  function LoginToStorage(e){

    
    if(local.UsersCheck({userName:Username.current, pass:Password.current})){
      setAlert({type:"Success", text:"You have logged!"});
      setTimeout(() => {
        dispatch(  {type:"LOGIN_USERS", payload:{userName:Username.current, pass:Password.current, Active:Rememberme.current}}  );
        navigate('/');
      }, 1000)
    }
    else{
      setAlert({type:"Danger", text:"The username or password is incorrect!"});
    }

    e.preventDefault();
  }
  
  useEffect(() => {
    document.getElementById('page_container').scrollIntoView();
  }, [])

  return (
    <div id={"page_container"} style={{width: '100%', display:'flex', justifyContent:'center',alignItems:'center', height:'700px'}}>
        <div className={"auth_container"}>
          <div className={"inputs_container"}>
          <h1 className={"auth_header"}>Member Login</h1>
          <form onSubmit={(e) => LoginToStorage(e)} style={{width: '80%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}  >
            <label htmlFor="login_username" style={{borderRadius:'40px', marginBottom: '10px'}}>
              <div className={"auth_input_container"}>
                <svg className={"user_vector_svg"}>
                  <path className={"user_vector_path"} d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/> 
                </svg>
                <input type="text" id={"login_username"} onChange={e => Username.current = e.target.value} className={"auth_input"} placeholder={"username"} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "username"} />
              </div>
            </label>

            <label htmlFor="login_password" style={{borderRadius:'40px', marginBottom: '15px'}}>
              <div className={"auth_input_container"}>
                <svg className={"user_vector_svg"}>
                  <path className={"user_vector_path"} d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/> 
                </svg>
                <input type="password" onChange={e => Password.current = e.target.value} id={"login_password"} className={"auth_input"} placeholder={"password"} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "password"} />
              </div>
            </label>
              <button className={"auth_button"}>Login</button>
              <div style={{margin: '10px 0px'}}>
                <input id="remember_me" onChange={() => Rememberme.current = !Rememberme.current} type={"checkbox"} />
                <label htmlFor='remember_me' style={{fontSize: '18px', fontWeight: '700', color:'#9C9C9C', userSelect: 'none'}}>Remember Me</label>
              </div>
              <span style={{height: '2px', margin:'20px 0 5px' , width:'90%', backgroundColor:'#9C9C9C'}}></span>
              <Link to="/register" style={{fontWeight:'700', fontSize:'1.3rem', color:'#4DC4CA'}}>Create New Account</Link>
          </form>
        </div>
      {alert && <Alert text={alert.text} type={alert.type} /> }
      </div>
    </div>
  )
}

export default Login