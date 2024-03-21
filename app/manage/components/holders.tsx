'use-client'
import 'react-toastify/dist/ReactToastify.css'
import fetch from 'isomorphic-unfetch';

import * as Tooltip from '@radix-ui/react-tooltip'
import { useEffect, useState } from 'react'
import { Copy } from 'lucide-react'
import { toast, ToastContainer } from 'react-toastify'
import { Card, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { cn } from '@/lib/utils'

const data = [
  {
    no: 1,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 2,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 3,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 4,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 5,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 6,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 7,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 8,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 9,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
  {
    no: 10,
    address: '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
    percent: 10.9869,
  },
]

interface Account {
  address: string
  amount: number
}

interface TokenHolder {
  address: string;
  percent: number;
}

export default function TokenHolders() {
  const [copied, setCopied] = useState(false) // State to track if address is copied
  const [holdersData, setHoldersData] = useState<TokenHolder[]>([]); // State to store holders data
  const [solBalance, setSolBalance] = useState(0);

  const SOL_MINT_ADDRESS = 'So11111111111111111111111111111111111111112';
  const url = `https://mainnet.helius-rpc.com/?api-key=${process.env.NEXT_PUBLIC_HELIOS_API_KEY}`; // API URL

  useEffect(() => { // Fetch top 10 holders on component mount
    const findTop10Holders = async () => {
      try {
        let fetchedData: Account[] = [];

          const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              id: '1',
              jsonrpc: '2.0',
              method: 'getTokenLargestAccounts',
              params: [SOL_MINT_ADDRESS, {commitment: 'confirmed', limit: 10}],
            }),
          });

          const responseData = await response.json();          
          if (responseData.result.value) {
            const accounts:  Account[] = responseData.result.value;
            
            // Duyệt qua các tài khoản và lấy ra các thông tin cần thiết
            for (const account of accounts) {
              const address = account.address;
              const amount = account.amount;
              fetchedData.push({ address, amount });
            }
          } else {
            console.error('Error fetching token holders:', responseData.error);
          }
          console.log('fetchedData:', fetchedData);
      } catch (error) {
        console.error('Error fetching token holders:', error);
      }
    };
    
    // findTop10Holders();
  }, []);

  useEffect(() => { // Fetch SOL balance on component mount
    const getSolBalance = async () => {
      try {
        const options = {
          method: 'POST',
          headers: {accept: 'application/json', 'content-type': 'application/json'},
          body: JSON.stringify({
            id: 1,
            jsonrpc: '2.0',
            method: 'getTokenAccountsByOwner',
            params: [
              'CEXq1uy9y15PL2Wb4vDQwQfcJakBGjaAjeuR2nKLj8dk',
              {mint: '8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB'},
              {encoding: 'jsonParsed'}
            ]
          })
        };
        
        fetch('https://nd-326-444-187.p2pify.com/9de47db917d4f69168e3fed02217d15b/', options)
          .then(response => response.json())
          .then(response => console.log(response))
          .catch(err => console.error(err));
      } catch (error) {
        console.error('Error fetching SOL balance:', error);
      }
    };
    getSolBalance();
  } , []);

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
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{'#' + row.no}</TableCell>
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
                <TableCell>{row.percent}</TableCell>
              </TableRow>
            ))}
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
