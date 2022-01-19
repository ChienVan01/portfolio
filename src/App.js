import { useContext } from "react";
import "./App.css";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ListSkill from "./components/listSkill/ListSkill";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { themeContext } from "./context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        background: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Intro />
      <About />
      <ListSkill />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
