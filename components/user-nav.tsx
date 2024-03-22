'use client'

import { useWallet } from '@solana/wallet-adapter-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Skeleton } from '@/components/ui/skeleton'
import { computeAvatarUrl, formatWalletAddress } from '@/lib/utils'

export function UserNav() {
  const { publicKey } = useWallet()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="relative h-8 w-8 rounded-full" variant="ghost">
          <Avatar className="h-8 w-8">
            <AvatarImage
              alt="@shadcn"
              src={computeAvatarUrl(formatWalletAddress(publicKey ? publicKey.toString() : ''))}
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent forceMount align="end" className="w-56">
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {!publicKey ? (
              <Skeleton className="h-[14px] w-[100px] rounded-sm" />
            ) : (
              <>
                <p className="mb-1 text-sm font-medium leading-none">{formatWalletAddress(publicKey.toString())}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {formatWalletAddress(publicKey.toString())}
                </p>
              </>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {}}>
          Copy address
          {/* <DropdownMenuShortcut>⇧C</DropdownMenuShortcut> */}
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => {}}>
          Disconnect
          {/* <DropdownMenuShortcut>⇧Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
