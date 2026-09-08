import type Post from "../models/Post";

export default function PostItem({
  post,
  remove,
  update,
}: {
  post: Post;
  remove: (post: Post) => void;
  update: (post: Post) => void;
}) {
  function handleRemove(e: React.MouseEvent) {
    e.stopPropagation();
    remove(post);
  }
  function handleUpdate(e: React.MouseEvent) {
    const title = prompt() ?? "";
    update({ ...post, title });
  }

  return (
    <div className="post" onClick={handleUpdate}>
      {`${post.id}. ${post.title}`}
      <button onClick={handleRemove}>delete</button>
    </div>
  );
}
