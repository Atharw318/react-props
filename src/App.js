import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Body from './Body';

function App() {
  const name ="saddassa"
  return (
    <div className="App">
      <Header name={name}/>
      <Body name={name}/>
    </div>
  );
}

export default App;
