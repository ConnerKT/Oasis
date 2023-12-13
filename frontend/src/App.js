import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <LandingPage/> }></Route>
        <Route path="/login" component={LoginPage} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
