import { motion } from 'framer-motion';
import Scene from '../components/Canvas';

const Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div className="container px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-white md:text-7xl">
              <span className="block">Hello, I'm</span>
              <span className="mt-2 block text-[#915EFF]">A 3D Developer</span>
            </h1>
            <p className="mt-6 text-lg text-secondary md:text-xl max-w-2xl mx-auto">
              Building stunning web experiences with React, Three.js, and modern web technologies.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="mt-10"
            >
              <a
                href="#about"
                className="px-8 py-3 text-lg font-medium text-white bg-tertiary rounded-xl hover:bg-[#915EFF] transition-colors"
              >
                Explore My Work
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center">
        <div className="animate-bounce w-6 h-10 flex justify-center items-start">
          <svg
            aria-hidden="true"
            focusable="false"
            className="w-6 h-6 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Home;
