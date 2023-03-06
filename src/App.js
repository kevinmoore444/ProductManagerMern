import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Main from './views/Main';
import Details from './components/Details';
import Update from './components/Update';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path="/productDetails/:id" element={<Details/>}/>
        <Route path="/updateProduct/:id" element={<Update/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
