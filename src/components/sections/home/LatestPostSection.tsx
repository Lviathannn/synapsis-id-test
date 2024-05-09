import SkeletonPostCard from "@/components/features/SkeletonPostCard";
import { getPosts } from "@/services/getPosts";
import dynamic from "next/dynamic";
const PostCard = dynamic(() => import("@/components/features/PostCard"), {
  loading: () => <SkeletonPostCard />,
});

type Props = {};

export default async function LatestPostSection({}: Props) {
  const latestPost = await getPosts(1, 4);

  return (
    <section className="space-y-10 mt-32">
      <h2 className="text-2xl font-semibold">Latest Post</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {latestPost.map((post) => (
          <PostCard
            key={post.id}
            postId={post.id}
            userId={post.user_id}
            title={post.title}
          />
        ))}
      </div>
    </section>
  );
}
