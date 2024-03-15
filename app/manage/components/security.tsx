import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,

} from "@/components/ui/table"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { IoIosInformationCircleOutline } from "react-icons/io";

const data = []

export default function TokenSecurity() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-normal">Security</CardTitle>
      </CardHeader>
      <CardContent>
        <Table >
          <TableBody>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                <HoverCardContent>
                  Mint function enables contract owner to issue more tokens and cause the coin price to plummet. It is extremely risky. However if ownership is renounced, or is changed to a burn address, this function will be disabled.
                </HoverCardContent>
              </HoverCard>
                Mintable
              </TableCell>
              <TableCell>NO</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    The token information such as name, logo, website address can be changed by the owner.
                  </HoverCardContent>
                </HoverCard>
                Mutable Info
              </TableCell>
              <TableCell>YES</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    The token is first minted at this transaction. There can be several other mint events after this.
                  </HoverCardContent>
                </HoverCard>
                First Mint Tx
              </TableCell>
              <TableCell>
                5efytCDjwERW2JbKkStkvscduABiiB4ZYbeNPBi9CgU7ahPtVFXw6bHt4xyftF6U9qjhcBKb3CdtZ1oobkgSTsUb
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    The token is first minted at this time. There can be several other mint events after this.
                  </HoverCardContent>
                </HoverCard>
                First Mint Time
              </TableCell>
              <TableCell>03-10-2024</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    The token is first created at this transaction. There can be several other mint events after this.
                  </HoverCardContent>
                </HoverCard>
                Creation Tx
              </TableCell>
              <TableCell>51LeY4T4EbogSb5pwf5MD4EpZXvoHzfoxdQmx5SAcGnC3yNeSwmXiCzRDHZfMek2yi7THC7yqAKBouCyS1utPqf9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    If token ownership is renounced, no one can execute functions such as mint more tokens.
                  </HoverCardContent>
                </HoverCard>
                Ownership Renounced
              </TableCell>
              <TableCell>YES</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    The contract creator's address.
                  </HoverCardContent>
                </HoverCard>
                Creator Address
              </TableCell>
              <TableCell>4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    The token balance of contract creator.
                  </HoverCardContent>
                </HoverCard>
                Creator Balance
              </TableCell>
              <TableCell>109.86M</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    The percentage of tokens held by the contract creator.
                  </HoverCardContent>
                </HoverCard>
                Token Percentage of Creator
              </TableCell>
              <TableCell>10.99%</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    The token's update authority address.
                  </HoverCardContent>
                </HoverCard>
                Update Authority (UA)
              </TableCell>
              <TableCell>4Tj6HGbdRYcKo8pca6JrjnHJCPJsPksaSeQ4tSQWAeS9</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    The token balance of token Update Authority.
                  </HoverCardContent>
                </HoverCard>
                UA Balance
              </TableCell>
              <TableCell>109.86M</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium flex items-center gap-1">
                <HoverCard>
                  <HoverCardTrigger><IoIosInformationCircleOutline /></HoverCardTrigger>
                  <HoverCardContent>
                    The percentage of tokens held by the token Update Authority.
                  </HoverCardContent>
                </HoverCard>
                UA Percentage
              </TableCell>
              <TableCell>10.99%</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
