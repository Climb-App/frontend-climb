const TOKEN_KEY = 'CLIMB_TOKEN'

function setToken(Token){
    localStorage.setItem(TOKEN_KEY,Token)
}

function getToken(){
    if (localStorage.getItem(TOKEN_KEY)){
        return localStorage.getItem(TOKEN_KEY)
    }else{
        return null
    }
}

function deleteToken(){
    localStorage.removeItem(TOKEN_KEY)
}

export { setToken, getToken, deleteToken }