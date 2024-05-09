import CommentForm from "@/components/sections/posts/CommentForm";
import CommentSection from "@/components/sections/posts/CommentSection";
import PostDetailSection from "@/components/sections/posts/PostDetailSection";
import { getComments } from "@/services/getComments";
import { getPost } from "@/services/getPost";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

type Props = {
  params: {
    id: string;
  };
};

export default async function page({ params }: Props) {
  const post = await getPost(params.id);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["comments"],
    queryFn: () => getComments(params.id),
  });

  return (
    <main className="container py-20 space-y-10">
      <HydrationBoundary state={dehydrate(queryClient)}>
        {post && (
          <>
            <PostDetailSection
              userId={post.user_id}
              title={post.title}
              body={post.body}
            />
            <CommentForm postId={post.id} />
            <CommentSection postId={post.id} />
          </>
        )}
      </HydrationBoundary>
    </main>
  );
}
