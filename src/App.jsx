import './App.css'
import Landing from './pages/landing/landing'
import Services from './components/services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}