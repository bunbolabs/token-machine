import 'react-toastify/dist/ReactToastify.css'

import * as Tooltip from '@radix-ui/react-tooltip'
import { useState } from 'react'
import { MdContentCopy } from 'react-icons/md'
import { toast, ToastContainer } from 'react-toastify'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
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

export default function TokenHolders() {
  const [copied, setCopied] = useState(false) // State to track if address is copied

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address) // Write address to clipboard
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
        <Accordion collapsible type="single">
          <AccordionItem value="item-1">
            <AccordionTrigger>Top 10 Token Holders (20.08%)</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>No</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>%</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {
                    data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{'#' + row.no}</TableCell>
                        <TableCell>
                          <Tooltip.Provider>
                            <Tooltip.Root>
                              <Tooltip.Trigger asChild>
                                <button
                                  onClick={() => copyToClipboard(row.address)}
                                  className="text-violet11 shadow-blackA4 hover:bg-violet3 inline-flex h-[10px] w-[10px] items-center justify-center rounded-full outline-none mr-1">
                                  <MdContentCopy />
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
                    ))
                  }
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
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
