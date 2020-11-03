import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import './About.css'
import Field from './Field'
import Info from './Info'

function About() {
    const [fields,setFields]= useState([])
    useEffect(() => {
        Axios.get('https://gentle-reaches-69689.herokuapp.com/fields').then(result=>setFields(result.data)).catch(err=>console.log(err))
    }, [])
    const displayFields=()=>{

        const result = fields.map(field =>{ 
            console.log(field)
            return <Field icon_class={field.icon} title ={field.title} text = {field.text} key={field.id}/>})
        return result
    }



    return (
        <div className="about-container" id ="about">
           < div className="about-wrapper"> 
                <h1 className="about-header"> About </h1>
              
                <div className="personal-info">
                    <Info/>
                </div>
                <div className='fields'> 
                    {displayFields()}
                </div>
           </div>
        </div>
    )
}

export default About
