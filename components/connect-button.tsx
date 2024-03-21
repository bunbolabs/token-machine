import { useWallet } from '@solana/wallet-adapter-react'
import React from 'react'

import useWalletModal from '@/hooks/use-wallet-modal'

import { Button } from './ui/button'

export default function ConnectButton() {
  const { setVisible } = useWalletModal()
  const { disconnect } = useWallet()

  return (
    <>
      <Button variant="default" onClick={() => setVisible(true)}>
        Connect
      </Button>

      <Button variant="default" onClick={disconnect}>
        Disconnect
      </Button>
    </>
  )
}
