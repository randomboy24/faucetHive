import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { PublicKey } from '@solana/web3.js';
import React, { useState } from 'react';

type Props = {};

const Airdrop = (props: Props) => {
    const [amount, setAmount] = useState<number>(0);
    const { publicKey, connected } = useWallet();
    const { connection } = useConnection();

    const sendAirdrop = async () => {
        console.log("button got clicked")
        if (!connected || !publicKey) {
            console.error("Wallet not connected or public key not available");
            return;
        }
        
        if (amount <= 0) {
            console.error("Invalid amount. Must be greater than 0.");
            return;
        }

        try {
            // Requesting the airdrop
            const res = await connection.requestAirdrop(publicKey as PublicKey, amount * 1e9); // Sol to lamports conversion
            await connection.confirmTransaction(res); // Confirm the transaction
            console.log("Airdrop successful:", res);
        } catch (error) {
            console.error("Error requesting airdrop:", error);
        }
    };

    return (
        <div>
            <input 
                type="number" 
                placeholder='Amount' 
                className='border-2 pl-1 border-black rounded-md' 
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                value={amount}
            />
            <button 
                className='bg-gray-400 w-32 ml-4 rounded-md h-7 hover:scale-105' 
                onClick={sendAirdrop}
            >
                Send Airdrop
            </button>
        </div>
    );
};

export default Airdrop;
 