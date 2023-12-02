import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Template from './Template';

import TopPage from './pages/TopPage';
import PingPage from './pages/PingPage';
import CreateUserPage from './pages/CreateUserPage';

import './App.css';

function App() {  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Template><TopPage sx={{backgroundColor: "#eeeeee"}} /></Template>}></Route>
          <Route path="/ping" element={<Template><PingPage sx={{backgroundColor: "#eeeeee"}} /></Template>}></Route>
          <Route path="/create-user" element={<Template><CreateUserPage sx={{backgroundColor: "#eeeeee"}} /></Template>}></Route>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
