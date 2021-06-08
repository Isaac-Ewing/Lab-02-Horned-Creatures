import logo from './logo.svg';
import data from './data.js';
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';

function App() {
  return (
    <div className="App">
      <ImageList data={data}/>
  </div>
  );
}

export default App;
