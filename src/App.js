import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from './components/pages/Signup';
import Reset from './components/pages/Reset';
import Login from './components/pages/Login';
import Dashboard from "./components/pages/Dashboard";
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/signup" element={<Layout><Signup /></Layout>} />
        <Route exact path="/login" element={<Layout><Login /></Layout>} />
        <Route exact path="/reset" element={<Layout><Reset /></Layout>} />
        <Route exact path="*" element={'404 not found'} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
