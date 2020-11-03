import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-scroll'
import './Landing.css'
function Landing() {
    const [text,setTexts] =useState('')

    useEffect(() => {
        Axios.get("https://gentle-reaches-69689.herokuapp.com/texts").then(reslt=>{
        console.log("result is " + reslt.data[0].landing)    
        setTexts(reslt.data[0].landing)} ).catch(err=>console.log(err))
       
    }, [])
    return (
        <div className ="landing-container" id="landing">
            <div className="shade-landing">
            <div className ="landing">
         
                <div className ="landing-text">
                    
                <p>{text}</p>
                </div>
                <div className ="landing-btns">
                    <Link className="landing-btn-see-my-work" to="projects" smooth={true} duration={1000} > See my Work <i className="fas fa-arrow-right"></i></Link>
                    <Link className="landing-btn-contact" to='contact' smooth={true} duration={1000} > Contact Me </Link>
                </div>
            </div>
        </div></div>
    )
}

export default Landing
