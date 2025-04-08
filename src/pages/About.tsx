import { motion } from 'framer-motion';

// Skills data
const skills = [
  {
    title: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind", "Next.js"]
  },
  {
    title: "3D & Animation",
    items: ["Three.js", "React Three Fiber", "WebGL", "GLSL", "Framer Motion"]
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "GraphQL", "Firebase"]
  },
  {
    title: "Tools",
    items: ["Git", "Webpack", "Vite", "Figma", "Blender", "VS Code"]
  }
];

// Experience data
const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Tech Company",
    period: "2020 - Present",
    description: "Led the development of interactive 3D web applications using React and Three.js. Implemented responsive designs and optimized performance for complex 3D scenes."
  },
  {
    title: "Web Developer",
    company: "Creative Agency",
    period: "2018 - 2020",
    description: "Designed and developed modern websites and web applications with a focus on user experience and performance. Collaborated with designers to implement creative visions."
  },
  {
    title: "Junior Developer",
    company: "Startup",
    period: "2016 - 2018",
    description: "Built and maintained responsive websites. Contributed to frontend applications using modern JavaScript frameworks and CSS preprocessors."
  },
];

const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
      x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.8,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

const About = () => {
  return (
    <div className="pt-24 pb-12 px-6 md:px-12 min-h-screen">
      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        animate="show"
        className="max-w-7xl mx-auto"
      >
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-[#915EFF] mx-auto"></div>
        </div>

        <motion.div
          variants={fadeIn('up', 0.3)}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 gap-12 mb-20"
        >
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Who I Am</h3>
            <p className="text-secondary leading-relaxed mb-4">
              I'm a passionate 3D web developer with expertise in creating immersive digital experiences.
              I combine the power of Three.js and React to build interactive and visually stunning web applications.
            </p>
            <p className="text-secondary leading-relaxed">
              With a background in both design and development, I bring a unique perspective to every project.
              I'm constantly exploring new technologies and techniques to push the boundaries of what's possible on the web.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Education & Background</h3>
            <div className="border-l-2 border-[#915EFF] pl-4">
              <div className="mb-4">
                <h4 className="text-white font-medium">Bachelor's in Computer Science</h4>
                <p className="text-secondary">University Name, 2016</p>
              </div>
              <div className="mb-4">
                <h4 className="text-white font-medium">3D Design Certification</h4>
                <p className="text-secondary">Design Institute, 2018</p>
              </div>
              <div>
                <h4 className="text-white font-medium">Advanced WebGL Course</h4>
                <p className="text-secondary">Online Platform, 2020</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          className="mb-20"
        >
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillGroup, index) => (
              <div
                key={index}
                className="bg-tertiary rounded-xl p-6 shadow-card hover:shadow-xl transition-shadow"
              >
                <h4 className="text-xl font-medium text-white mb-4">{skillGroup.title}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-primary px-3 py-1 rounded-full text-secondary text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          animate="show"
        >
          <h3 className="text-3xl font-semibold text-white mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-tertiary rounded-xl p-6 shadow-card hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-wrap justify-between items-start mb-2">
                  <h4 className="text-xl font-medium text-white">{exp.title}</h4>
                  <span className="text-[#915EFF] font-medium">{exp.period}</span>
                </div>
                <p className="text-secondary mb-3">{exp.company}</p>
                <p className="text-white/70">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
