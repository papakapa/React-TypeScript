import React, {useState} from 'react';
import NavBar from "./components/NavBar";
import ToDoForm from "./components/ToDoForm";

const App : React.FC = () => {

    const [todos, setTodos] = useState([]);

    const addHandler = (title : string) => {
      console.log('Add new todo : ',title);
    };

  return (
    <>
      <NavBar />
      <div className="container">
          <ToDoForm onAdd={addHandler} />
      </div>
    </>
  );
}

export default App;
