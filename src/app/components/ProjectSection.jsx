"use client";
import React,{useState,useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion,useInView} from "framer-motion"

const projectData =[
    {
        id:1,
        title:"Airbnb Clone",
        image:"./images/projects/airbnb.png",
        description:"Airbnb clone app with fully functional booking system.",
        tag:["All","Web"],
        previewUrl:"https://airbnbclone-app.onrender.com/",
        gitUrl:"/",
    },
    {
        id:2,
        title:"ValoStats",
        image:"./images/projects/valostats.png",
        description:"ValoStats website is a platform offering a detailed overview of Valorant, providing game information and valuable insights to help players improve their gameplay.",
        tag:["All","Web"],
        previewUrl:"https://adityamali918.github.io/VALOSTATS/",
        gitUrl:"/",
    },
    {
        id:3,
        title:"Car Auction",
        image:"./images/projects/caraction.jpg",
        description:"Online car auction platform that allows user to bid on vechicles virtually.",
        tag:["All","Web"
    ],
        previewUrl:"/",
        gitUrl:"/",
        
    },
    {
        id:4,
        title:"MongoStore",
        image:"./images/projects/mongo.png",
        description:"Mongostore: Stylish clothing meets simplicity with Tailwind CSS. Enjoy a direct shopping experience, powered by MongoDB Atlas and efficient client-side functions, no backend required..",
        tag:["All","Web"],
        previewUrl:"https://store-hk24.onrender.com",
        gitUrl:"/",
    },
]

const ProjectSection = () => {
    const [tag,setTag]=useState("All");

    const ref =useRef(null);
    const isInView = useInView(ref,{once:true})

    const handleTabChange=(newTag)=>{
        setTag(newTag);
    }

    const filterProjects = projectData.filter((project)=>{
        return project.tag.includes(tag);
    })

    const cardVariants ={
        initial:{y:50,opacity:0},
        animate:{y:0,opacity:1},
    };

  return (
    <>
    <section id="project">
        <h2>
            My Projects
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
           <ProjectTag onClick={handleTabChange} name="All" isSelected={tag==="All"}/>
           <ProjectTag onClick={handleTabChange} name="Web" isSelected={tag==="Web"}/>
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-10 '>
            {filterProjects.map((prject,index)=>
            <motion.li 
            variants={cardVariants}
             initial="initial" 
             animate={isInView? "animate":"initial"} 
             transition={{duration:0.3 , delay:index*0.4}}
            key={index}
            >
                 <ProjectCard key={prject.id} title={prject.title} description={prject.description} imgUrl={prject.image} 
                 gitUrl={prject.gitUrl} previewUrl={prject.previewUrl}
            /> </motion.li>)}
        </ul>
    </section >
    </>
  )
}

export default ProjectSection