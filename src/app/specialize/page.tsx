"use client";

import { useEffect, useRef, useState } from 'react';
import Navigation from '../components/Navigation';

export default function Specialize() {
  const [animatedProgress, setAnimatedProgress] = useState(false);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);

  const specializations = [
    {
      icon: '💻',
      title: 'Frontend Development',
      description: 'Creating responsive, accessible, and performant user interfaces with modern JavaScript frameworks and CSS architectures.',
      tech: ['React', 'Vue.js', 'Angular', 'TypeScript', 'SASS'],
      proficiency: 90,
      color: 'from-blue-500/20 to-cyan-500/30'
    },
    {
      icon: '⚙️',
      title: 'Backend Development',
      description: 'Building scalable server-side applications, RESTful APIs, and microservices with various frameworks and languages.',
      tech: ['Node.js', 'Express', 'JWT', 'Bcrypt'],
      proficiency: 85,
      color: 'from-emerald-500/20 to-green-500/30'
    },
    {
      icon: '🗄️',
      title: 'Database Management',
      description: 'Designing efficient database schemas, building optimized queries, and managing NoSQL databases.',
      tech: ['MongoDB', 'Redis', 'Atlas'],
      proficiency: 80,
      color: 'from-purple-500/20 to-pink-500/30'
    },
    {
      icon: '☁️',
      title: 'DevOps & Cloud',
      description: 'Implementing CI/CD pipelines, containerization, and cloud infrastructure management for scalable applications.',
      tech: ['Docker', 'Kubernetes', 'Cloudinary', 'GitHub Actions'],
      proficiency: 75,
      color: 'from-orange-500/20 to-amber-500/30'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Building cross-platform mobile applications with React Native and native Android development.',
      tech: ['React Native', 'React', 'Next.js', 'Android', 'iOS', 'Expo'],
      proficiency: 80,
      color: 'from-cyan-500/20 to-blue-500/30'
    }
  ];

  const timelineData = [
    {
      year: '2018 - 2019',
      role: 'Junior Frontend Developer',
      description: 'Started my journey focusing on HTML, CSS, and JavaScript. Built responsive websites and learned modern frameworks through self-study.'
    },
    {
      year: '2019 - 2020',
      role: 'Frontend Developer',
      description: 'Advanced to working with React and Vue.js. Mastered state management solutions and component-based architecture through independent projects.'
    },
    {
      year: '2020 - 2021',
      role: 'Full-Stack Developer',
      description: 'Expanded into backend development with Node.js and Express. Built RESTful APIs and worked with databases while pursuing my degree in IT Business Systems.'
    },
    {
      year: '2021 - 2022',
      role: 'Senior Full-Stack Developer',
      description: 'Architected complex applications, implemented DevOps practices, and began mentoring other developers while completing my bachelor\'s degree.'
    },
    {
      year: '2022 - Present',
      role: 'Inter-Mid-Senior Developer',
      description: 'Specializing in scalable solutions, exploring emerging technologies, and continuously expanding my skill set through self-directed learning.'
    }
  ];

  // Initialize ref array
  useEffect(() => {
    progressBarsRef.current = progressBarsRef.current.slice(0, specializations.length);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimatedProgress(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    // Observe progress bars
    progressBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });

    return () => observer.disconnect();
  }, []);

  // Fixed callback ref function
  const addProgressBarRef = (el: HTMLDivElement | null, index: number) => {
    progressBarsRef.current[index] = el;
  };

  return (
    <>
      <Navigation />
      
      {/* Global Styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes progressFill {
          from {
            width: 0%;
          }
        }
        
        .specialize-section {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }
        
        .specialize-section:nth-child(1) { animation-delay: 0.1s; }
        .specialize-section:nth-child(2) { animation-delay: 0.3s; }
        .specialize-section:nth-child(3) { animation-delay: 0.5s; }
        .specialize-section:nth-child(4) { animation-delay: 0.7s; }
        
        .timeline-item-left {
          animation: slideInLeft 0.8s ease forwards;
          opacity: 0;
        }
        
        .timeline-item-right {
          animation: slideInRight 0.8s ease forwards;
          opacity: 0;
        }
        
        .progress-animated {
          animation: progressFill 1.5s ease-in-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0f2027] to-[#1a2f38] pt-32">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="specialize-section text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 mb-6">
                My{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                  Specializations
                </span>
              </h1>
              <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-6">
                With 7 years of self-directed learning and a Bachelor degree in Information Technology (Business Systems), 
                I have cultivated expertise across multiple domains.
              </p>
              <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-green-500/30 text-emerald-400 px-6 py-3 rounded-full border border-emerald-400/40">
                🎓 BSc Information Technology (Business Systems)
              </div>
            </section>

            {/* Specialization Grid */}
            <section className="specialize-section">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializations.map((spec, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${spec.color} rounded-2xl p-6 border border-white/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-3xl">{spec.icon}</div>
                      <h3 className="text-xl font-bold text-slate-100">{spec.title}</h3>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                      {spec.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {spec.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-slate-300">
                        <span>Proficiency</span>
                        <span>{spec.proficiency}%</span>
                      </div>
                      <div 
                        ref={(el) => addProgressBarRef(el, index)}
                        className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden"
                      >
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-1500 ease-out"
                          style={{ 
                            width: animatedProgress ? `${spec.proficiency}%` : '0%'
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Timeline Section */}
            <section className="specialize-section">
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
                  🚀 My Development Journey
                </h2>
                <p className="text-slate-300 text-xl mb-4">
                  7 years of self-directed learning and growth in software development
                </p>
                <div className="inline-block bg-gradient-to-r from-emerald-500/20 to-green-500/30 text-emerald-400 px-6 py-3 rounded-full border border-emerald-400/40">
                  🎓 Bachelor of Information Technology (Business Systems)
                </div>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-emerald-500 rounded-full hidden lg:block"></div>
                
                <div className="space-y-8 lg:space-y-12">
                  {timelineData.map((item, index) => (
                    <div
                      key={index}
                      className={`relative lg:flex lg:items-center lg:justify-between ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 z-10 hidden lg:block"></div>
                      
                      {/* Content */}
                      <div 
                        className={`lg:w-5/12 ${
                          index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'
                        } ${index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'}`}
                        style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                      >
                        <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl p-6 border border-slate-600/30 backdrop-blur-sm">
                          <div className="flex items-center gap-2 text-cyan-400 font-bold mb-2">
                            <span>📅</span>
                            <span>{item.year}</span>
                          </div>
                          <h3 className="text-xl font-bold text-slate-100 mb-3">
                            {item.role}
                          </h3>
                          <p className="text-slate-300 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Spacer for mobile */}
                      <div className="lg:hidden h-4"></div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="specialize-section text-center">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-12 border border-slate-600/30 backdrop-blur-sm">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
                  Ready to Bring Your Project to Life?
                </h2>
                <p className="text-slate-300 text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
                  With my diverse skill set, 7 years of experience, and a solid educational foundation in IT Business Systems, 
                  I can help you build robust, scalable, and user-friendly applications.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
                >
                  🚀 Get in Touch
                </a>
              </div>
            </section>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-12 bg-slate-900/95 border-t border-slate-700/50 backdrop-blur-lg">
          <p className="text-slate-300 text-lg font-medium">
            © 2025 Thule Oscar – Software Engineer. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}