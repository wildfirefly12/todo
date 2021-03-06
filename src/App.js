import './App.css';
import Category from "./components/category/Category";
import React, {useState} from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import AddCategory from "./components/category/AddCategory";

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

  const deleteCategoryHandler = (category) => {
    setCategories(categories.filter(c => c !== category));

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
      return [task, ...prevTasks]
    })
  }

  const deleteTaskHandler = (task) => {
    setTasks(tasks.filter(t => t !== task));
  }

  const editTaskHandler = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id));

    setTasks(prevTasks => {
          return [task, ...prevTasks]
        })
  }

  const [addingTask, setAddingTask] = useState(false);
  const [category, setCategory] = useState("");

  const setAddingTaskState = (category) => {
    setAddingTask(!addingTask);
    setCategory(category);
  }

  const showAddTask = () => {
    if(addingTask){
      return (
          <div>
            <div className={"addTaskOverlay"}></div>
            <AddTask className={"addTaskWindow"} onAddTask={addTaskHandler} category={category} setAddingState={setAddingTaskState} handleSearchTasks={handleSearchTasks}/>
          </div>
      );
    } else {
      return "";
    }
  }

  const [addingCategory, setAddingCategory] = useState(false);

  const setAddingCategoryState = () => {
    setAddingCategory(!addingCategory);
  }

  const showAddCategory = () => {
    if(addingCategory){
      return (
          <div>
            <div className={"addTaskOverlay"}></div>
            <AddCategory className={"addTaskWindow"} addCategoryHandler={addCategoryHandler} setAddingCategoryState={setAddingCategoryState}/>
          </div>
      );
    } else {
      return "";
    }
  }

 const [filter, setFilter] = useState("");

  const handleSearchTasks = (searchTerm) => {
    setFilter(searchTerm);
  }

  const handleClearSearch = () => {
    setFilter("");
  }

  return (
    <div className="App">
      <Header handleSearchTasks={handleSearchTasks} handleClearSearch={handleClearSearch} setAddingCategoryState={setAddingCategoryState}/>
      {showAddTask()}
      {showAddCategory()}
      {categories.map(category =>
        <Category
            key={category.id}
            category={category}
            tasks={tasks}
            searchTerm={filter}
            onCategoryDelete={deleteCategoryHandler}
            onTaskDelete={deleteTaskHandler}
            onCategoryEdit={editCategoryHandler}
            onTaskEdit={editTaskHandler}
            setAddingState={setAddingTaskState}
        />
      )}
    </div>
  );
}

export default App;
