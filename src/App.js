import{ BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import Classes from './Components/Classes/Classes';
import About from './Components/About/About';


function App() {
  return (
    <div className="App">

<BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/events' element={<Events/>} />
          <Route path='/classes' element={<Classes/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
