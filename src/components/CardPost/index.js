import { Card, CardHeader, ListGroup, ListGroupItem, Button } from "reactstrap";

function CardPost({ post, posts, setPosts }) {
  function handleDelete(msg) {
    //Deletar um post tenho que filtrar a minha array menos algume que foi deletado
    let filtedPosts = posts.filter((post) => {
      return post.message !== msg;
    });

    setPosts(filtedPosts);
  }

  return (
    <Card
      style={{
        width: "18rem",
        height: "auto",
      }}
    >
      <CardHeader style={{ color: post.onLimit ? "red" : "green" }}>  //Renderizacao 
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
          onClick={() => handleDelete(post.message)}  //precisa passar uma funcao anonima Callback
        >
          Deletar
        </Button>
        <Button size="sm">Editar</Button>
      </ListGroup>
    </Card>
  );
}

export default CardPost;
