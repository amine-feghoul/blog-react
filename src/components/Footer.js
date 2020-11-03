import React from 'react'
import './Footer.css'
import { useForm } from "react-hook-form";
import Axios from 'axios';
function Footer() {
    const { register,handleSubmit, errors } = useForm();
    const onSubmit =   (data) => {
        console.log(JSON.stringify(data))   
        Axios.post('https://gentle-reaches-69689.herokuapp.com/messages', 
                   data 
          ).then((res)=>{
               if(res.status == 200){
                 alert("message added")
              }} 
        )
        // fetch('http://localhost:5000/messages',{
        //     method: 'post',
        //     mode:'no-cors',
        //     headers:{
        //         'Accept':'application/json',
        //         'Content-type':'application/json'
        //     },body:JSON.stringify(data)
        // }).then(res=>{
        //     if(res.status == 200){
        //         alert("message submited")}
        // })
    };
    
    return (
        <div className="footer-container">
           
            <div className="footer-wrapper"> 
                <div className="contact" id='contact'>
                    <h1> CONTACT</h1>
                    <div className ="contact-underline"/>
                    <p className="contact-question"> Have a question or want to work together?</p>
                    <form onSubmit={handleSubmit( onSubmit)}>
                    <input placeholder="Name" type="text" name="name" ref={register({ required: true, maxLength: 30 })} />
                    {errors.name && errors.name.type === "required" && <span className="errors">This is required</span>}
                    {errors.name && errors.name.type === "maxLength" && <span className="errors">Max length exceeded</span> }
                    <input placeholder="Enter email" type="email" name="email"ref={register({
                                                                                        required: "required",
                                                                                                        pattern: {
                                                                                                         value: /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
                                                                                                         message: "Entered value does not match email format"}})}/>

                    {errors.email && <span role="alert" className="errors">{errors.email.message}</span>}
                    <textarea placeholder="Your Message" type="text" name="message" ref={register({ required: true})}></textarea> 
                    {errors.message && errors.message.type === "required" && <span className="errors">Message    is required</span>}
                    
                    <input className="button" type="submit" id="submit" value="SUBMIT"></input>
                    </form>
                </div>
                <div className ="social-wrapper">
                  <div className ="social">
                    <a href="https://www.facebook.com/ishak.feghoul/"> <i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/amine_feghoul/"> <i className="fab fa-instagram"></i></a>
                    <a href="/"> <i className="fab fa-linkedin-in"></i></a>
                    <a href="/"> <i className="fab fa-github"></i></a>
                </div> 
               </div>

            </div>
            
        </div>
    )
}

export default Footer
