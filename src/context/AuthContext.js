import { useState, createContext } from "react";
import { useEffect, useRef, useReducer } from "react";
import * as local from '../storage/storage';

export const AuthContext = createContext();


function processing(users, data){
    switch (data.type){
        case "SET_USERS": {
            return local.SetUsers(data.payload);
        }
        case "LOGIN_USERS": {
            return local.UsersLogin(data.payload);
        }
    }
}

function Authorization({children}){
    const [users, dispatch] = useReducer(processing , ((JSON.parse(localStorage.getItem('users'))) || []));
    const [CurrentUser, SetCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')) || (local.ActiveUser(users) || false));  

    useEffect(() => {

        SetCurrentUser(JSON.parse(sessionStorage.getItem('user')) || local.ActiveUser(users));

    }, [users])

    return(
        <>
            <AuthContext.Provider value={{users, CurrentUser, dispatch}}>{children}</AuthContext.Provider>
        </>
    )

}
export default Authorization;