import React,{useState} from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
function Navbar() {
    const [click,setClick] = useState(false)
    const clickHandler =()=>{
        setClick(!click)
    }
    return (
        <div className="navbar-conatiner">
            <div className="navbar-wrapper">
                <div className='nav-logo'>
                    <a href='/'>
                    <h1> AMINE </h1>
                    </a>
                </div>
                <div className={click? "nav-links active":"nav-links"} >
                    <ul className ='links'>
                        <li>
                           <Link to='landing' smooth={true} duration={1000}> <span>HOME</span>
                           <i className="fas fa-home"></i> </Link>
                        </li>
                        <li>
                           <Link to='about' smooth={true} duration ={1000}> <span>ABOUT</span>
                           <i className="fas fa-info"></i></Link>
                        </li>
                        <li>
                           <Link to='projects' smooth={true} duration ={1000}> <span>PROJECTS</span>
                           <i className="fas fa-project-diagram"></i></Link>
                        </li>
                        <li>
                           <Link to='contact' smooth={true} duration ={1000}> <span>CONTACT</span>
                           <i className="far fa-address-book"></i></Link>
                        </li>
                    </ul>
                   
                </div>
                <div className='menu-icon'>
                        <i className = {click? 'fas fa-times':"fas fa-bars" } onClick={clickHandler}></i>
                </div>
            </div>
        </div>
    )
}

export default Navbar
