import { useEffect, useState } from 'react';
import { Header } from './Components/Header';
import { AddTask } from './Components/AddTask';
import { ShowTask } from './Components/ShowTask';
import './App.css';
import { Footer } from './Components/Footer';
function App() {
  const storedTaskList = localStorage.getItem('taskList');
  const initialTaskList = storedTaskList ? JSON.parse(storedTaskList) : [];
  const [taskList, setTaskList] = useState(initialTaskList)
  const [task, setTask] = useState({})
  useEffect(() => {
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }, [taskList])
  return (
    <div className="App">
      <Header />
      <AddTask
        taskList={ taskList }
        setTaskList={ setTaskList }
        task={ task }
        setTask={ setTask }
      />
      <ShowTask
        taskList={ taskList }
        setTaskList={ setTaskList }
        task={ task }
        setTask={ setTask } />
      <Footer />

    </div>
  );
}

export default App;
