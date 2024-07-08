import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Login, Board } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" Component={Login} />
        <Route path="*" Component={Board} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
