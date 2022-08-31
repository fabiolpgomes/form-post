import { Card, CardHeader, ListGroup, ListGroupItem, Button } from "reactstrap";

function CardPost({ post, posts, setPosts }) {
  function handleDelete(message) {
    let filtedPost = posts.filter((post) => {
      return post.message !== message;
    });

    setPosts(filtedPost);
  }

  return (
    <Card
      style={{
        width: "18rem",
        height: "auto",
      }}
    >
      <CardHeader style={{ color: post.onLimit ? "red" : "green" }}>
        {post.about}
      </CardHeader>
      <ListGroup flush className="list">
        <ListGroupItem>De 0 a 5? {post.lvlDif}</ListGroupItem>

        <ListGroupItem>
          "{post.message}" - {post.nickname}
        </ListGroupItem>
        <Button
          color="danger"
          size="sm"
          onClick={() => handleDelete(post.message)}
        >
          Deletar
        </Button>
        <Button size="sm">Editar</Button>
      </ListGroup>
    </Card>
  );
}

export default CardPost;
