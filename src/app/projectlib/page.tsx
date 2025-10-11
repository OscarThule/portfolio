"use client";

import { useState, useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Image from 'next/image';

export default function ProjectLib() {
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isSecurityModalOpen, setIsSecurityModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentVideo, setCurrentVideo] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const openImageModal = (src: string) => {
    setCurrentImage(src);
    setIsImageModalOpen(true);
  };

  const openVideoModal = (src: string) => {
    setCurrentVideo(src);
    setIsVideoModalOpen(true);
  };

  const closeModals = () => {
    setIsImageModalOpen(false);
    setIsVideoModalOpen(false);
    setIsSecurityModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const onVideoLoad = () => {
    console.log('Video loaded successfully');
  };

  const onVideoError = () => {
    console.error('Error loading video');
    alert(
      'Failed to load video. Please ensure the video file is accessible and in a supported format.'
    );
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModals();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

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
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(52, 152, 219, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(52, 152, 219, 0.6);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .project-section {
          animation: fadeInUp 0.8s ease forwards;
          opacity: 0;
        }

        .project-section:nth-child(1) {
          animation-delay: 0.1s;
        }
        .project-section:nth-child(2) {
          animation-delay: 0.3s;
        }
        .project-section:nth-child(3) {
          animation-delay: 0.5s;
        }
        .project-section:nth-child(4) {
          animation-delay: 0.7s;
        }
        .project-section:nth-child(5) {
          animation-delay: 0.9s;
        }
        .project-section:nth-child(6) {
          animation-delay: 1.1s;
        }
        .project-section:nth-child(7) {
          animation-delay: 1.3s;
        }
        .project-section:nth-child(8) {
          animation-delay: 1.5s;
        }

        .arch-component {
          animation: float 3s ease-in-out infinite;
        }

        .arch-component:nth-child(1) {
          animation-delay: 0s;
        }
        .arch-component:nth-child(2) {
          animation-delay: 0.5s;
        }
        .arch-component:nth-child(3) {
          animation-delay: 1s;
        }
        .arch-component:nth-child(4) {
          animation-delay: 1.5s;
        }

        .feature {
          animation: slideIn 0.6s ease forwards;
          opacity: 0;
        }

        .feature:nth-child(1) {
          animation-delay: 0.2s;
        }
        .feature:nth-child(2) {
          animation-delay: 0.4s;
        }
        .feature:nth-child(3) {
          animation-delay: 0.6s;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0f2027] to-[#1a2f38] pt-32">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
          <div className="space-y-12">
            {/* New Surgery Booking WebApp Section - Placed at the top */}
            <section className="project-section bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-slate-600/30 glow-blue">
              <div className="text-center mb-8">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 mb-6">
                  Surgery Booking WebApp{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                    Built for My Client - Surgery Owner
                  </span>
                </h1>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
                This is a complex, full-stack web application I built for the owner of a surgery clinic. It features two separate frontends: one for patients and one for doctors/administrators. The system allows patients to book appointments seamlessly, with real-time updates pushed to the doctor appointment schedule. Everyone can test it with real data—it fully operational and working well. For more projects, explore my public repositories on GitHub to learn more about my work.
              </p>

              {/* Image & Link Section */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                {/* Image Frame */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/30 rounded-2xl p-4 border border-cyan-400/40 glow-blue cursor-pointer transform transition-all duration-500 hover:scale-105">
                    <div className="text-cyan-400 font-bold text-center mb-3">
                      📸 Medical View Screenshot
                    </div>
                    <Image
                      src="/images/medicalview.png"
                      alt="Surgery Booking WebApp Screenshot"
                      width={800}
                      height={600}
                      className="w-full h-64 rounded-xl object-cover"
                      onClick={() => openImageModal('/images/medicalview.png')}
                    />
                  </div>
                </div>

                {/* Link and Features */}
                <div className="flex-1">
                  <div className="text-center mb-8">
                    <a
                      href="https://manchidi-w1hy.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-900 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-block"
                    >
                      🌐 Visit Patient Website
                    </a>
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed text-center mb-6">
                    The application communicates effectively between the patient and doctor sites. When a patient books an appointment, it instantly appears in the doctor schedule thanks to real-time updates.
                  </p>
                </div>
              </div>

              {/* Architecture Details */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
                  🏗️ System Architecture
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  The webapp consists of two frontends (patient and doctor) and a single backend server. The server runs in multiple containers using Docker, orchestrated with Kubernetes for scalability, high availability, and easy management. This setup ensures the application can handle increased load, auto-scale, and recover from failures automatically.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                    {
                      icon: '🖥️',
                      title: 'Two Frontends',
                      description: 'Separate UIs for patients and doctors for optimized user experiences.',
                      color: 'from-blue-500/20 to-cyan-500/30',
                    },
                    {
                      icon: '🛡️',
                      title: 'Docker & Kubernetes',
                      description: 'Containerized server deployment for portability, scaling, and orchestration.',
                      color: 'from-emerald-500/20 to-green-500/30',
                    },
                    {
                      icon: '⚡',
                      title: 'Node.js Express Backend',
                      description: 'Efficient, scalable server handling API requests and business logic.',
                      color: 'from-purple-500/20 to-pink-500/30',
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className={`feature bg-gradient-to-br ${feature.color} rounded-2xl p-6 text-center border border-white/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                    >
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h3 className="text-xl font-bold text-slate-100 mb-3">{feature.title}</h3>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Communication Details */}
              <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-600/50 mb-12">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">📡 Real-Time Communication</h3>
                <p className="text-slate-300 text-lg leading-relaxed text-center">
                  The application uses WebSockets via Socket.io for real-time, bidirectional communication between clients and the server. This enables instant updates: when a patient books or modifies an appointment, the changes are pushed immediately to the doctor dashboard without needing page refreshes. The Node.js Express backend handles the WebSocket connections efficiently, ensuring low-latency interactions and a smooth user experience across both frontends.
                </p>
              </div>

              {/* Technology Stack for Surgery Booking WebApp */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
                  🛠️ Technology Stack
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
                  Built using modern web technologies for performance, scalability, and real-time features, including video consultations.
                </p>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Frontend Technologies */}
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/30 rounded-2xl p-6 border border-blue-400/40">
                    <h4 className="text-2xl font-bold text-cyan-400 mb-6 text-center">🎨 Frontend</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Next.js',
                        'Tailwind CSS',
                        'TypeScript',
                        'Agora (Video Consultations)',
                        'React Hooks',
                        'Socket.io Client',
                        'Axios',
                        'TanStack Query',
                      ].map((tech, index) => (
                        <div
                          key={index}
                          className="bg-slate-700/50 rounded-xl p-3 text-center border border-slate-600/50 transform transition-all duration-300 hover:scale-105"
                        >
                          <div className="text-slate-100 text-sm font-medium">{tech}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend Technologies */}
                  <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/30 rounded-2xl p-6 border border-emerald-400/40">
                    <h4 className="text-2xl font-bold text-emerald-400 mb-6 text-center">⚙️ Backend</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Node.js',
                        'Express',
                        'MongoDB',
                        'Mongoose',
                        'JWT',
                        'Bcryptjs',
                        'Socket.io',
                        'Helmet',
                      ].map((tech, index) => (
                        <div
                          key={index}
                          className="bg-slate-700/50 rounded-xl p-3 text-center border border-slate-600/50 transform transition-all duration-300 hover:scale-105"
                        >
                          <div className="text-slate-100 text-sm font-medium">{tech}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Deployment and Testing */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
                  🚀 Deployment & Testing
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-8">
                  Deployed on Vercel for the patient frontend, with the backend running in Kubernetes-managed Docker containers. The system is live with real data, fully functional, and ready for testing. Feel free to create bookings and see how they propagate to the doctor schedule in real-time. Video consultations are powered by Agora for seamless visual interactions between patients and doctors.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: 'Vercel Hosting', color: 'from-green-500/20 to-emerald-500/30' },
                    { name: 'Docker Containers', color: 'from-blue-500/20 to-cyan-500/30' },
                    { name: 'Kubernetes Orchestration', color: 'from-emerald-500/20 to-green-500/30' },
                    { name: 'Agora Video SDK', color: 'from-orange-500/20 to-amber-500/30' },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`arch-component bg-gradient-to-br ${service.color} rounded-2xl p-6 text-center border border-white/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-105`}
                    >
                      <div className="text-slate-100 font-bold text-sm">{service.name}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* GitHub Call to Action */}
              <div className="text-center mt-12">
                <p className="text-slate-300 text-lg mb-4">
                  For more insights into my work, check out my public GitHub repositories where you can explore the source code and other projects.
                </p>
                <a
                  href="https://github.com/OscarThule" // Assuming a placeholder GitHub link; replace with actual if provided
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-slate-900 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-block"
                >
                  🔗 Visit My GitHub
                </a>
              </div>
            </section>

            {/* Hero Project Section - MVP follows */}
            <section className="project-section bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-slate-600/30 glow-blue">
              <div className="text-center mb-8">
                <p className="text-red-400 font-bold text-lg mb-4 animate-pulse">
                  🚨 Please play the video to see application testing (urgent and most important)
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 mb-6">
                  My Full-Stack{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                    MVP Application
                  </span>
                </h1>
              </div>

              {/* Video & Gallery Section */}
              <div className="app-link mb-8">
                <p className="text-amber-400 font-semibold text-center mb-6">
                  🎯 Press 3 dots on video bottom, click PICTURE IN PICTURE to have mobile experience
                </p>

                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
                  {/* Video Frame */}
                  <div className="flex-1 max-w-lg">
                    <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/30 rounded-2xl p-4 border border-cyan-400/40 glow-blue cursor-pointer transform transition-all duration-500 hover:scale-105">
                      <div className="text-cyan-400 font-bold text-center mb-3">
                        🎥 Urgent: Application Demo Video
                      </div>
                      <video
                        className="w-full h-64 rounded-xl object-cover"
                        onClick={() => openVideoModal('/videos/vid2.mp4')}
                        preload="metadata"
                        onLoadedData={onVideoLoad}
                        onError={onVideoError}
                        ref={videoRef}
                      >
                        <source src="/videos/vid2.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  {/* Image Gallery */}
                  <div className="flex-1">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {[
                        { src: '/images/one.png', alt: 'AAB Image 1' },
                        { src: '/images/two.png', alt: 'AAB Image 2' },
                        { src: '/images/three.png', alt: 'APK Image' },
                      ].map((image, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-purple-500/20 to-pink-500/30 rounded-xl p-3 border border-purple-400/40 cursor-pointer transform transition-all duration-300 hover:scale-110 hover:rotate-2"
                          onClick={() => openImageModal(image.src)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            width={500}
                            height={500}
                            className="w-full h-24 sm:h-32 object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-6">
                      <button
                        onClick={() => setIsSecurityModalOpen(true)}
                        className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-slate-900 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      >
                        📱 AAB & APK Info
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-lg text-center leading-relaxed max-w-4xl mx-auto">
                A comprehensive showcase of my cross-platform application with robust architecture, designed
                to demonstrate my full-stack development capabilities across multiple platforms.
              </p>

              {/* Deployment Infrastructure */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-cyan-400 mb-8 text-center">
                  🚀 Deployment Infrastructure
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {[
                    { name: 'Google Play Store', color: 'from-green-500/20 to-emerald-500/30' },
                    { name: 'RENDER.com', color: 'from-blue-500/20 to-cyan-500/30' },
                    { name: 'MongoDB Atlas', color: 'from-emerald-500/20 to-green-500/30' },
                    { name: 'AWS Storage', color: 'from-orange-500/20 to-amber-500/30' },
                    { name: 'Vercel', color: 'from-emerald-500/20 to-green-500/30' },
                    { name: 'Netlify', color: 'from-orange-500/20 to-amber-500/30' },
                  ].map((service, index) => (
                    <div
                      key={index}
                      className={`arch-component bg-gradient-to-br ${service.color} rounded-2xl p-6 text-center border border-white/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-105`}
                    >
                      <div className="text-slate-100 font-bold text-sm">{service.name}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Architecture & Design Section */}
            <section className="project-section bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-slate-600/30 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8 text-center">
                🏗️ Architecture & Design Philosophy
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
                Designed with focus on optimizing performance, ensuring high security, maintaining data quality,
                while keeping the codebase clean and maintainable.
              </p>

              {/* Security Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: '🔒',
                    title: 'JWT Authentication',
                    description: 'Secure user sessions with temporary tokens',
                    color: 'from-blue-500/20 to-cyan-500/30',
                  },
                  {
                    icon: '🛡️',
                    title: 'Bcrypt Hashing',
                    description: 'Robust password hashing for enhanced security',
                    color: 'from-emerald-500/20 to-green-500/30',
                  },
                  {
                    icon: '⚡',
                    title: 'Optimized Performance',
                    description: 'React Hooks for speed and smooth user experience',
                    color: 'from-purple-500/20 to-pink-500/30',
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className={`feature bg-gradient-to-br ${feature.color} rounded-2xl p-6 text-center border border-white/20 backdrop-blur-sm transform transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold text-slate-100 mb-3">{feature.title}</h3>
                    <p className="text-slate-300 text-sm">{feature.description}</p>
                  </div>
                ))}
              </div>

              {/* Backend Implementation */}
              <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-600/50">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4 text-center">🔧 Backend Implementation</h3>
                <p className="text-slate-300 text-center">
                  Chose Node.js with Express for backend to maintain JavaScript consistency throughout the stack,
                  allowing seamless integration with TypeScript frontend.
                </p>
              </div>
            </section>

            {/* Current Development Focus */}
            <section className="project-section bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-slate-600/30 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8 text-center">
                🎯 Current Development Focus
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
                Enhancing the application with advanced infrastructure and scalability features for enterprise-level
                demands.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
                {[
                  'Docker Containerization',
                  'CI/CD Pipeline',
                  'Kubernetes',
                  'Server Clustering',
                  'Redis Scaling',
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-br from-amber-500/20 to-orange-500/30 rounded-xl p-4 text-center border border-amber-400/40 transform transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-slate-100 font-bold text-sm">{tech}</div>
                  </div>
                ))}
              </div>

              <p className="text-slate-300 text-center">
                These technologies enable auto-healing, self-fixing capabilities, and consistent data availability.
              </p>
            </section>

            {/* Code Quality Section */}
            <section className="project-section bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-slate-600/30 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8 text-center">
                💎 Code Quality & Maintainability
              </h2>

              <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/30 rounded-2xl p-8 border border-emerald-400/40 transform transition-all duration-500 hover:scale-105">
                <pre className="text-slate-100 text-center text-xl font-mono font-bold">
                  CLEAN CODE, EASY DEBUG, EASY TO SCALE
                </pre>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mt-8">
                Prioritized simplicity and readability throughout the codebase to facilitate teamwork and ensure
                easy scaling and debugging—crucial aspects of any successful project.
              </p>
            </section>

            {/* Technology Stack Section for MVP */}
            <section className="project-section bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-slate-600/30 glow-blue">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-8 text-center">
                🛠️ Technology Stack for MVP
              </h2>

              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
                Modern, robust technology stack carefully selected for performance, developer experience, and
                scalability in the React Native MVP application.
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Frontend Technologies */}
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/30 rounded-2xl p-6 border border-blue-400/40">
                  <h3 className="text-2xl font-bold text-cyan-400 mb-6 text-center">🎨 Frontend</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'React Native',
                      'Expo',
                      'Redux Toolkit',
                      'TypeScript',
                      'React Navigation',
                      'TanStack Query',
                      'NativeWind',
                      'Axios',
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="bg-slate-700/50 rounded-xl p-3 text-center border border-slate-600/50 transform transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-slate-100 text-sm font-medium">{tech}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend Technologies */}
                <div className="bg-gradient-to-br from-emerald-500/20 to-green-500/30 rounded-2xl p-6 border border-emerald-400/40">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">⚙️ Backend</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Node.js',
                      'Express',
                      'MongoDB',
                      'Mongoose',
                      'JWT',
                      'Bcryptjs',
                      'Redis',
                      'Helmet',
                    ].map((tech, index) => (
                      <div
                        key={index}
                        className="bg-slate-700/50 rounded-xl p-3 text-center border border-slate-600/50 transform transition-all duration-300 hover:scale-105"
                      >
                        <div className="text-slate-100 text-sm font-medium">{tech}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* SOEN Projects Section - Added at the bottom */}
            <section className="project-section bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-slate-600/30 glow-blue">
              <div className="text-center mb-8">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-100 mb-6">
                  SOEN{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                    Projects
                  </span>
                </h2>
                <div className="inline-flex items-center bg-amber-500/20 text-amber-300 px-4 py-2 rounded-full border border-amber-400/40 mb-4">
                  <span className="animate-pulse">🔄</span>
                  <span className="ml-2 font-semibold">Ongoing Project - In Development</span>
                </div>
              </div>

              <p className="text-slate-300 text-lg leading-relaxed text-center max-w-4xl mx-auto mb-12">
                A comprehensive web application currently being developed for a group of medical practitioners. 
                This platform aims to streamline medical operations, patient management, and provide advanced 
                healthcare solutions through modern technology.
              </p>

              {/* Image & Link Section */}
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
                {/* Image Frame */}
                <div className="flex-1 max-w-lg">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/30 rounded-2xl p-4 border border-purple-400/40 glow-blue cursor-pointer transform transition-all duration-500 hover:scale-105">
                    <div className="text-purple-400 font-bold text-center mb-3">
                      📸 SOEN Projects Screenshot
                    </div>
                    <Image
                      src="/soen.png"
                      alt="SOEN Projects Screenshot"
                      width={800}
                      height={600}
                      className="w-full h-64 rounded-xl object-cover"
                      onClick={() => openImageModal('/soen.png')}
                    />
                  </div>
                </div>

                {/* Link and Features */}
                <div className="flex-1">
                  <div className="text-center mb-8">
                    <a
                      href="https://soen-projects-l1dcizibu-thuleoscars-projects.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-slate-900 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-block"
                    >
                      🌐 Visit SOEN Projects
                    </a>
                  </div>

                  <p className="text-slate-300 text-lg leading-relaxed text-center mb-6">
                    Currently in active development, this project showcases modern healthcare technology solutions 
                    with focus on user experience, data security, and medical workflow optimization.
                  </p>
                </div>
              </div>

              {/* Project Status & Features */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">
                  🚧 Project Status & Planned Features
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/30 rounded-2xl p-6 border border-purple-400/40">
                    <h4 className="text-xl font-bold text-purple-300 mb-4 text-center">✅ Current Implementation</h4>
                    <ul className="text-slate-300 space-y-3">
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Modern React/Next.js frontend
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Responsive UI design
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Basic medical dashboard
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-400 mr-2">✓</span>
                        Vercel deployment setup
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/30 rounded-2xl p-6 border border-amber-400/40">
                    <h4 className="text-xl font-bold text-amber-300 mb-4 text-center">🔄 Planned Features</h4>
                    <ul className="text-slate-300 space-y-3">
                      <li className="flex items-center">
                        <span className="text-blue-400 mr-2">⏳</span>
                        Patient management system
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-400 mr-2">⏳</span>
                        Appointment scheduling
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-400 mr-2">⏳</span>
                        Medical records integration
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-400 mr-2">⏳</span>
                        Telemedicine capabilities
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technology Stack */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">
                  🛠️ Technology Stack
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'Next.js',
                    'React',
                    'TypeScript',
                    'Tailwind CSS',
                    'Node.js',
                    'MongoDB',
                    'Vercel',
                    'Git/GitHub'
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-purple-500/20 to-pink-500/30 rounded-xl p-4 text-center border border-purple-400/40 transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="text-slate-100 font-bold text-sm">{tech}</div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* GitHub Projects Note */}
            <div className="project-section text-center py-12">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-3xl p-8 backdrop-blur-lg border border-slate-600/30">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-100 mb-4">
                  📚 More Projects Available
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                  I have many more projects in my GitHub repositories covering various technologies and domains. 
                  Here I decided to mention a few selected projects that best represent my full-stack development 
                  capabilities and current focus areas.
                </p>
                <a
                  href="https://github.com/OscarThule"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-slate-600 to-slate-700 hover:from-slate-700 hover:to-slate-800 text-slate-100 font-bold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl inline-block"
                >
                  🔍 Explore All GitHub Projects
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-12 bg-slate-900/95 border-t border-slate-700/50 backdrop-blur-lg">
          <p className="text-slate-300 text-lg font-medium">
            © 2025 Thule Oscar – Software Engineer. All rights reserved.
          </p>
        </footer>

        {/* Image Modal */}
        {isImageModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white p-3 rounded-xl font-bold z-50 hover:scale-110 transition-transform"
              onClick={closeModals}
            >
              ✕ Close
            </button>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 max-w-4xl max-h-[90vh]">
              <Image
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                src={currentImage}
                alt="Enlarged view"
                width={800}
                height={600}
              />
            </div>
          </div>
        )}

        {/* Video Modal */}
        {isVideoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white p-3 rounded-xl font-bold z-50 hover:scale-110 transition-transform"
              onClick={closeModals}
            >
              ✕ Close
            </button>
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 max-w-4xl w-full">
              <video controls autoPlay className="w-full h-auto max-h-[80vh] rounded-lg">
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}

        {/* Security Message Modal */}
        {isSecurityModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <button
              className="absolute top-4 right-4 bg-red-500 text-white p-3 rounded-xl font-bold z-50 hover:scale-110 transition-transform"
              onClick={closeModals}
            >
              ✕ Close
            </button>
            <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/30 rounded-2xl p-8 max-w-2xl border border-amber-400/40">
              <p className="text-slate-100 text-lg leading-relaxed text-center">
                🔒 Many people do not like to receive or install APK files/links due to security concerns and
                policies. That is why I provided a video showcasing the application running live to respect your
                security preferences. I can bring the application or run the APK to test it live during
                interviews. If you want it now call me or email me I will send it.
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}