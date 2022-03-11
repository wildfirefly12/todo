import logo from './logo.svg';
import './App.css';
import Category from "./Category";
import AddTask from "./AddTask";

function App() {
  var categories = [
    {id: 1, name: "Home"},
    {id: 2, name: "Work"},
    {id: 3, name: "School"},
  ]

  var tasks = [
    {
      id: 1,
      category: "School",
      title: "Homework",
      description: "Time to study"
    }
  ]


  return (
    <div className="App">
      <AddTask/>
      {categories.map(category =>
        <Category key={category.id} title={category.name} tasks={tasks}/>
      )}
    </div>
  );
}

export default App;
