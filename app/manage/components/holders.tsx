'use-client'
import 'react-toastify/dist/ReactToastify.css'
import fetch from 'isomorphic-unfetch'

import * as Tooltip from '@radix-ui/react-tooltip'
import { useEffect, useState } from 'react'
import { Copy } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'
import { get } from 'http'

interface Account {
  address: string
  amount: number
  uiAmount: number
}

interface TokenHolder {
  address: string
  percent: number
}

export default function TokenHolders() {
  const [copied, setCopied] = useState(false) // State to track if address is copied
  const [top10Holders, setTop10Holders] = useState<TokenHolder[]>([]) // State to store holders data
  const [totalSolSupply, setTotalSolSupply] = useState<number>(0) // State to store total SOL supply

  const SOL_MINT_ADDRESS = 'So11111111111111111111111111111111111111112'
  const url = `https://devnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIOS_API_KEY}` // API URL

  useEffect(() => {
    const fetchData = async () => {
      let top10HoldersCache = localStorage.getItem('top10Holders');
      let totalSolSupplyCache = localStorage.getItem('totalSolSupply');
      if (top10HoldersCache) {
        setTop10Holders(JSON.parse(top10HoldersCache));
      }
      if (totalSolSupplyCache) {
        setTotalSolSupply(JSON.parse(totalSolSupplyCache));
      }

      const [holdersData, solSupply] = await Promise.all([getTop10Holders(), getTotalSupply()]);
      if (holdersData) {
        setTop10Holders(holdersData);
      }
      setTotalSolSupply(solSupply);
    }
    fetchData();
  }, []);

  const getTotalSupply = async () => {
    try {
      const response = await fetch('http://api.devnet.solana.com/v0/circulating-supply', {
        method: 'POST',
        headers: { accept: 'application/json', 'content-type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
        }),
      })

      const responseData = await response.json()

      if (responseData) {
        // Xóa dữ liệu cũ từ localStorage
        localStorage.removeItem('totalSolSupply');
        // Lưu dữ liệu vào localStorage
        localStorage.setItem('totalSolSupply', JSON.stringify(responseData));

        return responseData;
      } else {
        console.error('Error fetching SOL balance:', responseData.error)
      }
    } catch (error) {
      console.error('Error fetching SOL balance:', error)
    }
  }

  const getTop10Holders = async () => {
    try {
      let fetchedData: Account[] = []

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: '1',
          jsonrpc: '2.0',
          method: 'getTokenLargestAccounts',
          params: [SOL_MINT_ADDRESS, { commitment: 'confirmed', limit: 10 }],
        }),
      })

      const responseData = await response.json()
      if (responseData.result.value) {
        const accounts: Account[] = responseData.result.value

        let count = 0
        for (const account of accounts) {
          if (count === 10) break
          const address = account.address
          const amount = account.amount
          const uiAmount = account.uiAmount
          fetchedData.push({ address, amount, uiAmount })
          count++
        }
        let top10HoldersData: TokenHolder[] = []
        if (totalSolSupply !== 0) {
          fetchedData.forEach((account) => {
            const percent = (account.uiAmount / totalSolSupply) * 100;
            top10HoldersData.push({ address: account.address, percent });
          });

          // Xóa dữ liệu cũ từ localStorage
          localStorage.removeItem('top10Holders');
          // Lưu dữ liệu vào localStorage
          localStorage.setItem('top10Holders', JSON.stringify(top10Holders));
          return top10HoldersData;
        }
      } else {
        console.error('Error fetching token holders:', responseData.error)
      }
    } catch (error) {
      console.error('Error fetching token holders:', error)
    }
  }

  const copyToClipboard = (address: string) => {
    navigator.clipboard
      .writeText(address) // Write address to clipboard
      .then(() => {
        toast('Copied to clipboard') // Show toast if successful
        setCopied(true) // Set copied to true if successful
        setTimeout(() => setCopied(false), 2000) // Reset copied after 2 seconds
      })
      .catch((error) => console.error('Failed to copy:', error)) // Log error if failed
  }

  // @ts-ignore
  return (
    <Card>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>%</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {top10Holders ? (
              top10Holders.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{'#' + (index + 1)}</TableCell>
                  <TableCell>
                    <Tooltip.Provider>
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <button
                            onClick={() => copyToClipboard(row.address)}
                            className="text-violet11 shadow-blackA4 hover:bg-violet3 mr-1 inline-flex h-[10px] w-[10px] items-center justify-center rounded-full outline-none"
                          >
                            <Copy />
                          </button>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white px-[15px] py-[10px] text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
                            sideOffset={5}
                          >
                            Copy this address
                            <Tooltip.Arrow className="fill-white" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </Tooltip.Provider>
                    {`${row.address.slice(0, 5)}...${row.address.slice(-5)}`}
                  </TableCell>
                  <TableCell>{row.percent.toFixed(4)}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3}>
                  <div className="flex items-center space-x-4">
                    <Skeleton className="h-12 w-12 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px]" />
                      <Skeleton className="h-4 w-[200px]" />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </CardContent>
    </Card>
  )
}
