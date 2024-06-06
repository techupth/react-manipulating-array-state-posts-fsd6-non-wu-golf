import { useState } from "react";

function Posts() {
  const [postData, setPostData] = useState([
    {
      id: 1,
      title: "Paper Clips",
      content:
        "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
      likes: 61,
    },
    {
      id: 2,
      title: "Born to Kill",
      content:
        "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
      likes: 46,
    },
    {
      id: 3,
      title: "Ten Shrews, The (Kymmenen riivinrautaa)",
      content:
        "Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
      likes: 50,
    },
    {
      id: 4,
      title: "Ciel est Ã  vous, Le (Woman Who Dared, The)",
      content: "Maecenas ut massa quis augue luctus tincidunt.",
      likes: 3,
    },
    {
      id: 5,
      title: "Tigger Movie, The",
      content: "Aenean sit amet justo.",
      likes: 66,
    },
    {
      id: 6,
      title: "Cat People",
      content:
        "Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      likes: 70,
    },
    {
      id: 7,
      title: "Brooklyn Castle",
      content:
        "In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
      likes: 46,
    },
    {
      id: 8,
      title: "Snow Angels",
      content:
        "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
      likes: 1,
    },
    {
      id: 9,
      title: "Rose Tattoo, The",
      content: "Curabitur in libero ut massa volutpat convallis.",
      likes: 20,
    },
    {
      id: 10,
      title: "It's A Wonderful World",
      content:
        "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien.",
      likes: 6,
    },
  ]);

  const increaseLikes = (index) => {
    let newPostdata = [...postData];
    newPostdata[index].likes += 1;
    setPostData(newPostdata);
  };
  const decreaseLikes = (index) => {
    let newPostdata = [...postData];
    if (newPostdata[index].likes > 0) {
      newPostdata[index].likes -= 1;
      setPostData(newPostdata);
    }
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((item, index) => {
          return (
            <div className="post-item" key={index}>
              <div className="post-header">
                <h2>
                  {item.title} #{item.id}
                </h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => increaseLikes(index)}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => decreaseLikes(index)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
