
export const calcSol = (result:string, stake:string)=>{
    let won = 0;
    if(result =="0.16 SOL"){
        won = 0.16
        return won
    }
    else if(result == "3x SOL"){
        won = Number(stake) * 3
        return won
    }
   
}