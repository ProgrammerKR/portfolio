import { useState } from 'react';
import { motion } from 'framer-motion';

// Project data
const projects = [
  {
    id: "project-1",
    title: "3D Product Configurator",
    description:
      "An interactive 3D product configurator built with Three.js and React. Users can customize colors, materials, and options in real-time with a responsive interface.",
    tags: ["React", "Three.js", "WebGL", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
  {
    id: "project-2",
    title: "WebGL Particle Animation",
    description:
      "A mesmerizing particle animation system created with WebGL. Features thousands of particles that respond to mouse movement and audio input with physics-based behaviors.",
    tags: ["WebGL", "GLSL", "JavaScript", "Canvas API"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
  {
    id: "project-3",
    title: "Interactive Portfolio Website",
    description:
      "A creative portfolio website with interactive 3D elements and scroll-based animations. Showcases work in a unique and engaging way with optimized performance.",
    tags: ["React", "Three.js", "Framer Motion", "GSAP"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
  {
    id: "project-4",
    title: "3D Data Visualization",
    description:
      "A sophisticated data visualization tool that renders complex datasets in 3D space. Provides interactive controls for exploring and analyzing data from multiple angles.",
    tags: ["D3.js", "Three.js", "React", "TypeScript"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
  {
    id: "project-5",
    title: "Immersive VR Experience",
    description:
      "A web-based virtual reality experience built with WebXR. Users can explore 3D environments with realistic lighting, physics, and interactive elements.",
    tags: ["WebXR", "Three.js", "React", "A-Frame"],
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
  {
    id: "project-6",
    title: "3D Game Demo",
    description:
      "A browser-based 3D game demo built with Three.js and Cannon.js physics. Features character controls, collision detection, and responsive game mechanics.",
    tags: ["Three.js", "Cannon.js", "JavaScript", "Game Development"],
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    source_code_link: "https://github.com",
    live_demo_link: "https://example.com",
  },
];

// Tag filtering
const allTags = [...new Set(projects.flatMap(project => project.tags))];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleFilterChange = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });
    }, 500);
  };

  return (
    <div className="pt-24 pb-12 px-6 md:px-12 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">My Projects</h2>
          <p className="text-secondary text-lg max-w-3xl mx-auto mb-8">
            A collection of creative and technical projects showcasing my skills in 3D web development,
            interactive design, and problem-solving.
          </p>

          <div className="flex flex-wrap gap-2 justify-center mb-6">
            <button
              onClick={() => handleFilterChange('All')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                ${activeFilter === 'All'
                  ? 'bg-[#915EFF] text-white'
                  : 'bg-tertiary text-secondary hover:text-white'}`}
            >
              All
            </button>

            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleFilterChange(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${activeFilter === tag
                    ? 'bg-[#915EFF] text-white'
                    : 'bg-tertiary text-secondary hover:text-white'}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.filter((project) => {
            if (activeFilter === 'All') return true;
            return project.tags.includes(activeFilter);
          }).map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-tertiary rounded-2xl overflow-hidden shadow-card hover:shadow-xl transition-shadow"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-end justify-end m-3">
                  <div className="flex space-x-2">
                    <a
                      href={project.source_code_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex justify-center items-center bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href={project.live_demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex justify-center items-center bg-black/50 backdrop-blur-sm hover:bg-black/70 transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-secondary mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={`${project.id}-${tag}`}
                      className="bg-black-100 px-3 py-1 rounded-full text-sm text-white/70"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
