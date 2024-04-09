import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header';
import { Catalogs } from './pages/Catalogs';
import { About } from './pages/About';
import { NotFound } from './pages/NotFound';
import { Details } from './pages/Details';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Catalogs />} />
        <Route path="details" element={<Details />} />
        <Route path="about" element={<About />} />
        <Route path="catalogs" element={<Catalogs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
