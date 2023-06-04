import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Component/Layout/Header";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import MyWork from "./Component/MyWork/MyWork";
import Contact from "./Component/Contact/Contact";
import Skill from "./Component/Skill/Skill";
import Footer from "./Component/Layout/Footer";

function App() {
  document.title='Anup Portfolio...'
  return (
    <div className="App">
      <Header />
      <Home />
      <br />
      <About />
      <Skill />
      <MyWork />
      <Contact />
   <Footer />
    </div>
  );
}

export default App;
