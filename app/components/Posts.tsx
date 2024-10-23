import Posts from ".//Post";
import PostLayout from ".//PostLayout";
//import { PostType } from "../../type";

const getPost = async () => {
  const res = await fetch("https://p3social.vercel.app/api/post", {
    cache: "no-store",
  });

  return res.json();
};

const Post = async () => {
  const posts: Awaited<{ post: PostType[] }> = await getPost();
  console.log(posts);
  return (
    <main className="w-screen bg-slate-100 pb-48">
      <PostLayout post={posts.post}>
        <Posts />
      </PostLayout>
    </main>
  );
};

export default Post;

/*
        <Posts />
*/