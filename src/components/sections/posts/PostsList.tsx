import SkeletonPostCard from "@/components/features/SkeletonPostCard";
import { getPosts } from "@/services/getPosts";
import dynamic from "next/dynamic";
const PostCard = dynamic(() => import("@/components/features/PostCard"), {
  loading: () => <SkeletonPostCard />,
});

export default async function PostsList({ page }: { page: string }) {
  const posts = await getPosts(page, 12);
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {posts?.map((post) => (
        <PostCard
          key={post.id}
          postId={post.id}
          title={post.title}
          userId={post.user_id}
        />
      ))}
    </section>
  );
}
