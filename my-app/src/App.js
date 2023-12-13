import './App.css';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import ItemList from './components/ItemList.jsx'
import React, { useState } from 'react';

function App() {
  

    const [tasks, setTasks] = useState([
        { task: "Read the project brief", completed: true },
        { "task": "Create a project repository", "completed": false},
        { "task": "Create React application using Vite", "completed": false},
        { "task": "Finish Day 1 Development Tasks", "completed": false},
        { "task": "Finish Day 1 Research Tasks", "completed": false},
        { "task": "Finish Day 2 Development Tasks", "completed": false},
        { "task": "Finish Day 2 Research Tasks", "completed": false}
        
    ]);

    const updateTask = (index, newText) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].task = newText;
        setTasks(updatedTasks);
    };


    const deleteTask = (index, isCompleted) => {
      const updatedTasks = tasks.filter((task, i) => i !== index && task.completed === isCompleted);
      setTasks(updatedTasks);
  };
  
  const addTask = (isCompleted) => {
      const newTask = { task: "New Task", completed: isCompleted };
      setTasks([...tasks, newTask]);
  };

    // const deleteTask = (index) => {
    //     const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    //     setTasks(updatedTasks);
    // };

    // const addTask = () => {
    //     const newTask = { task: "New Task", completed: false };
    //     setTasks([...tasks, newTask]);
    // };

    return (
        <div className="App">
            <Navbar />
            <div className='middleContent'>
                <Sidebar />
                <ItemList
                    tasks={tasks}
                    onUpdateTask={updateTask}
                    onDeleteTask={deleteTask}
                    onAddTask={addTask}
                />
            </div>
            <Footer />
        </div>
    );
}

export default App;
  
// function App() {   
// const tasks = [
//     { "task": "Read the project brief", "completed": true},
//     { "task": "Create a project repository", "completed": false},
//     { "task": "Create React application using Vite", "completed": false},
//     { "task": "Finish Day 1 Development Tasks", "completed": false},
//     { "task": "Finish Day 1 Research Tasks", "completed": false},
//     { "task": "Finish Day 2 Development Tasks", "completed": false},
//     { "task": "Finish Day 2 Research Tasks", "completed": false}
//   ];

//   return (
//     <div className="App">
//       <Navbar>  </Navbar>
//       <div className='middleContent'>  

//       <Sidebar/>
//       <ItemList tasks={tasks} />
      
//       </div>
//       <Footer>  </Footer>

//     </div>
//   );
// }

// export default App;
