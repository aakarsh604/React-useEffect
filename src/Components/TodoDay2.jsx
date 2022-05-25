import React, { useEffect, useState } from "react";
import axios from "axios";

const TodoDay2 = () => {
  const [page, setpage] = useState(1);
  const [limit, setlimit] = useState(3);
  const [totalCount, settotalCount] = useState(0);
  const [todos, settodos] = useState([]);
  useEffect(() => {
    const getTodo = async () => {
      let r = await axios.get(
        `http://localhost:8080/todos?_page=${page}&_limit=${limit}`
      );
      settotalCount(Number.parseInt(r.headers["x-total-count"]));
      settodos(r.data);
    };
    getTodo();
  }, [page, limit]);
  return (
    <div className="App">
      <button
        disabled={page <= 1}
        onClick={() => {
          if (page > 1) {
            setpage(page - 1);
          }
        }}
      >{`<`}</button>
      <select onChange={(e)=> setlimit(Number(e.target.value))}>
        <option value={3}>3</option>
        <option value={6}>6</option>
        <option value={9}>9</option>
      </select>
      <button
      disabled={page*3 >= totalCount}
        onClick={() => {
          setpage(page + 1);
        }}
      >{`>`}</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.id}
          {` : `}
          {todo.text}
        </div>
      ))}
      
    </div>
  );
};

export default TodoDay2;
