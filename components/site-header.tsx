import { MainNav } from '@/components/main-nav'

import { UserNav } from './user-nav'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className=" flex flex-col px-5 pr-2">
        <div className="flex h-16  items-center px-4">
          <MainNav className="mx-6 hidden md:block lg:block" />
          <div className="ml-auto flex items-center space-x-2">
            <UserNav />
          </div>
        </div>
      </div>
    </header>
  )
}
