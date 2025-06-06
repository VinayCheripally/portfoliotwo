import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code, 
  Database, 
  Server, 
  Brain,
  Award,
  Calendar,
  GraduationCap,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typedText, setTypedText] = useState('');
  
  const roles = ['Backend Developer', 'Full Stack Developer', 'AI Enthusiast', 'Problem Solver'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= currentRole.length) {
        setTypedText(currentRole.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentRoleIndex]);

  const skills = {
    languages: ['Golang', 'Python', 'C/C++', 'JavaScript', 'Java', 'SQL', 'Solidity', 'Scala'],
    frameworks: ['Node.js', 'Flask', 'Express.js', 'Django', 'FastAPI', 'Apache Spark', 'Selenium', 'Playwright'],
    tools: ['Git', 'Docker', 'VS Code', 'Kubernetes', 'Tableau', 'Azure'],
    libraries: ['Pandas', 'NumPy', 'Matplotlib', 'TensorFlow', 'Scikit-learn']
  };

  const experiences = [
    {
      title: 'Full Stack Developer Intern',
      company: 'QuadricIT',
      location: 'Hyderabad',
      period: '05/2025 – 07/2025',
      type: 'On-site',
      achievements: [
        'Improved translation accuracy by increasing BERTScore to 0.65 using Gemini 2.5 Flash',
        'Reduced translation time from 3 minutes to 1 minute using Golang multithreading',
        'Implemented MongoDB vector search for efficient context-aware translations'
      ]
    },
    {
      title: 'Full Stack Developer Intern',
      company: 'Gunaworks',
      location: 'Bangalore',
      period: '06/2024 – 09/2024',
      type: 'Remote',
      achievements: [
        'Developed React-based web application for automated test script generation',
        'Integrated external APIs with real-time updates and error handling',
        'Implemented features like syntax highlighting and cookie management'
      ]
    }
  ];

  const projects = [
    {
      title: 'VoiceTodo',
      period: 'Jan 2024 – Mar 2024',
      description: 'Python command-line application for voice-controlled task management with SMS reminders',
      technologies: ['Python', 'Click', 'pyttsx3', 'Twilio', 'Gemini API', 'tkinter'],
      features: [
        'Voice command functionality via SpeechRecognition',
        'SMS notifications using Twilio API',
        'Text-to-speech reminders for improved accessibility'
      ],
      github: '#'
    },
    {
      title: 'EcomFlow',
      period: 'Sep 2024 – Oct 2024',
      description: 'Complete e-commerce backend with RESTful APIs and comprehensive documentation',
      technologies: ['MongoDB', 'Express.js', 'Node.js', 'Swagger', 'Docker'],
      features: [
        'RESTful APIs for authentication and product management',
        'MongoDB with Mongoose for efficient data modeling',
        'Docker containerization and Swagger documentation'
      ],
      github: '#'
    },
    {
      title: 'Essay Evaluator',
      period: 'Mar 2024 – May 2024',
      description: 'AI-powered essay evaluation system with comprehensive scoring and feedback',
      technologies: ['Django', 'OpenAI API', 'HTML/CSS', 'PostgreSQL'],
      features: [
        'OpenAI integration for comprehensive essay evaluation',
        'Google authentication for secure access',
        'Responsive design with intuitive user interface'
      ],
      github: '#'
    }
  ];

  const achievements = [
    'Knight in LeetCode (max-1997)',
    '3-Star in CodeChef (max-1777)',
    'Specialist in Codeforces (max-1501)',
    'Top 5% participant in Adobe GenSolve Hackathon 2024',
    'Open Source Contributor to Meshery (Golang)',
    'Time series model for Odisha government Electricity prediction'
  ];

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-400">
              Vinay Cheripally
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-gray-300 hover:text-blue-400'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white p-2"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-slate-700"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-teal-400 to-orange-400 bg-clip-text text-transparent">
              Vinay Cheripally
            </h1>
            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
              <span className="text-blue-400">{typedText}</span>
              <span className="animate-pulse">|</span>
            </div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Motivated B.Tech (CSE) student with expertise in Backend development, Machine learning, 
              and AI-driven web applications, eager to contribute to impactful projects.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="mailto:vinaycheripally1@gmail.com"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors"
            >
              <Mail size={20} />
              Get In Touch
            </a>
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-6 py-3 rounded-lg transition-colors"
            >
              <Code size={20} />
              View Projects
            </button>
          </div>

          <div className="flex justify-center gap-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:vinaycheripally1@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I'm a passionate Computer Science student at IIITM Gwalior with a strong foundation in 
                backend development, machine learning, and AI-driven applications. My journey in tech 
                has been marked by competitive programming achievements and hands-on industry experience.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Through internships at QuadricIT and Gunaworks, I've developed expertise in full-stack 
                development, working with cutting-edge technologies like Golang, Python, and modern web frameworks.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin size={20} className="text-blue-400" />
                  <span>Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <GraduationCap size={20} className="text-blue-400" />
                  <span>B.Tech CSE</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-6 text-blue-400">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Award size={16} className="text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Code className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold">Languages</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <span key={skill} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-400 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-teal-400" size={24} />
                <h3 className="text-xl font-semibold">Frameworks</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill) => (
                  <span key={skill} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-400 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-orange-400" size={24} />
                <h3 className="text-xl font-semibold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-purple-400 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <Brain className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold">Libraries</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.libraries.map((skill) => (
                  <span key={skill} className="bg-slate-700 px-3 py-1 rounded-full text-sm text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-slate-800 p-8 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-400 mb-2">{exp.title}</h3>
                    <p className="text-lg text-gray-300 mb-2">{exp.company}</p>
                    <div className="flex items-center gap-4 text-gray-400">
                      <div className="flex items-center gap-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <span className="bg-slate-700 px-2 py-1 rounded text-sm">{exp.type}</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <ChevronRight size={16} className="text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-slate-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-400">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-all hover:transform hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                  <a href={project.github} className="text-gray-400 hover:text-blue-400 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <p className="text-gray-400 text-sm mb-4">{project.period}</p>
                <p className="text-gray-300 mb-6">{project.description}</p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-slate-700 px-2 py-1 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <ChevronRight size={14} className="text-teal-400 mt-1 flex-shrink-0" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-400">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborating on interesting projects, 
            or just having a conversation about technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:vinaycheripally1@gmail.com"
              className="flex items-center justify-center gap-3 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-blue-400 transition-colors"
            >
              <Mail className="text-blue-400" size={24} />
              <div>
                <div className="font-semibold">Email</div>
                <div className="text-gray-400 text-sm">vinaycheripally1@gmail.com</div>
              </div>
            </a>
            
            <a
              href="tel:+919441372773"
              className="flex items-center justify-center gap-3 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-400 transition-colors"
            >
              <Phone className="text-teal-400" size={24} />
              <div>
                <div className="font-semibold">Phone</div>
                <div className="text-gray-400 text-sm">+91 9441372773</div>
              </div>
            </a>
            
            <a
              href="#"
              className="flex items-center justify-center gap-3 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-orange-400 transition-colors"
            >
              <Linkedin className="text-orange-400" size={24} />
              <div>
                <div className="font-semibold">LinkedIn</div>
                <div className="text-gray-400 text-sm">Connect with me</div>
              </div>
            </a>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <div className="font-semibold text-blue-400">Indian Institute of Information Technology and Management, Gwalior</div>
                  <div className="text-gray-400">Bachelor of Engineering in Computer Science</div>
                </div>
                <div className="text-gray-400 text-sm">11/2022 – 04/2026</div>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <div className="font-semibold text-teal-400">Narayana Jr College, Hyderabad</div>
                  <div className="text-gray-400">MPC</div>
                </div>
                <div className="text-gray-400 text-sm">07/2020 – 07/2022</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Vinay Cheripally. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;