import './App.css';
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './theme';
import Layout from './Layout';

function App() {


  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Layout />}>
            <Route path=":id" element={<HomePage />}>
            </Route>
          </Route>
          <Route />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
