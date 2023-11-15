import {Routes, Route} from 'react-router-dom';

import NavbarComponent from './components/NavbarComponent';

import Landing from './pages/Landing';
import Article from './pages/Article/Articles';
import DetailArticle from './pages/Article/DetailArticle'
import About from './pages/About/About'
import Doctor from './pages/Doctor/Doctor'

import FooterComponent from './components/FooterComponent';

function App() {

  return <div>
    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={Landing}/>
      <Route path="artikel" Component={Article}/>
      <Route path="detailArtikel" Component={DetailArticle}/>
      <Route path="tentang" Component={About}/>
      <Route path="dokter" Component={Doctor}/>
    </Routes>

    <FooterComponent/>
  </div>
}

export default App
