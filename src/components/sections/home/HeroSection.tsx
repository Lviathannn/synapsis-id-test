import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Props = {};

export default function HeroSection({}: Props) {
  return (
    <section className="relative w-full h-[300px] md:h-[500px] bg-accent rounded-xl">
      <Image
        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero Image"
        fill
        className="object-top rounded-xl object-cover"
        priority
        quality={90}
      />
      <div className="absolute bg-white rounded-lg p-4 shadow-lg -bottom-16 left-10 ">
        <div className="flex flex-col gap-4">
          <div className="">
            <Badge variant="default">Technology</Badge>
          </div>
          <h1 className="text-xl font-semibold max-w-sm">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h1>
          <div className="flex gap-5 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-muted-foreground">Leviathan</p>
            <p className="text-muted-foreground">Mei,09 2024</p>
          </div>
        </div>
      </div>
    </section>
  );
}
