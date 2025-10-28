"use client"
import React ,{useState,useRef}from 'react'
import ProjectCard from "./ProjectCards";
import ProjectTag from './ProjectTag';
import {motion,useInView} from "framer-motion"

const projectsData=[
  {
    id:1,
    title:"React Portfolio Website",
    description: "Project 1 description",
    image:"/images/projects/1.png",
    tag:["All","Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:2,
    title:"Potography Portfolio Website",
    description: "Project 2 description",
    image:"/images/projects/2.png",
    tag:["All","Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:3,
    title:"E-commerce Application",
    description: "Project 3 description",
    image:"/images/projects/3.png",
    tag:["All","Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:4,
    title:"Food Ordering Application",
    description: "Project 4 description",
    image:"/images/projects/4.png",
    tag:["All","Mobile"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:5,
    title:"React Firebase Template",
    description: "Project 5 description",
    image:"/images/projects/5.png",
    tag:["All","Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
  {
    id:6,
    title:"Full-stack Roadmap",
    description: "Project 6 description",
    image:"/images/projects/6.png",
    tag:["All","Web"],
    gitUrl:"/",
    previewUrl:"/"
  },
]

const ProjectSection = () => {
  const [tag,setTag]=useState("All")

  const ref=useRef(null);
  const isInView=useInView(ref,{once:true})
  const handleTabChange=(newTag)=>{
    setTag(newTag)
  }

  const filteredProjects=projectsData.filter((project)=>
    project.tag.includes(tag)
  )

  const cardVariants={
    initial:{y:50,opacity:0},
    animate:{y:0,opacity:1},
  }
  return (
    <section ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white 
      mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center
      gap-2 py-6">
       <ProjectTag 
       onClick={handleTabChange}
       name="All"
       isSelected={tag==="All"}
       />
       <ProjectTag 
       onClick={handleTabChange}
       name="Web"
       isSelected={tag==="Web"}
       />
       <ProjectTag 
       onClick={handleTabChange}
       name="Mobile"
       isSelected={tag==="Mobile"}
       />
      </div>
      <ul 
      
      className="grid md:grid-cols-3 gap-8 md:gap-12">
        {
          filteredProjects.map((project,index)=>(
            <motion.li 
            key={index}
            variants={cardVariants}
            initial="initial"
            whileInView={isInView ? "animate" : "initial"}
            transition={{duration:0.5,delay:index * 0.4}}>
              <ProjectCard
              // key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              />
            </motion.li>
          ))
        }
      </ul>
    </section>
  )
}

export default ProjectSection