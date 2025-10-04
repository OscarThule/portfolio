"use client"

import Navigation from "./components/Navigation";

export default function Home() {
  // Tools data
  const tools = [
    { name: 'JavaScript', icon: 'fa-brands fa-js', color: '#F7DF1E' },
    { name: 'Python', icon: 'fa-brands fa-python', color: '#3776AB' },
    { name: 'Node.js', icon: 'fa-brands fa-node-js', color: '#339933' },
    { name: 'MongoDB', icon: 'ph ph-database', color: '#4DB33D' },
    { name: 'Bcrypt.js', icon: 'ph ph-lock-key', color: '#FFD700' },
    { name: 'JWT', icon: 'ph ph-shield-check', color: '#FF6B6B' },
    { name: 'Kubernetes', icon: 'devicon-kubernetes-plain', color: '#326CE5' },
    { name: 'Redux', icon: 'devicon-redux-original', color: '#764ABC' },
    { name: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178C6' },
    { name: 'Express.js', icon: 'devicon-express-original', color: '#68A063' },
    { name: 'iOS', icon: 'devicon-apple-original', color: '#000000' },
    { name: 'Android', icon: 'devicon-android-plain', color: '#3DDC84' },
    { name: 'WebRTC', icon: 'ph ph-wifi-high', color: '#FF6B9D' },
    { name: 'MediaSoup', icon: 'ph ph-radio-tower', color: '#9D4EDD' },
    { name: 'Axios', icon: 'ph ph-cloud-arrow-down', color: '#5A67D8' },
    { name: 'Fetch', icon: 'ph ph-cloud-arrow-down', color: '#4299E1' },
    { name: 'Military Tracking Maps', icon: 'ph ph-map-pin', color: '#E53E3E' },
    { name: 'Geolocation', icon: 'ph ph-map-trifold', color: '#38B2AC' },
    { name: 'WebSocket', icon: 'ph ph-wifi-high', color: '#ED8936' },
  ];

  // Fixed techStack definition
  const techStack = [
    { name: 'React Native', icon: 'devicon-react-original', color: '#61DAFB' },
    { name: 'Next.js', icon: 'devicon-nextjs-plain', color: '#000000' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain', color: '#339933' },
    { name: 'Electron', icon: 'devicon-electron-original', color: '#47848F' },
  ];

  const services = [
    {
      icon: 'ph ph-rocket-launch',
      title: 'Deployment & Management',
      description: 'End-to-end delivery: architecture, deployment, maintenance, and ongoing support.'
    },
    {
      icon: 'ph ph-globe-hemisphere-east',
      title: 'Websites & Web Apps',
      description: 'From static sites to dynamic full-stack web applications. One codebase for both web & app.'
    },
    {
      icon: 'ph ph-device-mobile',
      title: 'Cross-Platform Apps',
      description: 'iOS and Android development, expanding to Huawei & desktop platforms.'
    },
    {
      icon: 'ph ph-database',
      title: 'Full-Stack Development',
      description: 'Backend APIs, databases, and scalable architectures with secure integrations.'
    },
    {
      icon: 'ph ph-paint-brush',
      title: 'UX & UI Design',
      description: 'Beautiful, user-friendly interfaces with modern design principles.'
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-marquee-slow {
          animation: marquee 60s linear infinite;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: #1a2f38;
        }
        ::-webkit-scrollbar-thumb {
          background: #3498db;
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #2ecc71;
        }
        
        /* Tech item hover effects */
        .tech-item-hover::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.5s ease;
        }
        .tech-item-hover:hover::before {
          left: 100%;
        }

        /* Glow effects */
        .glow-blue {
          box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
        }
        .glow-green {
          box-shadow: 0 0 20px rgba(46, 204, 113, 0.3);
        }
        
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 60s;
          }
          .animate-marquee-slow {
            animation-duration: 80s;
          }
        }
        
        @media (max-width: 480px) {
          .animate-marquee {
            animation-duration: 80s;
          }
          .animate-marquee-slow {
            animation-duration: 100s;
          }
        }
      `}</style>

      {/* Main Background with Better Gradient */}
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0f2027] to-[#1a2f38]">
        <main className="pt-32 sm:pt-40 pb-12 sm:pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
          {/* Tools Section */}
          <section className="mb-12 sm:mb-20 bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-lg border border-slate-600/30 glow-blue">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 flex items-center gap-3 text-slate-100 justify-center sm:justify-start drop-shadow-lg">
              <i className="ph ph-cpu text-3xl sm:text-4xl text-cyan-400"></i>
              Few of My Tools
            </h2>
            
            {/* Tech Stack Grid */}
            <div className="flex flex-wrap justify-center gap-5 sm:gap-8 mb-10 sm:mb-16">
              {/* React with Continuous Spin Animation */}
              <div className="tech-item-hover group relative bg-gradient-to-br from-cyan-500/20 to-emerald-500/30 rounded-2xl p-6 sm:p-8 border border-cyan-400/40 min-w-[140px] sm:min-w-[160px] text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden">
                <div className="relative flex flex-col items-center justify-center">
                  <div className="mb-3 relative">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="-11.5 -10.232 23 20.463"
                      className="w-20 h-20 sm:w-24 sm:h-24 mx-auto animate-spin-slow filter drop-shadow-lg"
                    >
                      <circle r="2.05" fill="#22d3ee" />
                      <g fill="none" stroke="#22d3ee" strokeWidth="0.8">
                        <ellipse rx="11" ry="4.2" />
                        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                      </g>
                    </svg>
                    <span className="absolute -top-2 -right-2 bg-emerald-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                      Mastered
                    </span>
                  </div>
                  <span className="tech-name font-bold text-slate-100 text-lg drop-shadow-md mt-2">React</span>
                </div>
              </div>

              {/* Expo with Logo */}
              <div className="tech-item-hover group relative bg-gradient-to-br from-purple-500/20 to-blue-500/30 rounded-2xl p-6 sm:p-8 border border-purple-400/40 min-w-[140px] sm:min-w-[160px] text-center transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 overflow-hidden flex flex-col items-center justify-center">
                <div className="mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 24 24" fill="#4630EB">
                    <path d="M9.828 1.737a1.5 1.5 0 0 1 2.344 0l8.79 11.454a1.5 1.5 0 0 1-.366 2.098l-8.79 5.947a1.5 1.5 0 0 1-1.756 0l-8.79-5.947a1.5 1.5 0 0 1-.366-2.098l8.79-11.454z"/>
                  </svg>
                </div>
                <span className="tech-name font-bold text-slate-100 text-lg drop-shadow-md mt-2">Expo</span>
              </div>

              {/* Other Tech Items */}
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="tech-item-hover group relative bg-slate-700/50 rounded-2xl p-6 sm:p-8 border border-slate-600/50 min-w-[140px] sm:min-w-[160px] text-center transition-all duration-500 hover:scale-110 hover:bg-slate-700/70 hover:shadow-xl overflow-hidden flex flex-col items-center justify-center"
                >
                  <div className="mb-4 flex items-center justify-center">
                    <i 
                      className={`${tech.icon} text-5xl sm:text-6xl filter drop-shadow-md transition-transform duration-300 group-hover:scale-110`} 
                      style={{ color: tech.color }}
                    ></i>
                  </div>
                  <span className="tech-name font-bold text-slate-100 text-lg drop-shadow-md mt-2">{tech.name}</span>
                </div>
              ))}
            </div>
            
            {/* Enhanced Marquee */}
            <div className="bg-slate-800/60 rounded-2xl p-2 border border-slate-600/40 overflow-hidden glow-green">
              <div className="flex animate-marquee py-4 sm:py-6 w-max">
                {[...tools, ...tools].map((tool, index) => (
                  <div
                    key={`${tool.name}-${index}`}
                    className="flex items-center gap-3 sm:gap-4 bg-slate-700/60 mx-3 sm:mx-5 px-4 sm:px-7 py-3 sm:py-4 rounded-xl border border-slate-600/50 transition-all duration-300 hover:scale-110 hover:bg-slate-700/80 hover:shadow-lg flex-shrink-0 group"
                  >
                    <i 
                      className={`${tool.icon} text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-125`} 
                      style={{ color: tool.color }}
                    ></i>
                    <span className="font-bold text-slate-100 text-lg whitespace-nowrap drop-shadow-md">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* New AI & Machine Learning Section */}
          <section className="mb-12 sm:mb-20 bg-gradient-to-br from-purple-900/60 to-blue-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-lg border border-purple-600/30 glow-blue">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 flex items-center gap-3 text-slate-100 justify-center sm:justify-start drop-shadow-lg">
              <i className="ph ph-brain text-3xl sm:text-4xl text-purple-400"></i>
              AI & Machine Learning Mastery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-16">
              {/* Data Structures */}
              <div className="tech-item-hover group relative bg-gradient-to-br from-blue-500/20 to-cyan-500/30 rounded-2xl p-6 sm:p-8 border border-blue-400/40 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 overflow-hidden flex flex-col items-center justify-center">
                <div className="mb-4 flex items-center justify-center">
                  <i className="ph ph-graph text-5xl sm:text-6xl text-blue-400 filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"></i>
                </div>
                <span className="tech-name font-bold text-slate-100 text-lg drop-shadow-md mt-2">Data Structures</span>
                <p className="text-slate-300 text-sm mt-2">Advanced Algorithms & Optimization</p>
              </div>

              {/* Machine Learning - Scikit-learn */}
              <div className="tech-item-hover group relative bg-gradient-to-br from-orange-500/20 to-red-500/30 rounded-2xl p-6 sm:p-8 border border-orange-400/40 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/30 overflow-hidden flex flex-col items-center justify-center">
                <div className="mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 260 140" fill="#F7931E">
                    <path d="M102.9 66.2h21.5v7.4h-21.5zM77.4 66.2h21.5v7.4H77.4zM136.9 40.8h7.4v21.5h-7.4zM136.9 66.2h7.4v21.5h-7.4z"/>
                    <path d="M48.6 31.8c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.8 16.8 16.8 16.8-7.5 16.8-16.8-7.5-16.8-16.8-16.8z"/>
                    <path d="M211.4 31.8c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.8 16.8 16.8 16.8-7.5 16.8-16.8-7.5-16.8-16.8-16.8z"/>
                    <path d="M130 10.4c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.8 16.8 16.8 16.8-7.5 16.8-16.8S139.3 10.4 130 10.4z"/>
                    <path d="M63.2 97.6c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.8 16.8 16.8 16.8-7.5 16.8-16.8-7.5-16.8-16.8-16.8z"/>
                    <path d="M196.8 97.6c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.8 16.8 16.8 16.8-7.5 16.8-16.8-7.5-16.8-16.8-16.8z"/>
                    <path d="M130 76.2c-9.3 0-16.8 7.5-16.8 16.8s7.5 16.8 16.8 16.8 16.8-7.5 16.8-16.8-7.5-16.8-16.8-16.8z"/>
                  </svg>
                </div>
                <span className="tech-name font-bold text-slate-100 text-lg drop-shadow-md mt-2">Scikit-learn</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  Mastered
                </span>
                <p className="text-slate-300 text-sm mt-2">ML Algorithms & Data Science</p>
              </div>

              {/* Deep Learning - PyTorch */}
              <div className="tech-item-hover group relative bg-gradient-to-br from-red-500/20 to-orange-500/30 rounded-2xl p-6 sm:p-8 border border-red-400/40 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 overflow-hidden flex flex-col items-center justify-center">
                <div className="mb-4 flex items-center justify-center">
                  <svg className="w-16 h-16 sm:w-20 sm:h-20" viewBox="0 0 24 24" fill="#EE4C2C">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.5C6.201 22.5 1.5 17.799 1.5 12S6.201 1.5 12 1.5 22.5 6.201 22.5 12 17.799 22.5 12 22.5zm0-18a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 9a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"/>
                  </svg>
                </div>
                <span className="tech-name font-bold text-slate-100 text-lg drop-shadow-md mt-2">PyTorch</span>
                <span className="absolute -top-2 -right-2 bg-orange-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-lg z-10">
                  Mastered
                </span>
                <p className="text-slate-300 text-sm mt-2">Neural Networks & Deep Learning</p>
              </div>

              {/* Artificial Intelligence */}
              <div className="tech-item-hover group relative bg-gradient-to-br from-green-500/20 to-emerald-500/30 rounded-2xl p-6 sm:p-8 border border-green-400/40 text-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/30 overflow-hidden flex flex-col items-center justify-center">
                <div className="mb-4 flex items-center justify-center">
                  <i className="ph ph-cpu text-5xl sm:text-6xl text-green-400 filter drop-shadow-md transition-transform duration-300 group-hover:scale-110"></i>
                </div>
                <span className="tech-name font-bold text-slate-100 text-lg drop-shadow-md mt-2">AI Systems</span>
                <p className="text-slate-300 text-sm mt-2">Intelligent Systems & NLP</p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-12 sm:mb-20 bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-lg border border-slate-600/30 glow-blue">
            <h2 className="text-3xl sm:text-4xl font-bold mb-10 sm:mb-14 flex items-center gap-3 text-slate-100 justify-center sm:justify-start drop-shadow-lg">
              <i className="ph ph-briefcase text-3xl sm:text-4xl text-emerald-400"></i>
              What I Do
            </h2>

            <div className="bg-slate-800/60 rounded-2xl p-2 border border-slate-600/40 overflow-hidden glow-green">
              <div className="flex animate-marquee-slow w-max">
                {[...services, ...services].map((service, index) => (
                  <div
                    key={`${service.title}-${index}`}
                    className="service-card bg-gradient-to-br from-slate-700/50 to-slate-800/70 mx-4 sm:mx-6 p-6 sm:p-8 rounded-2xl border border-slate-600/50 w-72 sm:w-96 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:border-cyan-400/50 hover:bg-slate-700/80 flex-shrink-0 group"
                  >
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                      <i className={`${service.icon} text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110`}></i>
                      {service.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-base sm:text-lg group-hover:text-slate-200 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Hero Section with Background Image */}
          <section className="hero text-center bg-gradient-to-br from-slate-800/70 to-slate-900/90 rounded-2xl sm:rounded-3xl p-8 sm:p-14 border border-slate-600/30 backdrop-blur-lg glow-blue relative overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(rgba(15, 32, 39, 0.8), rgba(15, 32, 39, 0.8)), url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-emerald-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-blue-400 rounded-full blur-xl animate-pulse delay-500"></div>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 text-slate-100 drop-shadow-2xl">
                Transforming Ideas Into{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent animate-pulse">
                  Powerful Solutions
                </span>
              </h2>
              
              <p className="text-xl sm:text-2xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-lg font-medium">
                With over 7 years of hands-on experience in software development through personal projects, 
                I have built and refined skills in designing, architecting, and deploying modern applications. 
                Now, I am bringing this expertise to companies, helping turn their vision into scalable, 
                reliable solutions.
              </p>
              
              <a 
                href="/contact"
                className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-900 font-black px-10 sm:px-14 py-4 sm:py-5 rounded-2xl text-lg sm:text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-emerald-500/50 transform hover:-translate-y-2"
              >
                🚀 Start Your Project
              </a>
            </div>
          </section>
        </main>

        <footer className="text-center py-8 sm:py-12 bg-slate-900/95 border-t border-slate-700/50 backdrop-blur-lg">
          <p className="text-slate-300 text-base sm:text-lg font-medium">
            &copy; 2025 Thule Oscar – Software Engineer. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}