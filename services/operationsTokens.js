import axios from 'axios'
import router from 'next/router'

const TOKEN_KEY = 'CLIMB_TOKEN'

function setToken(Token){
    localStorage.setItem(TOKEN_KEY,Token)
}

function getToken(){
    return localStorage.getItem(TOKEN_KEY)
}

function deleteToken(){
    localStorage.removeItem(TOKEN_KEY)
}

function initAxiosInterceptor(){
    axios.interceptors.request.use(function (config){
        const token = getToken()

        if (token){
            config.headers.Authorization = `bearer ${token}`
        }

        return config
    })

    axios.interceptors.response.use(
        function (response){
            return response
        },
        function(error){
            if (error.response.status === 401){
                deleteToken()
                router.push('/login/')
            }else{
                return Promise.reject(error)
            }
        }
    )
}


export {setToken,getToken,deleteToken, initAxiosInterceptor}