import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const data = [
  {
    no: 1,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 2,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 3,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 4,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 5,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 6,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 7,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 8,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 9,
    address: '0x',
    percent: 10.9869,
  },
  {
    no: 10,
    address: '0x',
    percent: 10.9869,
  },
]

export default function TokenHolders() {
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
                        <TableCell>{row.address}</TableCell>
                        <TableCell>{row.percent}</TableCell>
                      </TableRow>
                    ))
                  }
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
