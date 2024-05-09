"use client";
import CommentCard from "@/components/features/CommentCard";
import { getComments } from "@/services/getComments";
import { useQuery } from "@tanstack/react-query";

type Props = {
  postId: number;
};

export default function CommentSection({ postId }: Props) {
  const { data: comments } = useQuery({
    queryKey: ["comments"],
    queryFn: () => getComments(postId),
  });

  return (
    <section className="max-w-4xl mx-auto space-y-10">
      {comments &&
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            name={comment.name}
            body={comment.body}
            email={comment.email}
          />
        ))}

      {comments?.length === 0 && (
        <p className="text-center text-muted-foreground">No comments yet</p>
      )}
    </section>
  );
}
