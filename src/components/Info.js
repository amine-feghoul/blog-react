import React,{useState,useEffect} from 'react'
import mypic from './mypic.jpg'
import './Info.css'

import Skill from './Skill'
import Axios from 'axios'
function Info() {
//     const skils =[
//         {
//             title:"react",
//             level:'20%'
//                     },
//         {
//             title:"react",
//             level:'20%'
//                     },
//                     {
//                         title:"react",
//                         level:'20%'
//                                 },
//                                 {
//                                     title:"react",
//                                     level:'20%'
//                                             }              
// ]
const [skills,setSkills] = useState([])
const [text,setText] = useState('')
    useEffect(() => {
        Axios.get("https://gentle-reaches-69689.herokuapp.com/skills").then(result=>{
                                                                 
                                                                setSkills(result.data)}).catch()
         Axios.get("https://gentle-reaches-69689.herokuapp.com/texts").then(result=>{
                                                                
                                                                setText(result.data[0].personalInfo)}).catch(err=>console.log(err))                                                        
    }, [])
   
    const displaySkills =()=>{
        const items = skills 
        const result = items.map((skill)=>{ 
          return  <Skill title ={ skill.title} level ={ skill.level} key={skill.id} />
        })
        return result
        }
    return (
        <div className="info-container">
            <div className="info-picture">
        
            </div>

            <div className="info-text" >
                <h2> who is this guy ?!</h2>
                <p> {text}</p>
            </div>
            <div className='Skills'>
                    {displaySkills()}
            </div>
        </div>
    )
}

export default Info
