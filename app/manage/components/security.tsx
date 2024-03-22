import { Info } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@/components/ui/table'
  
const data = [
  [
    'Creation Tx',
    'The token is first created at this transaction. There can be several other mint events after this.',
    '51LeY4T4EbogSb5pwf5MD4EpZXvoHzfoxdQmx5SAcGnC3yNeSwmXiCzRDHZfMek2yi7THC7yqAKBouCyS1utPqf9',
  ],
  [
    'Creator Address',
    'The contract creator\'s address.',
    '4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9',
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
                  {
                    data.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium flex items-center gap-1">
                          <HoverCard>
                            <HoverCardTrigger>
                            <Info />
                            </HoverCardTrigger>
                            <HoverCardContent>
                              {row[1]}
                            </HoverCardContent>
                          </HoverCard>
                          {row[0]}
                        </TableCell>
                        <TableCell>
                          {(row[2].length > 10) ? (
                            <a href={'https://google.com'}>${row[2].slice(0, 5)}...${row[2].slice(-5)}</a>
                          ) : row[2]}
                        </TableCell>
                      </TableRow>
                    ))
                  }
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
