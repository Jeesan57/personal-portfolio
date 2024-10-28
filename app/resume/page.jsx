"use client";

import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

//About Data
const about = {
  title: "About Me",
  description: "Lorem insum dolor sit amet consectetur adipisicing elit. Volupatates quibusdam, sunt explicabo inventore.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Jeesan"
    },
    {
      fieldName: "Phone",
      fieldValue: "(+880) 1639024898"
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Years"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Bangladeshi"
    },
    {
      fieldName: "Email",
      fieldValue: "waliurrahman957@gmail.com"
    },
    
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Language",
      fieldValue: "English, Bangla"
    },
  ]
}

//Experience Data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Lorem insum dolor sit amet consectetur adipisicing elit. Volupatates quibusdam, sunt explicabo inventore",
  items: [
    {
      company: "Tech Solution Inc.",
      position: "Full Stack Developer.",
      duration: "2022 - Present",
    },
    {
      company: "Web Design Studio",
      position: "Front-End Developer Intern",
      duration: "Summer 2021",
    },
    {
      company: "E-commerce Startup",
      position: "Freelance Web Developer.",
      duration: "2020 - 2021",
    },
    {
      company: "Tech Academy",
      position: "Teaching Assistant",
      duration: "2018 - 2019",
    },
    {
      company: "Digital Agency",
      position: "UI/UX Designer",
      duration: "2018 - 2019",
    },
    {
      company: "Software Developer Firm",
      position: "Junior Developer",
      duration: "2018 - 2019",
    },
  ]
}

//Education Data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem insum dolor sit amet consectetur adipisicing elit. Volupatates quibusdam, sunt explicabo inventore.",
  items: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Web Developer Bootcamp.",
      duration: "2023",
    },
    {
      institution: "Code Academy",
      degree: "Front-end Track.",
      duration: "2022",
    },
    {
      institution: "Online Course",
      degree: "Programming Course",
      duration: "2020 - 2021",
    },
    {
      institution: "North South University",
      degree: "Bachelor",
      duration: "2020 - 2024",
    },
    {
      institution: "Tech Institute",
      degree: "Certified Web Developer",
      duration: "2016 - 2018",
    },
  ]
}

//Skills Data
const skills = {
  title: "My Skills",
  description: "Lorem insum dolor sit amet consectetur adipisicing elit. Volupatates quibusdam, sunt explicabo inventore.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "Html5"
    },
    {
      icon: <FaCss3 />,
      name: "CSS3"
    },
    {
      icon: <FaJs />,
      name: "Javascript"
    },
    {
      icon: <FaReact />,
      name: "React.js"
    },
    {
      icon: <FaFigma />,
      name: "Figma"
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css"
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js"
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js"
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { motion } from "framer-motion";



const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn"},
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-8"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              experience
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
  
}

export default Resume