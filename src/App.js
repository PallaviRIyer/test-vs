import './App.css';
import EmpListing from './EmpListing';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path ='/' element={<EmpListing/>}>

      </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
