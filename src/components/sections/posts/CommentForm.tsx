"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { postComment } from "@/services/postComment";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

type Props = {
  postId: number;
};

export default function CommentForm({ postId }: Props) {
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (comment: string) => postComment(postId, comment),
    onMutate: () => {
      setIsLoading(true);
    },
    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["comments"],
      });
      setComment("");
      setIsLoading(false);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutation.mutate(comment);
  };

  return (
    <section className="max-w-4xl mx-auto space-y-10">
      <h2 className="text-2xl font-semibold">Comment </h2>
      <form className="grid w-full gap-2" onSubmit={handleSubmit}>
        <Textarea
          placeholder="Type your comment here."
          value={comment}
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />
        <Button disabled={isLoading}>Send message</Button>
      </form>
    </section>
  );
}
