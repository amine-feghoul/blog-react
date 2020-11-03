import React from 'react'
import './Project.css'
function Project(props) {
    return (
        <div className="project">
            <div className="project-img">
            <img  src={props.image} alt='project pic'/>
            </div>
           
            <div className='project-info'>
               <div className="project-logo" >
                   <img src={props.logo}alt='logo'/>
               </div>
                    <div className="project-text">
                   <h3 className="project-title"> {props.title}</h3>
                    <p className="project-description">{props.description} </p>
               </div>
                
            </div>
            <a href={props.path} className="project-path"> See Project</a>
        </div>
    )
}

export default Project 