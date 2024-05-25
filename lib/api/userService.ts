
import axiosInstance from "./axiosInstance";


export const registerUser = async(address: any) =>{
    const response = await axiosInstance.post('/users',{address})
    return  response.data;
}


export const registerSpin = async(address:any, result:any, stake:any)=>{
    const res = await axiosInstance.post('/users/spin', {address,result,stake},{timeout:2000})
    return res.data;
}

export const getSpin = async(address:any)=>{
    const res = await axiosInstance.post('/users/recents',{address}, {timeout:3000})
    return res.data
}

export const registerChallanger = async(address:any, stake:any)=>{
    const res = await axiosInstance.post('/users/challange',{address, stake}, {timeout:2000})
    return res.data
}


export const getUserReward = async(address:any)=>{

}

export const getTime = async()=>{
    const response = await axiosInstance.get('/countdown',{timeout:3000})
    return response.data.targetEndTime
}