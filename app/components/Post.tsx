'use client'
import useSWR, { Fetcher } from 'swr'
//import { PostType } from '../type'
import Card from './Card'

const fetcher: Fetcher<PostType[]> = async (url: string) => {
  const res = await fetch(url,{
    mode: 'no-cors'
  })
  const data: Awaited<{ post: PostType[] }> = await res.json()

  return data.post
}

const Post = () => {
  const { data: posts } = useSWR(`https://p3social.vercel.app/api/post`, fetcher)

  return (//w-screen flex flex-col 
    <main className='gap-2 items-center mt-3 '>
      {posts?.map((post, i) => 
        (
        <>
          <Card {...post} key={i} initialData={posts} />
        </>))}
    </main>
  )
}
export default Post