import React from 'react'
import './Skill.css'
function Skill(props) {
  const style ={
      width: props.level
  }
    return (
        <div className="skill">
            <div className="skill-name">
                <h4>{props.title} </h4>
            </div>
            <div className="skill-level">
                <div className="skill-level-fill" style= {style}>
                      
                </div>
                
            </div>
    <p className="level-percent"> {props.level}</p>
        </div>
    )
}

export default Skill
