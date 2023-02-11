import "./App.css";
import Galery from "./components/galery/Galery.jsx";
import {Article} from './components/Article/Article.jsx'
import Header from "./components/header/Header.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Article/>
      <Galery />
    </div>
  );
}

export default App;
