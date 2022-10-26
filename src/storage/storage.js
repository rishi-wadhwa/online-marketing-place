function GetAllUsers(){
    const users = JSON.parse(localStorage.getItem('users'))
    if(users){
        return users;
    }
    else{
        return false;
    }
}

function SetUsers(data){
    let users = GetAllUsers();
    data.Active = true;
    data.Cart = {};

    if(users){
        users.map((element) => {
            element.Active = false;
        });
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
        return users;
    }
    else{
        data = [data];
        localStorage.setItem('users', JSON.stringify(data));
        return data;
    }
}



function UsersLogin(data) {
    let users = GetAllUsers().map(element => {
        if(element.userName === data.userName && element.pass === data.pass){
            if(data.Active === true){
                element.Active = true;
            }
            else {
                sessionStorage.setItem('user', JSON.stringify({userName:data.userName, pass:data.pass}));
            }
        }
        return element;
    });
    localStorage.setItem('users', JSON.stringify(users));
    return users;
}



function UsersCheck(data){
    const getUsers = GetAllUsers();
    
    if(getUsers) {
        for(let i of getUsers) {
            if(i.userName === data.userName && i.pass === data.pass) {
                return true;
            }
        }
    }

}



function SearchUserName(username){
    const getUsers = GetAllUsers();
    if(getUsers){
        for(let i of getUsers){
            if(i.userName === username) {
                return true;    
            }
        }

    }
}



function ChangeQuantity(data){

    let users = GetAllUsers();
    
    let cart = {}

    users = users.map((element) => {
        if(data.userName === element.userName){
            let mount = element.Cart[data.id];
            if(((mount) += data.count) > 0) {
                element.Cart[data.id] += data.count;
                cart = element.Cart;
            }
            else{
                delete element.Cart[data.id];
                cart = element.Cart;
            }
        }
        return element;
    });
    localStorage.setItem('users', JSON.stringify(users));  
    return cart;
}



function GetCarts(user){
    let allUsers = GetAllUsers();

    allUsers = allUsers.map(element => {
        if(element.userName === user){
            return element.Cart;
        }
    })

    return allUsers[0];

}


function AddToCart(data){
    const users = GetAllUsers();
    
    for(let i of users){
        if(data.userName === i.userName){
            if(i.Cart[data.productID]){
                i.Cart[data.productID] += data.quantity;
            }
            else{
                i.Cart[data.productID] = data.quantity;
            }
        }
        
    }

    localStorage.setItem('users', JSON.stringify(users));
    return users;
}

function logOut(){
    let users = GetAllUsers();
    
    users = users.map((element) => {
        element.Active = false;
        return element;
    });

    sessionStorage.clear();
    localStorage.setItem('users', JSON.stringify(users));
    window.location.reload();
}


function ActiveUser(users){
    let found = users.find((element) => 
        element.Active === true
    );
    found = found || false;
    return found;
}

export {SetUsers, GetAllUsers, ActiveUser, SearchUserName, UsersLogin, UsersCheck, AddToCart , GetCarts, ChangeQuantity, logOut}