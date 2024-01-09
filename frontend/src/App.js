import './App.css';
import Nav from './Components/Nav/Nav';
import LeftPane from './Container/LeftPane/LeftPane';
import RightPane from './Container/RightPane/RightPane';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <LeftPane />
          <RightPane />
      </BrowserRouter>
    </div>
  );
}

export default App;
