'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

export function MainNav({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Link className="mr-6 flex items-center space-x-2" href="/">
        <span className="hidden font-bold sm:inline-block">Token Machine</span>
      </Link>
      <nav className="flex items-center gap-6 text-sm">
        <Link
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname === '/create' ? 'text-foreground' : 'text-foreground/60',
          )}
          href="/create"
        >
          Create
        </Link>
        <Link
          className={cn(
            'transition-colors hover:text-foreground/80',
            pathname?.startsWith('/manage') ? 'text-foreground' : 'text-foreground/60',
          )}
          href="/manage"
        >
          Manage
        </Link>
      </nav>
    </div>
    // <NavigationMenu className={cn('ml-4', className)}>
    //   <NavigationMenuList>
    //     <NavigationMenuItem className="bg-transparent text-sm font-medium text-primary transition-colors hover:text-primary">
    //       <Link legacyBehavior passHref href="/">
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()}>Token Machine</NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem>
    //     <NavigationMenuItem className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
    //       <Link legacyBehavior passHref href="/create" target="_blank">
    //         <NavigationMenuLink className={navigationMenuTriggerStyle()} target="_blank">
    //           Create
    //         </NavigationMenuLink>
    //       </Link>
    //     </NavigationMenuItem>
    //   </NavigationMenuList>
    // </NavigationMenu>
  )
}

const ListItem = forwardRef<ElementRef<'a'>, ComponentPropsWithoutRef<'a'>>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  },
)

ListItem.displayName = 'ListItem'
