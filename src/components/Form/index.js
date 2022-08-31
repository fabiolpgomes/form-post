import { useState } from "react";
import { Button, Input, Label } from "reactstrap";

function Form({ posts, setPosts }) {
  const [form, setForm] = useState({
    about: "",
    lvlDif: "",
    onLimit: false,
    nickname: "",
    message: "",
  });

  function handleChange(e) {
    e.preventDefault();

    if (e.target.name === "onLimit") {
      setForm({ ...form, [e.target.name]: !form.onLimit });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  console.log(form);

  function handleSubmit(e) {
    e.preventDefault();
    //salvar o meu form dentro da minha array de posts
    let updatedList = [...posts, form];

    setPosts(updatedList);

    //limpar o form
    setForm({
      about: "",
      lvlDif: "",
      onLimit: false,
      nickname: "",
      message: "",
    });
  }

  return (
    <div className="container">
      <h1>Escreva seu post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Label>Nickname</Label>
          <Input
            type="text"
            name="nickname"
            value={form.nickname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Assunto</Label>
          <Input
            type="text"
            name="about"
            value={form.about}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Nível de Dificuldade</Label>
          <Input onChange={handleChange} name="lvlDif" type="select" required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </Input>
        </div>
        <div>
          <Label>Mensagem</Label>
          <Input
            type="text"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <Label>Você está no limite?</Label>
          <Input
            type="checkbox"
            name="onLimit"
            checked={form.onLimit}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" color="success" size="lg">
          Salvar
        </Button>
      </form>
    </div>
  );
}

export default Form;
