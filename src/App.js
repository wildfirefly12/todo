import './App.css';
import Category from "./components/category/Category";
import React, {useState} from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";

function App() {
  var dummyCategories = [
    {id: 1, name: "Home", taskCount: 0},
    {id: 2, name: "Work", taskCount: 0},
    {id: 3, name: "School", taskCount: 1},
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
    setCategories(categories.filter(c => c.name !== name));

  }

  const editCategoryHandler = (prevName, category) => {
    setCategories(categories.filter(c => c.id !== category.id));

    setCategories(prevCategories => {
      return [category, ...prevCategories];
    })

    for(let i = 0; i < tasks.length; i++){
      if(tasks[i].category === prevName) {
        tasks[i].category = category.name;
        editTaskHandler(tasks[i]);
      }
    }

  }

  const [tasks, setTasks] = useState(dummyTasks);

  const addTaskHandler = (task) => {
    setTasks(prevTasks => {
      return [task, ...prevTasks];
    })
  }

  const deleteTaskHandler = (task) => {
    setTasks(tasks.filter(t => t !== task));
    console.log(tasks)
  }

  const editTaskHandler = (task) => {
    console.log(task);
    setTasks(tasks.filter(t => t.id !== task.id));

    setTasks(prevTasks => {
      return [task, ...prevTasks];
    })
  }

  const [adding, setAdding] = useState(false);
  const [category, setCategory] = useState("");

  const setAddingState = (category) => {
    setAdding(!adding);
    setCategory(category);
  }

  const showAdd = () => {
    if(adding){
      return (
          <div>
            <div className={"addTaskOverlay"}></div>
            <AddTask className={"addTaskWindow"} onAddTask={addTaskHandler} category={category} setAddingState={setAddingState}/>
          </div>
      );
    } else {
      return "";
    }
  }

  return (
    <div className="App">
      <Header/>
      {showAdd()}
      {categories.map(category =>
        <Category
            key={category.id}
            category={category}
            tasks={tasks}
            onCategoryDelete={deleteCategoryHandler}
            onTaskDelete={deleteTaskHandler}
            onCategoryEdit={editCategoryHandler}
            onTaskEdit={editTaskHandler}
            setAddingState={setAddingState}
        />
      )}
    </div>
  );
}

export default App;
