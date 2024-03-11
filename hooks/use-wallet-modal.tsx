import { create } from 'zustand'

interface WalletModalState {
  visible: boolean
  setVisible: (visible: boolean) => void
}

const useWalletModal = create<WalletModalState>((set) => ({
  visible: false,
  setVisible: (visible: boolean) => set({ visible }),
}))

export default useWalletModal
