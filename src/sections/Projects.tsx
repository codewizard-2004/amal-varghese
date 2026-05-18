import React, { useState } from 'react';
import Masonry from '../components/Masonry/Masonry';
import ProjectModal from '../components/ProjectModal/ProjectModal';
import './Projects.css';

const projects = [
  {
    id: "1",
    img: "/src/assets/projects/expense-tracker.jpeg",
    url: "#",
    height: 400,
    title: "Expense Tracker",
    description: "Expense Tracker is an Langgraph based app which automates the process of verifying bills inccured during a company trip. Just upload your receipt it will validate it against policy document to automatically approve or flag",
    tags: ["React Native", "FastAPI", "Langchain", "Langgraph", "supabase"],
    githubUrl: "https://github.com/codewizard-2004/expence-tracker",
    demoUrl: "#"
  },

  {
    id: "2",
    img: "/src/assets/projects/foodnet.png",
    url: "#",
    height: 250,
    title: "FoodNet",
    description: "Implementation of Different CNN architectures using PyTorch/ONNX and RAG using Langchain",
    tags: ["next.js", "FastAPI", "Langchain", "pytorch", "onnx", "supabase"],
    githubUrl: "https://github.com/codewizard-2004/FoodNet",
    demoUrl: "#"
  },
  {
    id: "3",
    img: "/src/assets/projects/epistula.png",
    url: "#",
    height: 500,
    title: "Epistula AI",
    description: "An AI-powered cover letter and email generator that helps job seekers create compelling, personalized application materials in seconds.",
    tags: ["next.js", "FastAPI", "Langchain", "supabase"],
    githubUrl: "https://github.com/codewizard-2004/Epistula",
    demoUrl: "#"
  },
  {
    id: "4",
    img: "/src/assets/projects/bookbridge.png",
    url: "#",
    height: 350,
    title: "BookBridge",
    description: "Mobile-first reading companion that blends personalized tracking, social engagement, and AI-assisted recommendations so readers can set goals, stay motivated, and resume across devices with real-time progress sync.",
    tags: ["React", "PWA", "Framer Motion"],
    githubUrl: "https://github.com/codewizard-2004/BookBridge",
    demoUrl: "#"
  },
  {
    id: "5",
    img: "/src/assets/projects/vitalia.png",
    url: "#",
    height: 450,
    title: "Vitalia AI",
    description: "Vitalia.ai is a mobile app designed to empower Indian consumers by providing transparency and personalized insights into food and cosmetic products.",
    tags: ["React Native", "Django", "pytorch", "supabase"],
    githubUrl: "https://github.com/codewizard-2004/Vitalia.ai"
  },
  {
    id: "6",
    img: "https://picsum.photos/id/1035/600/850?grayscale",
    url: "#",
    height: 500,
    title: "Portfolio Template",
    description: "An open-source, highly customizable portfolio template designed for developers and designers to showcase their work effortlessly.",
    tags: ["HTML", "CSS", "Vanilla JS"],
    githubUrl: "https://github.com/codewizard-2004",
    demoUrl: "#"
  },
  {
    id: "7",
    img: "https://picsum.photos/id/1043/600/600?grayscale",
    url: "#",
    height: 300,
    title: "Real-time Chat Application",
    description: "A real-time messaging application supporting private chats, group channels, read receipts, and media sharing.",
    tags: ["React", "Socket.io", "Redux", "Express"],
    githubUrl: "https://github.com/codewizard-2004",
    demoUrl: "#"
  },
  {
    id: "8",
    img: "https://picsum.photos/id/1045/600/800?grayscale",
    url: "#",
    height: 550,
    title: "AI Image Generator Interface",
    description: "A clean interface interacting with stable diffusion APIs to generate images from text prompts, featuring a gallery of generated creations.",
    tags: ["React", "Zustand", "Tailwind CSS"],
    githubUrl: "https://github.com/codewizard-2004",
    demoUrl: "#"
  }
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <section className="projects-section" id="projects">
      <div className="projects-header">
        <h2>Selected Projects</h2>
        <p>A glimpse into some of my recent work and experiments.</p>
      </div>
      <div className="masonry-container">
        <Masonry
          items={projects}
          ease="power1.out"
          duration={0.6}
          stagger={0.04}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={true}
          onItemClick={handleProjectClick}
        />
      </div>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </section>
  );
};

export default Projects;
