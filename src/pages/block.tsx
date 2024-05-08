import type { NextPage } from "next";
import Head from "next/head";
import { BlockWalletView } from "../views";

const BlockWallet: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Solana Scaffold</title>
        <meta
          name="description"
          content="Solana Scaffold"
        />
      </Head>
      <BlockWalletView />
    </div>
  );
};

export default BlockWallet;