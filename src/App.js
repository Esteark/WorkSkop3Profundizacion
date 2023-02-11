import "./App.css";
import Galery from "./components/galery/Galery.jsx";
import { Article } from "./components/Article/Article.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Article />
      <Galery />
      <Footer />
    </div>
  );
}

export default App;
