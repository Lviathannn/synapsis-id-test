import { NAVIGATION_ROUTE } from "@/constant";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="flex flex-col gap-5 border-t py-10 lg:py-14 container">
      <div className=" flex flex-col justify-evenly gap-10 md:flex-row">
        <div className="flex flex-col">
          <h2 className="text-primary font-semibold text-xl">Meta Blog</h2>
          <h3 className="text-muted-foreground max-w-sm ">
            A blog about programming, web development, and tech.
          </h3>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl">Links</h2>
          <div className="text-foreground flex flex-col gap-1 font-light">
            {NAVIGATION_ROUTE.map((item) => (
              <Link
                href={item.path}
                className="cursor-pointer font-normal hover:text-primary"
                key={item.path}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h2 className="text-foreground text-xl">Information</h2>
          <div className="text-foreground flex flex-col gap-1">
            <span>Banjaranyar - Ciamis</span>
            <span>Jawa Barat - Indonesia</span>
            <span>+62-8195-2801-343</span>
            <span>muhammad.asrul.rifa@gmail.com</span>
          </div>
        </div>
      </div>
      <p className="pt-5 text-center text-sm">
        © 2024 Muhammad Asrul. All rights reserved
      </p>
    </footer>
  );
}
