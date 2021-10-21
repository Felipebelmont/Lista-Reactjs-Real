// React
import React, { useEffect, useState } from "react";
import axios from "axios";
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Estilos
import "./App.css";

// Components 
import AddTask from "./components/AddTask";
import Tasks  from "./components/Tasks";
import Header from "./components/Header";
import TaskDetails from "./components/TaskDetalis";

const App = () => { 
    const [tasks, setTasks] = useState([
        {
            id: '1',
            title: 'Estudar Programação',
            completed: false,
        },
        {
            id: '2',
            title: 'Ler Livros',
            completed: true,
        },
    ]);
    useEffect(() => {
        const fetchTasks = async () => {
            const { data } = await axios.get(
                "https://jsonplaceholder.cypress.io/todos?_limit=1"   
            );
            setTasks(data);
        };     
        fetchTasks(); 

    }, [])

    const handleTaskClick = (taskId) => {
        const newTasks = tasks.map( task => {
            if (task.id == taskId) return {... task, completed: !task.completed};
                return task;
            });
        setTasks(newTasks);
    };

//Adicionar task
    const handleTaskAddition = (taskTitle) => {
        const newTasks = [... tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    setTasks(newTasks);
  };
  // Deletar task
  const handleTaskDeletion = (taskId) => {
      const newTasks = tasks.filter(task => task.id != taskId)
      setTasks(newTasks);
  };
  
  

   return (
       <Router>
       <div className="container">
           <Header/>
           <Route 
           path="/" 
           exact
           render={() => (
               <>
               <AddTask handleTaskAddition={handleTaskAddition}/>
               <Tasks 
                    tasks={tasks} 
                    handleTaskClick={handleTaskClick} 
                    handleTaskDeletion={handleTaskDeletion} />
               </> 

           )}/>
            <Route path="/:taskTitle" exact component={TaskDetails} />
       </div>
       </Router>
   );
    
};

export default App;