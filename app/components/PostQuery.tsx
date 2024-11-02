"use client";
import React, { useState } from 'react';
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import PostList from "./PostList";


const PostQuery =  () => {

  const [keyword, setKeyword] = useState("");
  const { data: session, status } = useSession()
  console.log("session:");  console.log(session);

  const onSubmit = async (data) => {

    const {  keyword } = data || {};
    setKeyword(keyword);
    //console.log("queryPost result:" + res.data?.queryPost?.posts);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  return (
    <main className="w-screen bg-slate-100 pb-48">
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2 w-3/4">
      <div class="w-[80vw] md:w-[60vw] border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="keyword" class="sr-only">Keyword</label>
              <input type="text" id="keyword" 
                      {...register("keyword", { required: true })}
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                      placeholder="Keyword" required />
          </div>
          <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                  Query
              </button>
          </div>
      </div>
    </form>
    
    <PostList keyword={keyword}/>

    </main>
  );
};

export default PostQuery;

