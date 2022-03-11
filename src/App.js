import logo from './logo.svg';
import './App.css';
import Category from "./components/Category";
import AddTask from "./components/AddTask";
import React, {useState} from "react";
import AddItems from "./components/AddItems";

function App() {
  var dummyCategories = [
    {id: 1, name: "Home"},
    {id: 2, name: "Work"},
    {id: 3, name: "School"},
  ]

  var dummyTasks = [
    {
      id: 1,
      category: "School",
      title: "Homework",
      description: "Time to study"
    }
  ]

  const [categories, setCategories] = useState(dummyCategories);

  const addCategoryHandler = category => {
    setCategories(prevCategories => {
      return [category, ...prevCategories];
    })
  }

  const [tasks, setTasks] = useState(dummyTasks);

  const addTaskHandler = task => {
    setTasks(prevTasks => {
      console.log(task);
      return [task, ...prevTasks];
    })
  }

  return (
    <div className="App">
      <AddItems categories={categories} onAddTask={addTaskHandler} onAddCategory={addCategoryHandler}/>
      {categories.map(category =>
        <Category key={category.id} title={category.name} tasks={tasks}/>
      )}
    </div>
  );
}

export default App;
