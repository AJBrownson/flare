import {
  Keypair,
  Transaction,
  SystemProgram,
  PublicKey,
  Connection,
  sendAndConfirmTransaction,
} from "@solana/web3.js";
import * as bs58 from "bs58";

const account = {
  pubKey: process.env.PUBKEY,
  privKey: process.env.PRIVKEY,
};

const connection = new Connection(
  "https://wispy-green-glade.solana-mainnet.quiknode.pro/4b3f864453cae039adf27ecdf9de9d529cb45b38"
);

export async function sendSolFunds({
  address,
  amount,
}: {
  address: string;
  amount: number | undefined;
}) {
  const myAccount = Keypair.fromSecretKey(bs58.decode(account.privKey!));

  const transaction = new Transaction();

  if (!amount) return null;

  try {
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: myAccount.publicKey,
        toPubkey: new PublicKey(bs58.decode(address)),
        lamports: amount,
      })
    );

    const trans = await sendAndConfirmTransaction(connection, transaction, [
      myAccount,
    ]);

    return trans;
  } catch (error) {
    console.log(error);

    return null;
  }
}
