import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Posts from "./components/PostQuery"
import PostEdit from "./components/PostEdit";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      {session ? (
        <div w-screen flex flex-col >
          <PostEdit />
          <Posts/>
        </div>
      ) : (
        <h1 className="text-5xl">You Shall Not Pass!</h1>
      )}
    </>
  );
}
