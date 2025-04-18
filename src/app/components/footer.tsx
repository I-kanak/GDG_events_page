
"use client"
import { FaDiscord, FaXTwitter, FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText("gdscmitofficial@mitwpu.edu.in");
    alert("Email address copied to clipboard!");
  };

  return (
    <footer className="footer mt-32 text-white p-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <img src="/gdg_logo.png" alt="Logo" className="w-40 h-auto sm:ml-10" />
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <a href="https://www.linkedin.com/in/gdscmitwpu/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="text-gray-400" />
          </a>
          <a href="https://www.instagram.com/gdgmitwpu/" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="text-gray-400" />
          </a>
          <a href="https://x.com/gdgmitwpu" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={24} className="text-gray-400" />
          </a>
          <a onClick={copyToClipboard} className="cursor-pointer">
            <FaEnvelope size={24} className="text-gray-400" />
          </a>
          <a href="https://discord.gg/VYPupwcU" target="_blank" rel="noopener noreferrer">
            <FaDiscord size={24} className="text-gray-400" />
          </a>
        </div>
      </div>
      <div className="mt-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} GDG MITWPU
      </div>
    </footer>
  );
};

export default Footer;
