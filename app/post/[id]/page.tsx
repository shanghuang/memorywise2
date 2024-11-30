"use client";

import { useSession } from "next-auth/react";
//import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../../api/auth/[...nextauth]/route";
import { useRouter } from 'next/router' 
import { useQuery } from "@apollo/client";
import Card from "@/app/components/Card";
import Comments from "@/app/components/Comments";
import { QUERY_POST_BY_ID } from "../../constants";

export default function Post({params}) {
  //const session = await getServerSession(authOptions);
  

  //if (session) redirect("/");

  //const router = useRouter();
  const { loading, error, data, refetch } = useQuery(QUERY_POST_BY_ID,{
    variables: { id: params?.id }
  });
  const post = data?.post;

  return (//w-screen flex flex-col 
    <main className='gap-2 items-center mt-3 '>
        <>
          <Card {...post} />
          {
            post?.comments && 
              <Comments commentsId={post?.comments} postId={post?.postId}/>
          }
        </>
    </main>
  )
  //return <p>Post: {params.id}</p>
}
//          <Comments />