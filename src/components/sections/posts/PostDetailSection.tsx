import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { getUser } from "@/services/getUser";
import Image from "next/image";
type Props = {
  userId: number;
  title: string;
  body: string;
};

export default async function PostDetailSection({
  userId,
  title,
  body,
}: Props) {
  const user = await getUser(userId);

  return (
    <section className="max-w-4xl mx-auto space-y-10">
      <div className="w-full space-y-3">
        <Badge>Technology</Badge>
        <h1 className="text-4xl font-semibold text-foreground">{title}</h1>
        <div className="flex gap-3 items-center">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="font-medium text-muted-foreground">
            {user && user.name ? user.name : "Anonymous User"}
          </p>
        </div>
      </div>
      <Image
        src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Thumbnail"
        width={1280}
        height={720}
        className="w-full max-h-[400px] rounded-xl object-cover object-top"
      />
      <p className="leading-8 text-lg">{body}</p>
    </section>
  );
}
