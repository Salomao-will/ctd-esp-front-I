import React, { useState } from "react";
import useTodo from "./hooks/useTodo";
import formatDate from "./utils/date";

import { FiTrash2, FiEdit } from "react-icons/fi";

import "./App.css";

export default function App() {
  const { addTodo, error, isFetching, todos, editTodo, deleteTodo } = useTodo();

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  // const [tarefas, setTarefas] = useState([]);
  // const [tarefaEditando, setTarefaEditando] = useState(null);

  const [id, setId] = useState("");

  if (isFetching) {
    return <h3>Carregando...</h3>;
  }

  if (error) {
    return <h3>Erro ao buscar dados </h3>;
  }

  function fillStates(todo) {
    setId(todo._id);
    setTitle(todo.title);
    setDescription(todo.description);
    setCategory(todo.category);

    const dateFormated = todo.date.split("T")[0];
    setDate(dateFormated);
  }

  function clearState() {
    setCategory("");
    setDescription("");
    setDate("");
    setTitle("");
  }

  /* function adicionarTarefa() {
    if (!title || !date || !description) {
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      texto: tarefa,
      date,
      description,
      category,
    };

    setTarefas([...tarefas, novaTarefa]);
    settitle("");
    setdate("");
    setdescription("");
    setcategory("");
  }

  function excluirTarefa(id) {
    setTarefas(tarefas.filter((t) => t.id !== id));
  }

  function editarTarefa(id) {
    const tarefaSelecionada = tarefas.find((t) => t.id === id);
    setTarefaEditando(tarefaSelecionada);
    settitle(tarefaSelecionada.texto);
    setdate(tarefaSelecionada.date);
    setdescription(tarefaSelecionada.description);
    setcategory(tarefaSelecionada.category);
  }

  function salvarTarefaEditada() {
    const novasTarefas = [...tarefas];
    const index = novasTarefas.findIndex((t) => t.id === tarefaEditando.id);
    novasTarefas[index].texto = title;
    novasTarefas[index].date = date;
    novasTarefas[index].description = description;
    novasTarefas[index].category = category;
    setTarefas(novasTarefas);
    settitle("");
    setdate("");
    setdescription("");
    setcategory("");
    setTarefaEditando(null);
  }
  */

  return (
    <div className="container">
      <div className="form">
        <h2>Cadastrar tarefa</h2>
        <label className="info" htmlFor="title">
          Título
        </label>
        <input
          type="text"
          id="title"
          placeholder="Digite o título da sua tarefa"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label className="info" htmlFor="category">
          Categoria
        </label>
        <select
          id="category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        >
          <option value="">Selecione uma categoria</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
          <option value="Prioridade">Prioridade</option>
          <option value="Outros">Outros</option>
        </select>
        <label className="info" htmlFor="date">
          Data
        </label>
        <input
          type="date"
          id="date"
          placeholder="Digite a data"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />
        <label className="info" htmlFor="description">
          Descrição
        </label>
        <input
          type="text"
          id="description"
          placeholder="Digite uma descrição para a sua tarefa"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        {/* <button onClick={adicionarTarefa}>Adicionar</button> */}
        <button
          className="button"
          onClick={() => {
            if (id) {
              editTodo({
                payload: { title, date, description, category },
                id: id,
              });
              setId(null);
            } else {
              addTodo({ title, date, description, category });
            }
            clearState();
          }}
        >
          Salvar
        </button>
      </div>

      <div className="component">
        <h2>Minhas tarefas</h2>
        <ul>
          {todos.map((todo, index) => (
            <div className="component-info" key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.category}</p>
              <p>{formatDate(todo.date)}</p>
              <p>{todo.description}</p>
              <FiEdit
                className="icon"
                size="20"
                color="green"
                onClick={() => fillStates(todo)}
              />
              <FiTrash2
                className="icon"
                size="20"
                color="red"
                onClick={() => deleteTodo(todo._id)}
              />
            </div>
          ))}
        </ul>
      </div>

      {/* {tarefaEditando && (
        <>
          <h2>Editando a tarefa "{tarefaEditando.texto}"</h2>
          <input
            type="text"
            value={title}
            onChange={(event) => settitle(event.target.value)}
          />
          <input
            type="date"
            value={date}
            onChange={(event) => setdate(event.target.value)}
          />
          <input
            type="text"
            value={description}
            onChange={(event) => setdescription(event.target.value)}
          />
          <select
            id="category"
            value={category}
            onChange={(event) => setcategory(event.target.value)}
          >
            <option value="">Selecione uma category</option>
            <option value="trabalho">Trabalho</option>
            <option value="estudos">Estudos</option>
            <option value="lazer">Lazer</option>
          </select>
          <button onClick={salvarTarefaEditada}>Salvar</button>
        </>
      )}
      */}
    </div>
  );
}
