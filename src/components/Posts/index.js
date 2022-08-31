import CardPost from "../CardPost";
import { Input, Label } from "reactstrap";
import { useState } from "react";

function Posts({ posts, setPosts }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="container">
      <h1>Os posts de hoje</h1>
      <div className="posts">
        {posts
          .filter((post) => {
            return (
              post.about.toLowerCase().includes(search.toLowerCase()) ||
              post.nickname.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((post) => {
            return (
              <CardPost
                post={post}
                key={post.message}
                setPosts={setPosts}
                posts={posts}
              />
            );
          })}
      </div>
      <div className="search">
        <Label>Pesquisar por assunto</Label>
        <Input
          placeholder="Pesquisar..."
          onChange={handleChange}
          value={search}
        />
      </div>
    </div>
  );
}

export default Posts;
