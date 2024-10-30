"use client";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { CREATE_POST } from "../constants";


interface CardProps extends PostType {
  initialData: PostType[];
}



const PostsFilter: React.FC<CardProps> = ({
  username,
  profile,
  image,
  desc,
  postId,
  likes,
  initialData,
  userId,
}) => {
    const [queryPost] = useMutation(QUERY_POST);
    const { data: session, status } = useSession()
    console.log("session:");  console.log(session);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
      } = useForm();
      
    const onSubmit = async (data) => {
    
        const {  keyword } = data || {};
    
        const userId = session?.id;   
        const res = await queryPost({
          variables: { post: { 
            user : userId, 
            keyword : keyword} },
        });
        console.log("queryPost result:" + res.data?.queryPost?.posts);
    
    
      };

    return(
        //bg-white w-[80vw] md:w-[60vw] h-[24.5rem] lg:w-[40vw] xl:w-[40vw] rounded-xl shadow-sm
<form
  onSubmit={handleSubmit(onSubmit)}
  className="flex flex-col gap-2 w-3/4"
>
   <div class="w-[80vw] md:w-[60vw] border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
       <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
           <label htmlFor="keyword" class="sr-only">Keyword</label>
           <input type="text" id="keyword" 
                  {...register("keyword", { required: true })}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Keyword" required />
       </div>
       <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button type="submit" 
                   class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          >
               Query
          </button>

       </div>
   </div>
</form>

    );
}

export default PostEdit;