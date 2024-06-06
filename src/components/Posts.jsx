import { useState } from "react";
import posts from "./PostsObject";

function Posts() {
  const [postList, setPostList] = useState(posts);

  const handleDislikeClick = (postIndex) => {
    const newPostList = [...postList];
    if (newPostList[postIndex].likes != 0) {
      newPostList[postIndex].likes -= 1;
    }
    setPostList(newPostList);
  };

  const handleLikeClick = (postIndex) => {
    const newPostList = [...postList];
    newPostList[postIndex].likes += 1;
    setPostList(newPostList);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postList.map(({ id, title, content, likes }, index) => (
          <div class="post-item" key={id}>
            <div class="post-header">
              <h2>{title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{likes}</span>
              </div>
            </div>
            <p class="post-content">{content}</p>
            <div class="post-actions">
              <button
                class="like-button"
                onClick={() => handleLikeClick(index)}
              >
                Like
              </button>
              <button
                class="dislike-button"
                onClick={() => handleDislikeClick(index)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
