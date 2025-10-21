import { FC } from 'react'
import styles from '../styles/Home.module.css'
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'

export const SendSolForm: FC = () => {

    const { publicKey, sendTransaction } = useWallet();
    const { connection } = useConnection();

    
    const sendSol = async event => {

        try {
            if(!connection) {
            console.error("Connection not established");
            return;
        }
        if(!publicKey) {
            console.error("Wallet not connected");
            return;
        }
    
        console.log(`Connection Established !!!`);
        console.log(`PublicKey : ${publicKey}`);

        event.preventDefault()

        const amountSol = Number(event.target.amount.value);

        if(amountSol < 0) {
            console.error("Entered Amount to Transfer cannot be negative");
            return;
        }

        const balance = await connection.getBalance(new PublicKey(publicKey));
        const balanceSol = balance / LAMPORTS_PER_SOL;

        console.log(`Balance : ${balanceSol} SOL`);

        const recipientKey = event.target.recipient.value;
        const toPubkey = new PublicKey(recipientKey);

        console.log(`Sending ${amountSol} SOL to ${recipientKey}`);

        const transaction = new Transaction();

        const sendSolInstruction = SystemProgram.transfer({
            fromPubkey: publicKey,
            toPubkey,
            lamports : amountSol * LAMPORTS_PER_SOL,
        });

        transaction.add(sendSolInstruction);

        console.log("Waiting for user confirmation")
        const signature = await sendTransaction(transaction, connection);

        console.log("Transaction Successfull");
        console.log(`Signature : ${signature}`);
        }

        catch(error){
            console.error(`Error Occured: ${error}`);
        } 
    }

    return (
        <div>
            <form onSubmit={sendSol} className={styles.form}>
                <label htmlFor="amount">Amount (in SOL) to send:</label>
                <input id="amount" type="text" className={styles.formField} placeholder="e.g. 0.1" required />
                <br />
                <label htmlFor="recipient">Send SOL to:</label>
                <input id="recipient" type="text" className={styles.formField} placeholder="e.g. 4Zw1fXuYuJhWhu9KLEYMhiPEiqcpKd6akw3WRZCv84HA" required />
                <button type="submit" className={styles.formButton}>Send</button>
            </form>
        </div>
    )
}