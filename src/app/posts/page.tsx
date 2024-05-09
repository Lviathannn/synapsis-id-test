import Pagination from "@/components/features/Pagination";
import MainPostSection from "@/components/sections/posts/MainPostSection";
import PostsList from "@/components/sections/posts/PostsList";
import { getPost } from "@/services/getPost";

type Props = {
  searchParams?: {
    page: string;
  };
};

export default async function page({ searchParams }: Props) {
  const post = await getPost(122220);
  return (
    <main className="container py-20 space-y-10">
      {post && (
        <MainPostSection
          postId={post.id}
          userId={post.user_id}
          title={post.title}
        />
      )}
      <PostsList page={searchParams?.page || "1"} />
      <Pagination page={searchParams?.page || "1"} />
    </main>
  );
}
