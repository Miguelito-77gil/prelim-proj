import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logoImage from "@/assets/logo.jpg";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleDarkMode = () => {
    setDarkMode((current) => !current);
  };

  return (
        <header className="border-b border-gray-200 bg-transparent dark:border-[#3A3B3C]">
         <nav className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
        {/* Navbar Top */}
        <div className="flex items-center justify-between">

          {/* Logo */}
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

            <span className="text-lg font-bold text-gray-900 dark:text-white">
              Miguelito
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex">

            <Link
              to="/"
              className="text-sm font-medium text-gray-950 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>

            <a
              href="/#about"
              className="text-sm font-medium text-gray-950 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              About
            </a>

            <Link
              to="/projects"
              className="text-sm font-medium text-gray-950 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </Link>

            <Link
              to="/gallery"
              className="text-sm font-medium text-gray-950 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="text-sm font-medium text-gray-950 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </Link>

            {/* Dark Mode Icon */}
            <button
              type="button"
              onClick={toggleDarkMode}
              className="text-lg font-bold text-gray-950 transition-transform hover:scale-110 dark:text-white"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-3 md:hidden">

            {/* Dark Mode Icon */}
            <button
               type="button"
                  onClick={toggleDarkMode}
                    className="relative z-50 text-xl font-bold text-black transition-transform hover:scale-110 dark:text-white"
                  aria-label="Toggle dark mode"
                    >
                    {darkMode ? "☀" : "☾"}
                </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-lg text-gray-900 transition hover:bg-gray-100 dark:border-[#3A3B3C] dark:bg-[#242526] dark:text-white dark:hover:bg-[#3A3B3C]"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-[#3A3B3C] md:hidden">
            <div className="flex flex-col gap-1">

              <Link
                to="/"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#242526]"
              >
                Home
              </Link>

              <a
                href="/#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#242526]"
              >
                About
              </a>

              <Link
                to="/projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#242526]"
              >
                Projects
              </Link>

              <Link
                to="/gallery"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#242526]"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-[#242526]"
              >
                Contact
              </Link>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navbar;

