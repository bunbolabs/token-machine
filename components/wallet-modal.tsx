'use client'

import { type WalletName, WalletReadyState } from '@solana/wallet-adapter-base'
import { useWallet, type Wallet } from '@solana/wallet-adapter-react'
import { type MouseEvent, useCallback, useMemo } from 'react'

import useWalletModal from '@/hooks/use-wallet-modal'

import { Icons } from './icons'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'

export default function WalletModal() {
  const { visible, setVisible } = useWalletModal()
  const { wallets, select } = useWallet()

  const [listedWallets] = useMemo(() => {
    const installed: Wallet[] = []
    const loadable: Wallet[] = []
    const notDetected: Wallet[] = []

    for (const wallet of wallets) {
      if (wallet.readyState === WalletReadyState.NotDetected) {
        notDetected.push(wallet)
      } else if (wallet.readyState === WalletReadyState.Loadable) {
        loadable.push(wallet)
      } else if (wallet.readyState === WalletReadyState.Installed) {
        installed.push(wallet)
      }
    }

    let listed: Wallet[] = []

    if (installed.length) {
      listed = installed
    } else if (loadable.length) {
      listed = loadable
    }

    return [listed]
  }, [wallets])

  const handleWalletClick = useCallback(
    (event: MouseEvent, walletName: WalletName) => {
      select(walletName)
      setVisible(false)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [select],
  )

  return (
    <Dialog open={visible} onOpenChange={setVisible}>
      <DialogContent className="gap-0 p-0 outline-none">
        <DialogHeader className="px-4 pb-4 pt-5">
          <DialogTitle>Connect to existing wallet</DialogTitle>
          <DialogDescription>Pick the wallet provider where you willing to start.</DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-3 gap-3 p-4">
          {listedWallets.map((wallet) => (
            <button
              key={wallet.adapter.name}
              className="flex select-none flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground"
              onClick={(event) => handleWalletClick(event, wallet.adapter.name)}
            >
              <figure className="h-7 w-7">{Icons[wallet.adapter.name.toLowerCase()]}</figure>

              {/* <Image alt={`${wallet.adapter.name} icon`} height={40} src={wallet.adapter.icon} width={40} /> */}
              <span className="mt-3 text-sm"> {wallet.adapter.name}</span>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}
