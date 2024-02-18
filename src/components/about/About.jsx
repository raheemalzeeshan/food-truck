import React from 'react'
import aboutImage from "../../assets/images/about-us.jpg"
import Button from "../button/Button";
import "../../assets/css/about.css";
export default function About() {
  return (
    <section className='about'>
        <div className="container">
            <div className="about-warp">
                <div className="about-media">
                    <img src={aboutImage} alt="about us" />
                </div>
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.</p>
                    <Button link="#" class="btn btn-fill" btnName="Read More" />
                </div>
            </div>
        </div>
    </section>
  )
}
