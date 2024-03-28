import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Catalogs } from './pages/Catalogs';
import { Details } from './pages/Details';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalogs />} />
        <Route path="details/:itemId" element={<Details />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
