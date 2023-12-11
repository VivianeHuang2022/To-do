import './App.css';
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Footer from './components/Footer.jsx'
import ItemList from './components/ItemList.jsx'

function App() {
  
  const tasks = [
    { "task": "Read the project brief", "completed": true},
    { "task": "Create a project repository", "completed": false},
    { "task": "Create React application using Vite", "completed": false},
    { "task": "Finish Day 1 Development Tasks", "completed": false},
    { "task": "Finish Day 1 Research Tasks", "completed": false},
    { "task": "Finish Day 2 Development Tasks", "completed": false},
    { "task": "Finish Day 2 Research Tasks", "completed": false}
  ];

  return (
    <div className="App">
      <Navbar>  </Navbar>
      <div className='middleContent'>  

      <Sidebar> </Sidebar>
      <ItemList tasks={tasks} />
      
      </div>
      <Footer>  </Footer>

    </div>
  );
}

export default App;
