import { Plus } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import { Separator } from '@/components/ui/separator'

export default function Page() {
  return (
    <main className="flex w-full justify-center bg-background">
      <ResizablePanelGroup
        className="mt-10 h-full max-h-[800px] max-w-[1200px] items-stretch rounded-lg border"
        direction="horizontal"
      >
        <ResizablePanel defaultSize={60}>
          <div className="flex items-center justify-between p-4">
            <h1 className="text-xl font-bold">Create Token</h1>

            <Badge variant={'secondary'}>Token 2022</Badge>
          </div>
          <Separator />

          <div className="flex flex-col gap-3 p-4 pt-2">
            <div>
              <Label className="ml-1">Authority</Label>
              <Input
                disabled
                className="mt-1"
                placeholder="Search"
                value={'(You) C8gHzybRCNuLrMBsXW45n9TEmovrTVLTUaMPvWvNts6u'}
              />
              <Button className="mt-1 w-full gap-1" size={'sm'} variant={'outline'}>
                <Plus className="h-4 w-4" />
                <span>Add author</span>
              </Button>
            </div>

            <div>
              <Label className="ml-1">Decimals</Label>
              <Input className="mt-1" placeholder="Search" value={'9'} />
            </div>

            <div>
              <Label className="ml-1">Extensions</Label>
              <Button className="mt-1 w-full gap-1" size={'sm'} variant={'outline'}>
                <Plus className="h-4 w-4" />
                <span>Add extension</span>
              </Button>
            </div>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={40}>
          <div className="flex items-center p-4">
            <h1 className="text-xl font-bold">Preview</h1>
          </div>
          <Separator />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  )
}
