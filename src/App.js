import logo from './logo.svg';
import './App.css';
import Category from "./Category";

function App() {
  var categories = ["Home", "School", "Work"]

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
      {categories.map(category =>
        <Category title={category} />
      )}
    </div>
  );
}

export default App;
