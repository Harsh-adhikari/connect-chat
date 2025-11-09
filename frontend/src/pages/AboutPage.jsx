import { Github, Linkedin, Instagram, User, MessageSquare, Link, X, TwitchIcon, Twitter } from "lucide-react";

const AboutPage = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/Harsh-adhikari", // Replace with your GitHub
      color: "hover:text-gray-900 dark:hover:text-gray-100",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/harsh-adhikari1001/", // Replace with your LinkedIn
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "https://www.instagram.com/harsh_adhikari010/", // Replace with your Instagram
      color: "hover:text-pink-600",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "https://x.com/HarshAdhik16222", // Replace with your Instagram
      color: "hover:text-pink-600",
    },
  ];

  return (
    <div className="min-h-screen bg-base-200">
      <div className="max-w-6xl mx-auto px-4 py-20">
        {/* About Me Section */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-8 h-8  text-blue-900" />
              <h2 className="card-title text-2xl">About the Developer</h2>
            </div>
            
            <div className="space-y-4 text-base-content/80">
              <p className="text-lg">
                Hi, I'm <span className="font-bold text-blue-900 dark:text-blue-900 text-xl"> <a href="https://eclectic-sorbet-478204.netlify.app/">Harsh Adhikari</a></span> —                a web developer and the creator of this chat application. I built this platform 
                as a learning project to explore real-time communication using Socket.io, and 
                also simply for fun.
              </p>
              
              <p>
                This project reflects my interest in modern web technologies and building 
                interactive, functional user experiences. Feel free to use the chat, test 
                features, and enjoy experimenting with it.
              </p>

              <p>
                If you'd like to connect with me or follow my work, you can find me on the 
                platforms listed below.
              </p>

              <div className="bg-base-200 p-4 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">Key Features:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Real-time messaging with Socket.io</li>
                  <li>Secure authentication with JWT</li>
                  <li>Image sharing with Cloudinary integration</li>
                  <li>Multiple theme options</li>
                  <li>Profile customization</li>
                  <li>Online/offline status tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Technologies Used</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "React", color: "bg-blue-500" },
                { name: "Node.js", color: "bg-green-600" },
                { name: "MongoDB", color: "bg-green-700" },
                { name: "Socket.io", color: "bg-gray-800" },
                { name: "Tailwind CSS", color: "bg-cyan-500" },
                { name: "Express", color: "bg-gray-700" },
                { name: "Cloudinary", color: "bg-blue-600" },
                { name: "DaisyUI", color: "bg-purple-600" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className={`${tech.color} text-white p-4 rounded-lg text-center font-semibold shadow-md`}
                >
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Connect With Me</h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline gap-2 ${link.color} transition-all`}
                >
                  {link.icon}
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Feedback Form Section */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex items-center gap-3 mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
              <h2 className="card-title text-2xl">Send Feedback</h2>
            </div>
            
            <p className="text-base-content/70 mb-4">
              Have suggestions or found a bug? I'd love to hear from you!
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfX_JUVPZuVG-nVLDxyWDjBN_urrjITNca_jim6prZ8GF_9Eg/viewform?usp=sf_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full gap-2"
            >
              <MessageSquare className="w-5 h-5" />
              Open Feedback Form
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;