import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
  name: string;
  body: string;
  email: string;
};

export default function CommentCard({ name, body, email }: Props) {
  return (
    <article className="w-full border-b border-border space-y-3 pb-3">
      <div className="flex gap-3 items-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="space-y-0">
          <p className="font-medium text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>
      <p className="leading-8 text-lg text-foreground">{body}</p>
    </article>
  );
}
