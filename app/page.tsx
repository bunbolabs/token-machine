'use client'

import ConnectButton from '@/components/connect-button'
import WalletModal from '@/components/wallet-modal'

export default function Home() {
  return (
    <main>
      <ConnectButton />
      <WalletModal />
    </main>
  )
}
