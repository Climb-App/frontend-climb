function setToken(Token){
    sessionStorage.setItem('authToken',Token)
}

function getToken(){
    return sessionStorage.getItem('authToken')
}

function deleteToken(){
    sessionStorage.removeItem('authToken')
}
export {setToken,getToken,deleteToken}