"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Centralized nav config
const navItems = [
  { path: "/", name: "Home", icon: "ph-house" },
  { path: "/projectlib", name: "Projects", icon: "ph-folders" },
  { path: "/Technologies", name: "Tech & Tools", icon: "ph-cpu" },
  { path: "/specialize", name: "Specialization", icon: "ph-target" },
  { path: "/contact", name: "Git Hub & Contacts", icon: "ph-github-logo" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0f2027]/90 backdrop-blur-md py-3 shadow-xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* === Logo Section === */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <div className="flex items-center gap-4">
                <h1 className="text-2xl lg:text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-[#3498db] to-[#2ecc71] bg-clip-text text-transparent">
                  <i className="ph ph-user-circle"></i>
                  Thule-Oscar
                </h1>
                <span className="hidden sm:flex text-xs sm:text-sm font-medium bg-[#2ecc71]/20 px-3 py-1 rounded-full text-white border border-[#2ecc71]/40">
                  <i className="ph ph-briefcase mr-1"></i> Portfolio
                </span>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg bg-[#0f2027]/80 border border-gray-800 text-white"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <i className={`ph ${isMobileMenuOpen ? "ph-x" : "ph-list"} text-xl`}></i>
              </button>
            </div>

            {/* === Desktop Nav Links === */}
            <nav className="hidden lg:flex bg-[#0f2027]/80 backdrop-blur-md border border-gray-800 rounded-2xl px-4 py-2 shadow-lg">
              <ul className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {navItems.map((item) => {
                  const isActive = item.path === pathname;

                  return (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={`relative px-3 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm ${
                          isActive
                            ? "text-white font-semibold"
                            : "text-gray-400 hover:text-white"
                        }`}
                        onMouseEnter={() => setHoveredPath(item.path)}
                        onMouseLeave={() => setHoveredPath(pathname)}
                      >
                        <i className={`${item.icon} text-lg`}></i>
                        <span>{item.name}</span>

                        {/* Active Glow */}
                        {isActive && (
                          <span className="absolute inset-0 bg-gradient-to-r from-[#3498db]/30 to-[#2ecc71]/30 rounded-xl border border-[#3498db]/50 -z-10 transition-all duration-500 shadow-md shadow-[#3498db]/30" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* === Profile Section === */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Experience Badge */}
              <div className="bg-[#0f2027]/80 backdrop-blur-md border border-gray-800 rounded-2xl px-4 py-2">
                <div className="text-center">
                  <p className="text-white text-sm font-semibold whitespace-nowrap">
                    Software Engineer
                  </p>
                  <p className="text-gray-300 text-xs">
                    Architecture & AI/ML/DL
                  </p>
                  <p className="text-[#2ecc71] text-xs font-medium mt-1">
                    7+ Years Experience
                  </p>
                </div>
              </div>

              {/* Profile Avatar */}
              <div className="flex gap-3">
                <div
                  className="w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 border-[#3498db] bg-gradient-to-br from-[#3498db]/20 to-[#2ecc71]/20 overflow-hidden transition-transform duration-300 hover:border-[#2ecc71] hover:scale-110 hover:rotate-3 cursor-pointer"
                  onClick={() => setIsImageModalOpen(true)}
                >
                  <img 
                    src="images/formalpic.jpg" 
                    alt="Thule-Oscar Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* === Mobile Nav Links === */}
          <nav
            className={`lg:hidden mt-4 transition-all duration-300 overflow-hidden ${
              isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-[#0f2027]/90 backdrop-blur-md border border-gray-800 rounded-2xl p-4 shadow-lg">
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const isActive = item.path === pathname;

                  return (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className={`relative px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 text-sm w-full ${
                          isActive
                            ? "text-white font-semibold bg-gradient-to-r from-[#3498db]/20 to-[#2ecc71]/20"
                            : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                        }`}
                      >
                        <i className={`${item.icon} text-lg`}></i>
                        <span>{item.name}</span>

                        {/* Active Indicator */}
                        {isActive && (
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#2ecc71] rounded-full" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>

              {/* Mobile Profile Info */}
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full border-2 border-[#3498db] overflow-hidden cursor-pointer"
                    onClick={() => setIsImageModalOpen(true)}
                  >
                    <img 
                      src="images/formalpic.jpg" 
                      alt="Thule-Oscar Profile" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-white text-sm font-semibold">
                      Software Engineer
                    </p>
                    <p className="text-gray-300 text-xs">
                      Architecture & AI/ML/DL
                    </p>
                    <p className="text-[#2ecc71] text-xs font-medium">
                      7+ Years Experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* === Decorative Waves (cleaner) === */}
        <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 overflow-hidden -z-10 opacity-60">
          <div
            className="absolute bottom-0 left-0 w-[200%] h-full animate-[slide_25s_linear_infinite]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q30 5 60 20 T120 20' stroke='%233498db' fill='none' stroke-width='2'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat-x",
            }}
          />
          <div
            className="absolute bottom-2 left-0 w-[200%] h-full animate-[slide_40s_linear_infinite]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15 Q30 30 60 15 T120 15' stroke='%232ecc71' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat-x",
            }}
          />
        </div>
      </header>

      {/* === Image Modal === */}
      {isImageModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
          onClick={() => setIsImageModalOpen(false)}
        >
          <div 
            className="relative max-w-2xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-12 right-0 text-white text-2xl hover:text-[#2ecc71] transition-colors"
              onClick={() => setIsImageModalOpen(false)}
            >
              <i className="ph ph-x"></i>
            </button>
            <img 
              src="images/formalpic.jpg" 
              alt="Thule-Oscar Profile" 
              className="w-full h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-2xl">
              <p className="text-white text-lg font-bold">Thule-Oscar</p>
              <p className="text-gray-300 text-sm">Software Engineer & Architect</p>
              <p className="text-[#2ecc71] text-sm">AI/ML/DL Specialist - 7+ Years Experience</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}