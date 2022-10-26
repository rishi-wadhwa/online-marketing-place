import React from 'react';
import { useEffect, useContext, useRef, useState } from 'react';
import '../../styles/sign.css';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './../../context/AuthContext';
import Alert from './../../utils/Alert';
import * as local from '../../storage/storage';

function Register() {
    const [alert, setAlert] = useState();
    const {CurrentUser, dispatch} = useContext(AuthContext);
    const username = useRef(null);
    const password = useRef(null);
    const passwordConfirm = useRef(null);
    const navigate = useNavigate();
    
  
    useEffect(() => {
      if(CurrentUser){
        navigate("/404NotFound");
    }
    })


    function RegisterSetToStorage(e){
      let inputUserName = username.current;
      let inputPassword = password.current.trim();
      let inputPasswordConfirm = passwordConfirm.current.trim();

      function charsCheck(input){
        const chars = [' '];
        for(let i of chars){
          if (input.includes(i)){
            return true;
          }
        } 
      }

      if(charsCheck(inputUserName)){
        setAlert({type:"Danger", text:"You can't use special chars in your username! (space !{[]}½$# etc...)"});
      }
      else if(local.SearchUserName(inputUserName)){
        setAlert({type:"Danger", text:"This username is already in use!"});
      }
      else if(inputUserName.length < 6){
        setAlert({type:"Danger", text:"Username must be minimum 6 characters in length!"});
      }
      else if(inputPassword.length < 7){
        setAlert({type:"Danger", text:"Passwords must be minimum 7 characters in length!"});
      }
      else if(inputPassword !== inputPasswordConfirm){
        setAlert({type:"Danger", text:"Passwords do not match!"});
      }
      else {
          setAlert({type:"Success", text:"Your new account is created!"});
          setTimeout(() => {
            dispatch(  {type:"SET_USERS", payload:{userName:inputUserName, pass:inputPassword}}  );
            navigate('/');
          }, 1000)
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
          <h1 className={"auth_header register"}>Create New Account</h1>
          <form onSubmit={(e) => RegisterSetToStorage(e)} name="register" style={{width: '80%', display:'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center'}}>
            <label htmlFor="register_username" style={{borderRadius:'40px', marginBottom: '10px'}}>
              <div className={"auth_input_container"}>
                <svg className={"user_vector_svg"}>
                  <path className={"user_vector_path"} d="M256 288c79.53 0 144-64.47 144-144s-64.47-144-144-144c-79.52 0-144 64.47-144 144S176.5 288 256 288zM351.1 320H160c-88.36 0-160 71.63-160 160c0 17.67 14.33 32 31.1 32H480c17.67 0 31.1-14.33 31.1-32C512 391.6 440.4 320 351.1 320z"/> 
                </svg>
                <input type="text" id={"register_username"} onChange={(e) => username.current = e.target.value} className={"auth_input"} placeholder={"username"} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "username"} />
              </div>
            </label>
            <label htmlFor="register_password" style={{borderRadius:'40px', marginBottom: '15px'}}>
              <div className={"auth_input_container"}>
                <svg className={"user_vector_svg"}>
                  <path className={"user_vector_path"} d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/> 
                </svg>
                <input type="password" id={"register_password"} className={"auth_input"} onChange={(e) => password.current = e.target.value} placeholder={"password"} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "password"} />
              </div>
            </label>
            <label htmlFor="confirm_password" style={{borderRadius:'40px', marginBottom: '15px'}}>
              <div className={"auth_input_container"}>
                <svg className={"user_vector_svg"}>
                  <path className={"user_vector_path"} d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"/> 
                </svg>
                <input type="password" id={"confirm_password"} className={"auth_input"} onChange={(e) => passwordConfirm.current = e.target.value} placeholder={"confirm password"} onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "confirm password"} />
              </div>
            </label>
              <button name="register" className={"auth_button register"}>Register</button>
          </form>
        </div>
      {alert && <Alert text={alert.text} type={alert.type} /> }
      </div>
    </div>
  )
}

export default Register