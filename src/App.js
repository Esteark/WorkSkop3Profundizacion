import "./App.css";
import {Article} from './components/Article/Article.jsx'
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Article/>
    </div>
  );
}

export default App;
