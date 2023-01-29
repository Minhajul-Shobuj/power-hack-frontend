import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import TopBar from "../../component/topbar/Topbar";

const Home = ({ setLoginUser }) => {
  const [todo, setTodo] = useState([]);
  useEffect(() => {
    fetch("./fakedata.json")
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, []);
  return (
    <div>
      <TopBar></TopBar>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Status</th>
            <th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
          {todo.map((data) => (
            <tr>
              <td>{data.title}</td>
              <td>{data.category}</td>
              <td>{data.status}</td>
              <td>{data.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Home;
