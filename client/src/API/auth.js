import { clientInstance, serverInstance } from "."

export const registerUserAPI = ({data})=>{
    return serverInstance.post('/auth/createUser', data).then(res=>res.data);
}

export const loginUserAPI = ({data})=> clientInstance.post('/login', data).then(res=>res.data);

export const getUserAPI = ({})=>{
    return serverInstance.get('/auth/getUser');
}

export const logoutUserAPI = ()=>clientInstance.post('/logout').then(res=>res.data);