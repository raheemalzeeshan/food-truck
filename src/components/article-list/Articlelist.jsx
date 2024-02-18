import React from 'react'
import Slider from '../slider/Slider'
import "../../assets/css/article-list.css";

export default function Articlelist() {
  return (
    <section className='article-list'>
      <div className="container">
          <h2>Latest Articles</h2>
        <Slider/>
      </div>
    </section>
  )
}
