import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import logoImage from "@/assets/logo.jpg";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimateIn(true);
        });
      });
    } else {
      document.body.style.overflow = "unset";
      setAnimateIn(false);
    }
  }, [menuOpen]);

  const closeMenu = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setMenuOpen(false);
    }, 300); // matches duration-300
  };

  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/85 backdrop-blur-md dark:border-[#3A3B3C] dark:bg-[#18191A]/85">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        <nav className="flex items-center justify-between">
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-3"
            aria-label="Go to home"
          >
            <img
              src={logoImage}
              alt="Miguel logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-lg font-semibold tracking-wide text-gray-800 dark:text-gray-200">
              Miguelito
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-gray-700 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>
            <a
              href="/#about"
              className="text-sm font-medium text-gray-700 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
            >
              About
            </a>
            <Link
              to="/projects"
              className="text-sm font-medium text-gray-700 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </Link>
            <Link
              to="/gallery"
              className="text-sm font-medium text-gray-700 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-700 transition hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={toggleDarkMode}
              className="text-lg text-gray-700 transition-transform hover:scale-110 dark:text-gray-300"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              onClick={() => {
                if (menuOpen) {
                  closeMenu();
                } else {
                  setMenuOpen(true);
                }
              }}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-lg text-gray-800 transition hover:bg-gray-100 dark:border-[#3A3B3C] dark:bg-[#242526] dark:text-gray-200 dark:hover:bg-[#3A3B3C]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen &&
        createPortal(
          <div
            className={`fixed inset-x-0 top-[73px] bottom-0 z-[99999] bg-black/40 backdrop-blur-sm transition-opacity duration-300 ease-out dark:bg-black/60 md:hidden overflow-y-auto ${
              animateIn ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`rounded-b-3xl border-b border-x border-gray-200 bg-white/95 shadow-2xl backdrop-blur-md transition-all duration-300 ease-out dark:border-[#3A3B3C] dark:bg-[#18191A]/95 overflow-hidden ${
                animateIn
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-6 opacity-0"
              }`}
            >
              <div className="flex flex-col p-2">
                <Link
                  to="/"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#3A3B3C] dark:hover:text-white"
                >
                  Home
                </Link>
                <div className="mx-4 h-[1px] bg-gray-100 dark:bg-[#3A3B3C]" />

                <a
                  href="/#about"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#3A3B3C] dark:hover:text-white"
                >
                  About
                </a>
                <div className="mx-4 h-[1px] bg-gray-100 dark:bg-[#3A3B3C]" />

                <Link
                  to="/projects"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#3A3B3C] dark:hover:text-white"
                >
                  Projects
                </Link>
                <div className="mx-4 h-[1px] bg-gray-100 dark:bg-[#3A3B3C]" />

                <Link
                  to="/gallery"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#3A3B3C] dark:hover:text-white"
                >
                  Gallery
                </Link>
                <div className="mx-4 h-[1px] bg-gray-100 dark:bg-[#3A3B3C]" />

                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#3A3B3C] dark:hover:text-white"
                >
                  Contact
                </Link>
                <div className="mx-4 h-[1px] bg-gray-100 dark:bg-[#3A3B3C]" />

                <div className="flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#3A3B3C] dark:hover:text-white">
                  <span>Dark Mode</span>
                  <button
                    type="button"
                    onClick={toggleDarkMode}
                    className="relative inline-flex h-5 w-9 items-center rounded-full bg-gray-900 transition-colors focus:outline-none dark:bg-black"
                    role="switch"
                    aria-checked={darkMode}
                    aria-label="Toggle dark mode"
                  >
                    <span
                      className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                        darkMode ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </header>
  );
}

export default Navbar;