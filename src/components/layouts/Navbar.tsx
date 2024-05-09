"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AlignRight } from "lucide-react";
import Image from "next/image";
import LogoImg from "@/assets/img/Logo.png";
import { NAVIGATION_ROUTE } from "@/constant";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="fixed left-0 right-0 top-0 z-30 bg-background border-b">
      <div className="container flex h-14 w-full items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full justify-between">
          <Link href="/" className="text-lg font-medium text-primary">
            <Image src={LogoImg} alt="Logo" width={110} />
          </Link>
          <Sheet open={isOpen}>
            <SheetTrigger asChild>
              <Button
                size="icon"
                variant="ghost"
                className="sm:hidden"
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <AlignRight className="text-foreground" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="sm:max-w-xs"
              setIsOpen={setIsOpen}
            >
              <nav className="grid gap-6 text-lg font-medium">
                {NAVIGATION_ROUTE.map((item) => (
                  <Link
                    href={item.path}
                    className="flex items-center gap-4 px-2.5 text-base font-medium text-foreground "
                    key={item.name}
                  >
                    <div
                      className={`rounded-full p-2 ${
                        pathname == item.path && "bg-primary text-white"
                      }`}
                    >
                      <item.icon />
                    </div>
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        <div className="space-x-4 hidden sm:block">
          {NAVIGATION_ROUTE.map((item) => (
            <Link
              href={item.path}
              className={`text-foreground font-medium ${
                pathname == item.path && "text-primary"
              }`}
              key={item.path}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
