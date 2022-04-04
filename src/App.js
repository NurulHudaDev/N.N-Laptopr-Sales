
import './App.css';
import Navigation from './components/Navigation/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Blog from './components/Blog/Blog.jsx';
import About from './components/About/About.jsx';

import NotFound from './components/NotFound/NotFound.jsx';



function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
