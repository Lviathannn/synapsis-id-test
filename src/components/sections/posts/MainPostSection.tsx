import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { getUser } from "@/services/getUser";

type Props = {
  postId: number;
  userId: number;
  title: string;
};

export default async function MainPostSection({
  postId,
  userId,
  title,
}: Props) {
  const user = await getUser(userId as number);

  return (
    <section>
      <Link href={`/posts/${postId}`}>
        <article className="w-full relative h-[450px] rounded-xl bg-post bg-cover p-10 flex items-end">
          <div className="relative z-10">
            <Badge className="py-0 px-3 text-base">Technology</Badge>
            <h1 className="text-white font-semibold text-4xl max-w-3xl">
              {title}
            </h1>
            <div className="flex gap-5 items-center mt-5">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              {user && (
                <div>
                  <p className="text-lg font-medium text-slate-300">
                    {user.name}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30 z-0 rounded-xl" />
        </article>
      </Link>
    </section>
  );
}
