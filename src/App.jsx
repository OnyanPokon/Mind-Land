import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";

import Landing from "./pages/Landing";
import Article from "./pages/Article/Articles";
import DetailArticles from "./pages/Article/DetailArticles";
import About from "./pages/About/About";
import Doctor from "./pages/Doctor/Doctor";

import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/articles" Component={Article} />
        <Route path="/article" Component={DetailArticles} />
        <Route path="/about" Component={About} />
        <Route path="/doctor" Component={Doctor} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
