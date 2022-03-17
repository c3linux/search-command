import './App.css';
import Navbar from './Navbar';
import SearchApp from './SearchApp';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import PostCommand from './PostCommand';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes> <Route exact={true} path="/" element={<SearchApp/>}/>
      <Route path="/postcommand" element={<PostCommand/>}/></Routes>
     
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;
