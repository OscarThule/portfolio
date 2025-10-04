"use client";

import { useState } from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
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
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.7;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(52, 152, 219, 0.6);
          }
        }
        
        .contact-section {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }
        
        .contact-section:nth-child(1) { animation-delay: 0.1s; }
        .contact-section:nth-child(2) { animation-delay: 0.3s; }
        .contact-section:nth-child(3) { animation-delay: 0.5s; }
        .contact-section:nth-child(4) { animation-delay: 0.7s; }
        
        .floating {
          animation: float 5s ease-in-out infinite;
        }
        
        .pulse-ring {
          animation: pulse 3s infinite;
        }
        
        .glow-card {
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0f2027] to-[#1a2f38] pt-32">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="contact-section text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 mb-6">
                Get In{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h1>
              <p className="text-slate-300 text-xl max-w-2xl mx-auto">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              
              {/* Avatar */}
              <div className="flex justify-center mt-8">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full border-4 border-cyan-400 overflow-hidden glow-card">
                    <Image 
                      src="/images/formalpic.jpg" 
                      alt="User avatar" 
                      width={192}
                      height={192}
                      className="w-full h-full object-cover rounded-full"
                      priority
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-emerald-400 pulse-ring -m-2"></div>
                </div>
              </div>
            </section>

            {/* Contact Methods */}
            <section className="contact-section">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: '📧',
                    title: 'Email Me',
                    details: [
                      'lekgorothuleoscar@gmail.com',
                      'thuleoscar5@gmail.com'
                    ],
                    color: 'from-blue-500/20 to-cyan-500/30',
                    link: 'mailto:lekgorothuleoscar@gmail.com'
                  },
                  {
                    icon: '📞',
                    title: 'Call Me',
                    details: [
                      '+27 76 203 4113'
                    ],
                    color: 'from-emerald-500/20 to-green-500/30',
                    link: 'tel:+27762034113'
                  },
                  {
                    icon: '📍',
                    title: 'Location',
                    details: [
                      'South Africa',
                      'Available for remote work and full time'
                    ],
                    color: 'from-purple-500/20 to-pink-500/30'
                  }
                ].map((method, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-br ${method.color} rounded-2xl p-8 border border-white/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl text-center`}
                  >
                    <div className="text-4xl mb-4">{method.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-4">{method.title}</h3>
                    <div className="space-y-2">
                      {method.details.map((detail, idx) => (
                        method.link && idx === 0 ? (
                          <a
                            key={idx}
                            href={method.link}
                            className="text-slate-300 hover:text-cyan-400 transition-colors block"
                          >
                            {detail}
                          </a>
                        ) : (
                          <p key={idx} className="text-slate-300">{detail}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Social Connections */}
            <section className="contact-section">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-12 text-center">
                🌐 Social Connections
              </h2>
              
              {/* Main Social Profiles */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    platform: 'GitHub',
                    username: '@OscarThule',
                    url: 'https://github.com/OscarThule',
                    icon: '💻',
                    color: 'from-gray-500/20 to-slate-500/30'
                  },
                  {
                    platform: 'Instagram',
                    username: '@oscar_del_rey',
                    url: 'https://www.instagram.com/oscar_del_rey/',
                    icon: '📸',
                    color: 'from-pink-500/20 to-purple-500/30'
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-gradient-to-br ${social.color} rounded-2xl p-8 border border-white/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl text-center block`}
                  >
                    <div className="text-4xl mb-4">{social.icon}</div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">{social.platform}</h3>
                    <p className="text-slate-300">{social.username}</p>
                  </a>
                ))}
              </div>

              {/* Repository Links */}
              <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-600/50">
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">📂 My Repositories</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    {
                      name: 'Loyal2 App Frontend',
                      description: 'Android & iOS REPO',
                      url: 'https://github.com/OscarThule/loyal2',
                      tech: 'React Native'
                    },
                    {
                      name: 'Loyal2 App Backend',
                      description: 'Server REPO',
                      url: 'https://github.com/OscarThule/loyalserver',
                      tech: 'Node.js'
                    },
                    {
                      name: 'Portfolio',
                      description: 'Projects REPO',
                      url: 'https://github.com/OscarThule/portfolio2.git',
                      tech: 'Next.js'
                    }
                  ].map((repo, index) => (
                    <a
                      key={index}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-br from-slate-700/50 to-slate-800/70 rounded-xl p-6 border border-slate-600/50 transform transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                    >
                      <div className="text-center">
                        <div className="text-2xl mb-3">📁</div>
                        <h4 className="font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
                          {repo.name}
                        </h4>
                        <p className="text-slate-400 text-sm mb-2">{repo.description}</p>
                        <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full">
                          {repo.tech}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Form */}
            <section className="contact-section">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-slate-600/30 max-w-4xl mx-auto">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8 text-center">
                  💬 Send Me a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-slate-300 mb-2 font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-slate-300 mb-2 font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-slate-300 mb-2 font-medium">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-slate-300 mb-2 font-medium">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-xl text-slate-100 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-vertical"
                      placeholder="Tell me about your project or idea..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-900 font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
                  >
                    🚀 Send Message
                  </button>
                </form>
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
