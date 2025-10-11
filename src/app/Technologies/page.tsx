"use client";

import { useEffect, useRef, useState } from "react";
import Navigation from "../components/Navigation";

interface TechCategory {
  icon: string;
  title: string;
  items: string[];
}

interface CloudItem {
  icon: string;
  text: string;
}

interface ExperienceLevel {
  icon: string;
  title: string;
  description: string;
  proficiency: number;
  color: string;
  items: string[];
}

export default function TechTools() {
  const [animatedProgress, setAnimatedProgress] = useState(false);
  const progressBarsRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  const techCategories: TechCategory[] = [
    {
      icon: "💻",
      title: "Frontend Development",
      items: [
        "React and React Native",
        "Next.js",
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "HTML5",
        "Responsive Design",
        "Redux",
        "Tailwind CSS",
      ],
    },
    {
      icon: "⚙️",
      title: "Backend Development",
      items: [
        "Node.js",
        "Express",
        "Python",
        "RESTful APIs",
        "GraphQL",
        "Socket.io",
        "JWT",
        "OAuth",
        "FastAPI",
      ],
    },
    {
      icon: "🧠",
      title: "AI, ML & Automation",
      items: [
       
        "PyTorch",
        "LangChain",
        "OpenAI API",
        "selium",
        "scikit-learn",
        "Agent ML",
        "AI Ad Tool Stack",
        "Machine Vision",
        "Neural Networks",
        "Robotics Control Systems",
      ],
    },
    {
      icon: "☁️",
      title: "DevOps & Cloud",
      items: [
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "CI/CD",
        "Ingress",
        "AWS",
        "Vercel",
        "Render.com",
        "Netlify",
        "Cloudinary",
        "Atlas",
      ],
    },
    {
      icon: "📱",
      title: "Mobile & Embedded Systems",
      items: [
        "React Native",
        "Android",
        "iOS",
        "Expo",
        "NativeWind",
        "IoT Systems",
        "PCB Design",
        "Raspberry Pi",
        "Arduino",
      ],
    },
    {
      icon: "🛠️",
      title: "Development Tools",
      items: [
        "Git",
        "GitHub",
        "GitLab",
        "VS Code",
        "Terminal",
        "Testing Library",
        "Debugging Tools",
        "npm / yarn",
        "Postman",
        "Figma",
      ],
    },
  ];

  const cloudItems: CloudItem[] = [
    { icon: "⚛️", text: "React" },
    { icon: "🟩", text: "Node.js" },
    { icon: "🗃️", text: "MongoDB" },
    { icon: "🐳", text: "Docker" },
    { icon: "☸️", text: "Kubernetes" },
    { icon: "⚡", text: "Express" },
    { icon: "🔄", text: "Redux" },
    { icon: "☁️", text: "AWS" },
    { icon: "🤖", text: "Agent ML" },
    { icon: "🧠", text: "TensorFlow" },
    { icon: "🧩", text: "LangChain" },
    { icon: "📱", text: "React Native" },
    { icon: "🔌", text: "IoT" },
    { icon: "💡", text: "AI Ad Tool Stack" },
    { icon: "🔬", text: "Robotics" },
  ];

  const experienceLevels: ExperienceLevel[] = [
    {
      icon: "⭐",
      title: "Expert Level",
      description:
        "Technologies I have deep mastery of and use to build high-performance applications and intelligent systems.",
      proficiency: 92,
      color: "from-blue-500/20 to-cyan-500/30",
      items: [
        "React",
        "Node.js",
        "JavaScript",
        "MongoDB",
        "Express",
        "Docker",
        "Redux",
      ],
    },
    {
      icon: "✅",
      title: "Proficient Level",
      description:
        "Technologies I comfortably use in production for scalable applications, automation, and AI systems.",
      proficiency: 80,
      color: "from-emerald-500/20 to-green-500/30",
      items: [
        "TypeScript",
        "Python",
        "TensorFlow",
        "LangChain",
        "React Native",
        "Redis",
        "AWS",
        "Agent ML",
      ],
    },
    {
      icon: "🚀",
      title: "Exploration Level",
      description:
        "Emerging technologies I’m researching and applying to advanced AI, robotics, and embedded system projects.",
      proficiency: 65,
      color: "from-purple-500/20 to-pink-500/30",
      items: [
        "PyTorch",
        "WebAssembly",
        "Go",
        "Machine Vision",
        "Robotics AI",
        "PCB Firmware Design",
      ],
    },
  ];

  // refs
  useEffect(() => {
    progressBarsRef.current = progressBarsRef.current.slice(0, experienceLevels.length);
    sectionRefs.current = sectionRefs.current.slice(0, 4);
  }, [experienceLevels.length]);

  useEffect(() => {
    const progressObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setAnimatedProgress(true);
        });
      },
      { threshold: 0.3 }
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting)
            entry.target.classList.add("animate-fade-in-up");
        });
      },
      { threshold: 0.1 }
    );

    progressBarsRef.current.forEach((bar) => bar && progressObserver.observe(bar));
    sectionRefs.current.forEach((section) => section && sectionObserver.observe(section));

    return () => {
      progressObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, []);

  const addProgressBarRef = (el: HTMLDivElement | null, i: number) => {
    progressBarsRef.current[i] = el;
  };
  const addSectionRef = (el: HTMLElement | null, i: number) => {
    sectionRefs.current[i] = el;
  };

  return (
    <>
      <Navigation />

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
        @keyframes progressFill {
          from {
            width: 0%;
          }
        }
        .tech-section {
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }
        .tech-item,
        .cloud-item {
          transition: all 0.3s ease;
        }
        .tech-item:hover {
          transform: scale(1.05);
        }
        .cloud-item:hover {
          transform: scale(1.1);
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-[#0f2027] to-[#1a2f38] pt-32">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 space-y-12">
          <section ref={(el) => addSectionRef(el, 0)} className="tech-section text-center">
            <h1 className="text-5xl font-black text-slate-100 mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
                Full Tech Stack
              </span>
            </h1>
            <p className="text-slate-300 text-xl max-w-3xl mx-auto">
              I’m a full-stack software engineer, AI researcher, and inventor.
              My tools span frontend, backend, cloud, and advanced AI systems,
              empowering me to build everything from web apps to intelligent agents.
            </p>
          </section>

          <section ref={(el) => addSectionRef(el, 1)} className="tech-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techCategories.map((category, i) => (
                <div
                  key={i}
                  className="bg-gradient-to-br from-slate-800/60 to-slate-900/80 rounded-2xl p-6 border border-slate-600/30 hover:scale-105 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{category.icon}</div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, j) => (
                      <span
                        key={j}
                        className="tech-item bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-600/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section ref={(el) => addSectionRef(el, 2)} className="tech-section text-center">
            <h2 className="text-3xl font-bold text-slate-100 mb-4">
              🌐 Tech Cloud Overview
            </h2>
            <p className="text-slate-300 text-lg mb-8">
              A visual map of the technologies that define my creative and engineering journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {cloudItems.map((item, i) => (
                <div
                  key={i}
                  className="cloud-item bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 text-slate-900 font-bold px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <span>{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </section>

          <section ref={(el) => addSectionRef(el, 3)} className="tech-section">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experienceLevels.map((level, i) => (
                <div
                  key={i}
                  className={`bg-gradient-to-br ${level.color} rounded-2xl p-6 border border-white/20 backdrop-blur-sm hover:scale-105 hover:shadow-2xl transition-all duration-500`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{level.icon}</div>
                    <h3 className="text-xl font-bold text-slate-100">
                      {level.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm mb-4">{level.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {level.items.map((item, j) => (
                      <span
                        key={j}
                        className="bg-slate-700/50 text-slate-300 text-xs px-3 py-1 rounded-full border border-slate-600/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-slate-300">
                      <span>Proficiency</span>
                      <span>{level.proficiency}%</span>
                    </div>
                    <div
                      ref={(el) => addProgressBarRef(el, i)}
                      className="w-full h-2 bg-slate-700/50 rounded-full overflow-hidden"
                    >
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full transition-all duration-1500 ease-out"
                        style={{
                          width: animatedProgress ? `${level.proficiency}%` : "0%",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        <footer className="text-center py-12 bg-slate-900/95 border-t border-slate-700/50 backdrop-blur-lg">
          <p className="text-slate-300 text-lg font-medium">
            © 2025 Thule Oscar – Software Engineer, AI Researcher & Inventor. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
}
