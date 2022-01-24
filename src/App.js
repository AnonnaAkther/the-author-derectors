import './App.css';
import AddPlayer from './Pages/AddPlayer/AddPlayer';
import Authors from './Pages/Authors/Authors';
import Header from './Pages/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <AddPlayer></AddPlayer>
    <Authors></Authors>
    </div>
  );
}

export default App;
