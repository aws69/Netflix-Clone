import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
