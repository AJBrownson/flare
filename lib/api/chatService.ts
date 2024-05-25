
import axiosInstance from "./axiosInstance";

export const getChat =async()=>{
    const response = await axiosInstance.get('/chat')
    return response.data
}


export const sendChat = async(message:string, address:any)=>{
    const response = await axiosInstance.post('/chat/send', {message, address}, {timeout:2000})
    return response.data
}