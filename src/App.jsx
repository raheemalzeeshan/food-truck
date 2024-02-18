import React from 'react'
import Header from './components/header/Header'
import About from './components/about/About'
import { Footer } from './components/footer/Footer'
import Slider from './components/slider/Slider'
import Card from './components/card/Card';
import cardOne from './assets/images/article/grilled-tomatoes.jpg';
import Articlelist from './components/article-list/Articlelist'

export default function App() {
  return (
    <>
      <Header/>
      <main>
        <About/>
       <Articlelist/>
        <Footer/>
      </main>
    </>
  ) 
}
