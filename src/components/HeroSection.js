import React from 'react'
import {Button} from './Button'
import './HeroSection.css'
import '../App.css'

function Herosection() {
    return (
        <div className="hero-container">
            <video src="/videos/video-2.mp4" autoPlay loop muted/>
            <h1>ADVETURES AWAIT</h1>
            <p>What are you waiting for?</p>
            <div className="hero-btns">
                <Button className="btn trasparent" buttonStyle='btn--outline' buttonStyle="btn-large" >
                    GET STARTED
                </Button>
                <Button className="btn" buttonStyle='btn--primary' buttonStyle="btn-large">
                    WATCH TRAILER
                    <i className="far fa-play-circle"/>
                </Button>
            </div>
        </div>
    )
}

export default Herosection 
