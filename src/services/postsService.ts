import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type Post from "../models/Post";

export const postsAPI = createApi({
  reducerPath: "postsAPI",
  baseQuery: fetchBaseQuery({
    // baseUrl: "https://jsonplaceholder.typicode.com/",
    baseUrl: "http://localhost:3000/",
  }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllPosts: build.query<Post[], number>({
      query: (limit = 5) => ({
        url: "posts",
        // params: {
        //   _limit: limit,
        // },
      }),
      providesTags: (result) => ["Post"],
    }),
    createPost: build.mutation<Post, Post>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: "PUT",
        body: post,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: build.mutation<Post, Post>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});
