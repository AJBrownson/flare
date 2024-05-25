// utils/solana.ts

import { Connection, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';

/**
 * Sends a SOL transaction.
 * @param connection - The Solana connection object.
 * @param fromPubkey - The public key of the sender.
 * @param toPubkey - The public key of the recipient.
 * @param lamports - The amount of lamports to send.
 * @param sendTransaction - The function to send the transaction.
 * @returns The transaction signature.
 */
export async function sendSolTransaction(
  connection: Connection,
  fromPubkey: PublicKey,
  toPubkey: PublicKey,
  lamports: number,
  sendTransaction: (transaction: Transaction, connection: Connection) => Promise<string>
): Promise<string> {
    
  const transaction = new Transaction().add(
    SystemProgram.transfer({
      fromPubkey,
      toPubkey,
      lamports,
    })
  );

  const signature = await sendTransaction(transaction, connection);
  await connection.confirmTransaction(signature, 'confirmed');
  return signature;
}
