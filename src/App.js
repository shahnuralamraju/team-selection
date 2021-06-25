import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Componants/Header/Header';
import ShowPlayer from './Componants/ShowPlayer/ShowPlayer'


function App() {
  return (
    <div>
      <div className="header">
        <div className="app">
          <Header></Header>
        </div>
      </div>
      <div className="app">
        <ShowPlayer></ShowPlayer>
      </div>
      
    </div>
  );
}

export default App;
