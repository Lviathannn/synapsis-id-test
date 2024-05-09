import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { getUser } from "@/services/getUser";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  postId: number;
  userId: number;
  title: string;
};

export default async function PostCard({ postId, userId, title }: Props) {
  const user = await getUser(userId);

  return (
    <Link
      href={`/posts/${postId}`}
      className="w-full rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all md:grid md:grid-rows-2"
    >
      <Image
        src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="post image"
        width={300}
        height={170}
        className="w-full aspect-video object-cover md:row-span-1"
      />
      <div className="px-5 pb-5 pt-2 flex flex-col justify-between md:row-span-1">
        <div className="h-full flex flex-col justify-between gap-5">
          <div className="">
            <Badge>Technology</Badge>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <div className="flex gap-5 items-center">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {user ? (
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  {user.name}
                </p>
              </div>
            ) : (
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Anonymus User
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
