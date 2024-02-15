import { useState } from "react";
import "tachyons";

const deserts_obj = [
  {
    id: "1",
    title: "A",
    desc: "desc",
    image: "https://picsum.photos/200/300/?random",
    price: "10",
  },
  {
    id: "2",
    title: "B",
    desc: "desc",
    image: "https://picsum.photos/200/300/?random",
    price: "20",
  },
  {
    id: "3",
    title: "C",
    desc: "desc",
    image: "https://picsum.photos/200/300/?random",
    price: "30",
  },
];

const topDeser = deserts_obj.map((des) => {
  const content = `${des.title} - ${des.desc} - ${des.price}`;
  return <li>{content}</li>;
});

const ToDo = (props) => (
  <tr>
    <td>
      <label>{props.id}</label>
    </td>
    <td>
      <input />
    </td>
    <td>
      <label>{props.createdAt}</label>
    </td>
  </tr>
);

function Map() {
  const [todos, setTodos] = useState([
    {
      id: "todo-1",
      createdAt: "18:00",
    },
    {
      id: "todo-2",
      createdAt: "20:00",
    },
  ]);

  const reverse = () => {
    setTodos([...todos].reverse());
  };

  return (
    <div>
      <div className="bg-light-red">
        <h1>Use of Map()</h1>
        <ul class="list pl0">{topDeser}</ul>
      </div>

      <div className="bg-light-purple">
        <h1>Use of Map() and Keys</h1>
        <table>
          <tbody>
            {todos.map((todo) => (
              <ToDo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
            ))}
          </tbody>
          <button onClick={reverse}>Reverse</button>
        </table>
      </div>
    </div>
  );
}

export default Map;
