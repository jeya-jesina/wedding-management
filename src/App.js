import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Services from './pages/Services';

import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/footer';
import Events from './pages/Events';
import Bridaldress from './components/Events/bridal dress/bridaldress';
import Stage from './components/Events/stage decor/stage';
import Flower from './components/Events/flower decor/flower';
import Mehandi from './components/Events/mehandi/mehandi';
import Photo from './components/Events/photograph/photo';
import Music from './components/Events/music/music';
import Cakes from './components/Events/cakes/cakes';
import Drums from './components/Events/drums/drums';
import Jwellery from './components/Events/jwellery/jwellery';
import Catering from './components/Events/catering/catering';
import Haldi from './components/Events/haldi/haldi';
import CartPage from './components/product/CartPage';
import Reception from './components/Events/reception/Reception';
import Reviews from './pages/Reviews';
import BookingPage from './components/product/BookingPage';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path='/Login'element={<Login/>}/>
    <Route path='/About'element={<About/>}/>
    <Route path='/Events'element={<Events/>}/>
    <Route path='/Services'element={<Services/>}/>
    
    <Route path='/Contact'element={<Contact/>}/>
    <Route path='/bridaldress'element={<Bridaldress/>}/>
    <Route path='/CartPage'element={<CartPage/>}/>
    <Route path='/booking' element={<BookingPage/>}/>
    <Route path="/booking" element={<BookingPage />} />
    <Route path='/Stage'element={<Stage/>}/>
    <Route path='/flower'element={<Flower/>}/>
    <Route path='/mehandi'element={<Mehandi/>}/>
    <Route path='/photo'element={<Photo/>}/>
    <Route path='/music'element={<Music/>}/>
    <Route path='/cakes'element={<Cakes/>}/>
    <Route path='/drums'element={<Drums/>}/>
    <Route path='/jwellery'element={<Jwellery/>}/>
    <Route path='/catering'element={<Catering/>}/>
    <Route path='/haldi'element={<Haldi/>}/>
    <Route path='/Reception'element={<Reception/>}/>
    <Route path='/Reviews' element={<Reviews />} />
</Routes>
    <Footer/>
</BrowserRouter>
    </>
  ) 
}
export default App;
