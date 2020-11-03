import Axios from 'axios'
import React,{useState,useEffect} from 'react'
import { Link } from 'react-scroll'
import Project from './Project'
import './Projects.css'
function Projects() {
    const [allProjects,setAllProjects] = useState(false)

    const [currentPage,setCurrentPage] =useState(1)
    const [projectsPerPage, setProjectsPerPage] = useState(3)
    const [projects,setProjects] = useState([])
    const displayProjects=(projects)=>{
            const lastIndex = currentPage*projectsPerPage
            const firstIndex = lastIndex - projectsPerPage
            const cureentProjects = projects.slice(firstIndex,lastIndex)
            return cureentProjects.map(project=> <Project key ={project.id} title ={project.title} description={project.description} image={project.image} logo={project.logo} path={project.path}/>)
    }

    useEffect(() => {
        Axios.get('https://gentle-reaches-69689.herokuapp.com/projects').then(result=> {
                            console.log(result.data)
                            setProjects(result.data)}).catch(err=>console.log(err))
    }, [])
    if(projects.length>0){
    return (
        <div className="projects-container" id ="projects">
            <h1> Projects </h1>
        <div className="paginator">
            <div className ={(allProjects && projects.length>6)?"projects-arrow" : "not-displayed" }>
        <a  id="projects-left-arrow"> <i className="fas fa-angle-left"></i></a>
             </div>
        <div className="projects-wrapper">
        {displayProjects(projects)}  
        </div>
        <div className ={(allProjects && projects.length>6)?"projects-arrow" : "not-displayed" }>
        <a  id="projects-right-arrow"> <i className="fas fa-angle-right"></i></a>
        
        </div></div>
            <Link onClick ={()=>{
                setAllProjects(true)
                setProjectsPerPage(6)
                {displayProjects(projects)}  
            }} className ={(allProjects && projects.length>3)?"not-displayed" : "displayed"} to="projects" smooth={ true} duration ={100}> see all project </Link>
            
            <Link onClick ={()=>{
                setAllProjects(false)
                setProjectsPerPage(3)
                {displayProjects(projects)}  
            }} className ={(allProjects && projects.length>3)?"displayed" : "not-displayed" } to="projects" smooth={true} duration={1000}> see less </Link>
        </div>
    )
}else{
    return(
        <div></div>
    )
}
}

export default Projects
