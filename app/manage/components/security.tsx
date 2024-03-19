import { IoIosInformationCircleOutline } from 'react-icons/io'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
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
  [
    'Mintable',
    'Mint function enables contract owner to issue more tokens and cause the coin price to plummet. It is extremely risky. However if ownership is renounced, or is changed to a burn address, this function will be disabled.',
    'NO',
  ],
  [
    'Mutable Info',
    'The token information such as name, logo, website address can be changed by the owner.',
    'YES',
  ],
  [
    'First Mint Tx',
    'The token is first minted at this transaction. There can be several other mint events after this.',
    '5efytCDjwERW2JbKkStkvscduABiiB4ZYbeNPBi9CgU7ahPtVFXw6bHt4xyftF6U9qjhcBKb3CdtZ1oobkgSTsUb',
  ],
  [
    'First Mint Time',
    'The token is first minted at this time. There can be several other mint events after this.',
    '03-10-2024',
  ],
  [
    'Creation Tx',
    'The token is first created at this transaction. There can be several other mint events after this.',
    '51LeY4T4EbogSb5pwf5MD4EpZXvoHzfoxdQmx5SAcGnC3yNeSwmXiCzRDHZfMek2yi7THC7yqAKBouCyS1utPqf9',
  ],
  [
    'Ownership Renounced',
    'If token ownership is renounced, no one can execute functions such as mint more tokens.',
    'YES',
  ],
  [
    'Creator Address',
    'The contract creator\'s address.',
    '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
  ],
  [
    'Creator Balance',
    'The token balance of contract creator.',
    '109.86M',
  ],
  [
    'Token Percentage of Creator',
    'The percentage of tokens held by the contract creator.',
    '10.99%',
  ],
  [
    'Update Authority (UA)',
    'The token\'s update authority address.',
    '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
  ],
  [
    'UA Balance',
    'The token balance of token Update Authority.',
    '109.86M',
  ],
  [
    'UA Percentage',
    'The percentage of tokens held by the token Update Authority.',
    '10.99%',
  ],
]

export default function TokenSecurity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Security</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableBody>
            <Accordion collapsible type="single">
              <AccordionItem value="item-1">
                <AccordionContent>
                  {
                    data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium flex items-center gap-1">
                          <HoverCard>
                            <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                            <HoverCardContent>
                              {row[1]}
                            </HoverCardContent>
                          </HoverCard>
                          {row[0]}
                        </TableCell>
                        <TableCell>
                          {row[2]}
                        </TableCell>
                      </TableRow>
                    ))
                  }
                </AccordionContent>
                <AccordionTrigger>
                  Security Information
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
