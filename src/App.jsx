import './App.css'
import Landing from './pages/landing/landing'
import Services from './components/services';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './pages/login/login';
import RegisterForm from './pages/login/register';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}