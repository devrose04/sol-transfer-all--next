// Next, React
import { FC } from 'react';
import { BlockWallet } from 'components/BlockWallet';

export const BlockWalletView: FC = ({ }) => {

  return (

    <div className="md:hero mx-auto p-4">
      <div className="md:hero-content flex flex-col">
        <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-[#9945FF] to-[#14F195]">
          Block Wallet
        </h1>      
        <div className="text-center">
          <BlockWallet />
        </div>
      </div>
    </div>
  );
};
