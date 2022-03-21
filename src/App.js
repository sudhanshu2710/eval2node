import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [task, setTask] = useState([]);
  const fetchData = () => {
    fetch(`http://127.0.0.1:8000/task`, {
      method: "GET",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("deel");
        console.log(data.data.tours);
        setTask([...data.data.tours]);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  // console.log(task);
  const handleDel = (id) => {
    fetch(`http://127.0.0.1:8000/task/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json;charset=UTF-8",
      },
    });
    fetchData();
  };
  return (
    <div className="App">
      <div>
        <span>____ title ____</span>
        <span>____ status ____ </span>
        <span>____ subTask ____ </span>
      </div>
      <div>
        {task.map((elem) => (
          <div>
            <span>____ {elem.title} ____</span>
            <span>____ {elem.status ? "yes" : "no"} ____ </span>
            <span>____ {elem.subtask} ____ </span>
            <span>
              <button
                onClick={() => {
                  handleDel(elem._id);
                }}
              >
                delete
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
