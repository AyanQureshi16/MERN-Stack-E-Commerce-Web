import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;