import './App.css';
import Category from "./components/Category";
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

  const deleteCategoryHandler = (name) => {
    console.log(name);
    for(var i = 0; i < categories.length; i++){
      if(categories[i].name === name){
        delete categories[i];
      }
    }
  }


  const [tasks, setTasks] = useState(dummyTasks);

  const addTaskHandler = task => {
    setTasks(prevTasks => {
      return [task, ...prevTasks];
    })
  }

  return (
    <div className="App">
      <AddItems categories={categories} onAddTask={addTaskHandler} onAddCategory={addCategoryHandler}/>
      {categories.map(category =>
        <Category key={category.id} name={category.name} tasks={tasks} onCategoryDelete={deleteCategoryHandler}/>
      )}
    </div>
  );
}

export default App;
