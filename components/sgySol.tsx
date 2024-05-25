import React, {useState, useEffect} from "react"
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import { fixToTwoDecimal, lamportsToSol } from "../utils/solUtils";


const SgySol = ()=>{
    const [balance, setBalance] = useState<number>(0)

    const { connection } = useConnection();
    const { publicKey } = useWallet();

    useEffect(() => {
        if (publicKey) {
          connection.getBalance(publicKey).then((lamports) => {
            setBalance(lamports); // Convert lamports to SOL
          }).catch((error) => {
            console.error('Failed to fetch balance:', error);
          });
        }
    }, [publicKey, connection]);
    return(
        <div className='md:px-4 md:py-2 py-0 px-1 flex rounded-md bg-[#8E8E8E] md:gap-x-4 gap-x-1 items-center text-[FFFFE3] text-sm text-semibold shadow-md shadow-[#560082] border-2 border-[#560082]'>
                <div className="md:text-md text-xs">0.00 SGY</div> |
                <div>
                    {
                        publicKey ? `${fixToTwoDecimal(lamportsToSol(balance))} SOL` : <p className='text-xs font-light'>Not Connetced</p>
                    }
                </div>
        </div>
    )
}

export default SgySol