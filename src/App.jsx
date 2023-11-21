import React from 'react';
import { Container } from "@mui/material";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './pages/Main.jsx';
import "./main.css"
import { Series } from './pages/Series.jsx';
import { Movies } from './pages/Movies.jsx';

export default function App() {
  return (
    <Container sx={{ mt: 5 }}>
     
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Series' element={<Series />} />
          <Route path='/Movies' element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </Container>
  ) 
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
