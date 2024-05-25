import {useState, useEffect} from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { getSpin } from '../lib/api/userService'
// import { useWallet } from '@solana/wallet-adapter-react'
// import { getSpin } from '@/lib/api/userService'


interface ClaimProps{
    handleClose: any,
}

const ClaimModal: React.FC  <ClaimProps> = ({handleClose}) =>{

    const {publicKey} = useWallet()

    const [recents, setRecents] = useState<any[]>([])

    useEffect(()=>{
        getUserSpin()
    },[recents])

    const getUserSpin = async()=>{
        try {
           const res = await getSpin(publicKey)
           const data = await res.spin
            const filter = data.filter((item:any)=>item.result!=="Crashed") 
           setRecents(filter)
        } catch (error) {
          console.log(error)  
        }
    }

    return(
        <div className="absolute top-10 right-0 left-0 w-full h-full flex  justify-center z-50">
            <div className="relative w-[350px] h-[460px] bg-[#10100E] overflow-y-auto border-[1.3px] border-[#30302B] rounded-md">
                <div className="bg-[#30302B] px-5 py-3 flex items-center justify-center gap-x-2">
                    <img src="/champion.png" alt="" />
                    <p className="text-sm text-[#FFFFE3]">Your Prize</p>
                </div>
                <div className="">
                    {recents.length>0 ?
                    recents.map((item,i)=>(
                    <div key={i} className="flex w-full items-center justify-between px-4 py-2">
                        <p className="text-[#FFFFE3] text-md">{item.result}</p>
                        <button className="px-5 py-2 rounded-md border-[1.3px] border-[#8E8E8E] grid place-content-center text-[#FFFFE3] text-sm">
                            Claim
                        </button>
                    </div>
                    ))
                    :
                    <div className='flex w-full justify-center item-center'>
                       <p>No Spin</p>
                    </div>
                    }
                   
                </div>
                <button className="absolute bg-[#10100E] right-0 top-0 px-4 py-2 rounded-lg border-[1.3px] border-[#FFFFE3] text-[#FFFFE3] grid place-content-center" onClick={handleClose}>X</button>
            </div>
            
        </div> 
    )
}

export default ClaimModal