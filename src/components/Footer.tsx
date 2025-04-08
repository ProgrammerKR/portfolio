import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8 md:flex-row justify-between items-center">
        <div className="flex flex-col gap-2">
          <span className="text-white text-[18px] font-bold">
            Portfolio <span className="text-[#915EFF]">3D</span>
          </span>
          <p className="text-secondary text-[14px]">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-white text-[16px] font-medium">Connect with me</h3>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#915EFF] transition-colors"
            >
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
