import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function computeAvatarUrl(avatar: string) {
  return `https://avatar.vercel.sh/${avatar}.png`
}

export function formatWalletAddress(address: string, head = 6, tail = 6) {
  return `${address.slice(0, head)}...${address.slice(-tail)}`
}
