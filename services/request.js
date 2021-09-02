import axios from 'axios'
import BASE_URL from '../services/api'

async function readWorkspace (){
    const response = await axios.get('https://api.climbapp.tech/api/v1/workspaces/')
    return response
}

export {
    readWorkspace,
}