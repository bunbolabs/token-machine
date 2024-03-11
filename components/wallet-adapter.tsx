'use client'

import { Adapter, WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets'
import { verifySignIn } from '@solana/wallet-standard-util'
import { clusterApiUrl } from '@solana/web3.js'
import { useCallback } from 'react'

import { createSignInData } from '@/actions/create-signin-data'

interface Props {
  children: React.ReactNode
}

export default function WalletAdapter({ children }: Props) {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = clusterApiUrl(network)
  const wallets = [new PhantomWalletAdapter()]

  const autoSignIn = useCallback(async (adapter: Adapter) => {
    if (!('signIn' in adapter)) return true
    ;('use server')
    const createResponse = await createSignInData()
    const output = await adapter.signIn(createResponse)
    const verifyResponse = verifySignIn(createResponse, output)

    if (!verifyResponse) throw new Error('Sign In verification failed!')

    return true
  }, [])

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider autoConnect={autoSignIn} wallets={wallets}>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}
