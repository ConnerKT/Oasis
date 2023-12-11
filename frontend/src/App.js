import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <LandingPage/> }></Route>
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
