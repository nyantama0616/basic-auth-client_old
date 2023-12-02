import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Renewal/Layout';

import PingPage from './Renewal/PingPage';
import SignUpPage from './Renewal/SignUpPage';
import ProfilePage from './Renewal/ProfilePage';
import EditProfilePage from './Renewal/EditProfilePage';

import "./Renewal/SignUpPage";

import './App.css';

function App() {  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout></Layout>}></Route>
          <Route path="/pong" element={<Layout><PingPage sx={{ backgroundColor: "#eeeeee"}} message="ping" /></Layout>}></Route>
          <Route path="/sign-up" element={<Layout><SignUpPage sx={{ backgroundColor: "#eeeeee", }} /></Layout>}></Route>
          <Route path="/profile" element={<Layout><ProfilePage sx={{ backgroundColor: "#eeeeee", }} /></Layout>}></Route>
          <Route path="/edit-profile" element={<Layout><EditProfilePage sx={{ backgroundColor: "#eeeeee", }} /></Layout>}></Route>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
