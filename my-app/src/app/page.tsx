"use client"
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import Airdrop from './components/Airdrop';

const Home = () => {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/Gpsc8QLO8Ezuu5ZOVoLOVZCdYTIeF46P"}>
          <WalletProvider wallets={[]} autoConnect>
              <WalletModalProvider>
                  
                  { /* Your app's components go here, nested within the context providers. */ }
                    {/* <Calendar /> */}

                    <Airdrop />
                    <div className='mt-2'>
                      <WalletMultiButton />
                    </div>
                    <div className='mt-2'>
                      <WalletDisconnectButton />
                    </div>
              </WalletModalProvider>
          </WalletProvider>
      </ConnectionProvider>
    </div>
);
};

export default Home