import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";

import "./style.css";

function App() {
  return (
    <>
      <div className="todo-list">
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <Header />
      <Footer />
    </>
  );
}

export default App;
