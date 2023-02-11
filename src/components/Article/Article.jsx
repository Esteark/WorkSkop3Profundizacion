import React from "react";
import img from '../../assets/desktop/image-interactive.jpg'
import './styles.scss'
export const Article = () => {
 return(
    <article className="article">
    <img src={img} className="article__imagen"></img>
    <section className="article__section">
        <h1>THE LEADER IN INTERACTIVE VR</h1>
        <p>Founded un 2011, loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-minning creations have transformed businsesses through digital experiences that bind to their brand.</p>
    </section>
    </article>
 )
}