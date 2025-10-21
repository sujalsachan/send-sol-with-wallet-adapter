# ⚡ Send SOL — Solana x Next.js dApp

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Solana](https://img.shields.io/badge/Solana-9945FF?style=for-the-badge&logo=solana&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

A clean and simple **Next.js dApp** that allows users to send **SOL tokens** on the **Solana blockchain** directly from their connected wallet.  
Built using **@solana/web3.js** and the **Solana Wallet Adapter**.

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone <your-repo-url>
cd your-project
npm install
# or
yarn install
```

Start the local development server:

```bash
npm run dev
# or
yarn dev
```

Then open 👉 [http://localhost:3000](http://localhost:3000) in your browser.

---

## 💸 Features

✅ Connect your Solana wallet  
✅ Enter the recipient’s address and amount (in SOL)  
✅ Create and send transactions using `SystemProgram.transfer`  
✅ Get real-time transaction logs in the console  

---

## 🧩 Core File: `SendSolForm.tsx`

Handles:
- Wallet connection  
- Balance checks  
- Transaction creation  
- Sending SOL  
- Error handling and logging  

---

## 🧰 Tech Stack

| Tech | Description |
|------|--------------|
| **Next.js** | Frontend framework for React |
| **Solana Web3.js** | Blockchain SDK |
| **Wallet Adapter** | Handles wallet connections |
| **CSS Modules** | Scoped styling |

---

## ⚠️ Notes

- Always test on **Devnet** before sending real SOL.  
- Ensure your wallet is connected and funded.  
- Avoid using negative or invalid transfer amounts.

---

## 👤 Author

**Sujal Sachan**  
💼 Exploring Solana, Next.js, and Web3 development.  
🌐 Open to feedback and collaboration!  

---

### ⭐ If you found this helpful, consider giving it a star!
