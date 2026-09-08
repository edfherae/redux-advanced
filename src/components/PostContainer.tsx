import type Post from "../models/Post";
import { postsAPI } from "../services/postsService";
import PostItem from "./PostItem";
import { useState } from "react";

export default function PostContainer() {
  const [limit, setLimit] = useState(10);
  const {
    data: posts,
    isError,
    isLoading,
    refetch,
  } = postsAPI.useFetchAllPostsQuery(limit /*{ pollingInterval: 1000 }*/);
  const [createPost, { error }] = postsAPI.useCreatePostMutation();
  const [updatePost, {}] = postsAPI.useUpdatePostMutation();
  const [deletePost, {}] = postsAPI.useDeletePostMutation();

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setLimit(3);
  //     }, 2000);
  //   });

  async function handleCreate() {
    const title = prompt("Title");
    const body = prompt("Body");
    await createPost({ title: title, body: body, id: Math.random() } as Post);
  }

  return (
    <div className="post__list">
      {/* <button onClick={() => refetch()}>Refetch</button> */}
      <button onClick={handleCreate}>Create post</button>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Ошибка при загрузке</h3>}
      {posts &&
        posts.map((post) => (
          <PostItem
            update={updatePost}
            remove={deletePost}
            key={post.id}
            post={post}
          />
        ))}
    </div>
  );
}
