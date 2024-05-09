'use client';
import * as React from 'react';
import { cn } from '../../../lib/utils';
// import { Icons } from '@/components/icons';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '../../../components/ui/navigation-menu';
import { Button } from '../../../../src/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '../../../components/ui/drawer';
import { Minus, Plus, MenuIcon } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../../components/ui/accordion';
// import { Bar, BarChart, ResponsiveContainer } from 'recharts';

const product: { title: string; href: string; description: string }[] = [
  {
    title: 'Product 1',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Product 2',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Product 3',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  }
];

const company: { title: string; href: string; description: string }[] = [
  {
    title: 'Company 1',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Company 2',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Company 3',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  }
];

const connect: { title: string; href: string; description: string }[] = [
  {
    title: 'Connect 1',
    href: '#',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Connect 2',
    href: '#',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Connect 3',
    href: '#',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  }
];

const data = [
  {
    goal: 400,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 239,
  },
  {
    goal: 300,
  },
  {
    goal: 200,
  },
  {
    goal: 278,
  },
  {
    goal: 189,
  },
  {
    goal: 349,
  },
];

export function Menu() {

  const [goal, setGoal] = React.useState(350);
 
  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <>
      <header className='hidden md:flex md:items-center md:justify-around'>
        <span className='text-3xl font-bold text-white'>Blogr</span>
        <NavigationMenu className='w-screen'>
          <NavigationMenuList className=' justify-start'>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent text-white hover:bg-transparent hover:text-white'>Product</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="#" title="Product 1">
                    {/* Re-usable components built using Radix UI and Tailwind CSS. */}
                  </ListItem>
                  <ListItem href="#" title="Product 2">
                    {/* How to install dependencies and structure your app. */}
                  </ListItem>
                  <ListItem href="#" title="Product 3">
                    {/* Styles for headings, paragraphs, lists...etc */}
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent text-white hover:bg-transparent hover:text-white'>Company</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {company.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {/* {component.description} */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className='bg-transparent text-white hover:bg-transparent hover:text-white'>Connect</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {connect.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    >
                      {/* {component.description} */}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

          </NavigationMenuList>

        </NavigationMenu>
        <div className='flex gap-4'>
          <Button className='bg-transparent hover:bg-transparent'>Login</Button>
          <Button className='bg-white text-[#ff866f] rounded-2xl'>Sign Up</Button>
        </div>
      </header>

      <Drawer>
        <div className='flex justify-between px-4'>
          <span className='text-3xl font-bold text-white md:hidden'>Blogr</span>
          <DrawerTrigger asChild className='md:hidden'>
            <Button variant="outline">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </DrawerTrigger>
        </div>
        <DrawerContent className='md:hidden h-[70vh]'>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
              {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2 gap-4">
                <Accordion type="single" collapsible className="w-full flex flex-col items-center">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Product</AccordionTrigger>
                    {product.map((prod) => (
                      <AccordionContent key={prod.title}>
                        {prod.title}
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Company</AccordionTrigger>
                    {company.map((com) => (
                      <AccordionContent key={com.title}>
                        {com.title}
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Connect</AccordionTrigger>
                    {connect.map((con) => (
                      <AccordionContent key={con.title}>
                        {con.title}
                      </AccordionContent>
                    ))}
                  </AccordionItem>
                  {/* <AccordionItem value="item-2">
                    <AccordionTrigger>Is it styled?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It comes with default styles that matches the other
                      components&apos; aesthetic.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Is it animated?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It&apos;s animated by default, but you can disable it if you
                      prefer.
                    </AccordionContent>
                  </AccordionItem> */}
                </Accordion>
              </div>
            </div>
            <DrawerFooter>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
// eslint-disable-next-line react/prop-types
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
