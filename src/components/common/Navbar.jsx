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

  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <nav className="mx-auto max-w-6xl px-6 py-4">
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
            {/* Home */}
            <Link
              to="/"
              className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Home
            </Link>

            {/* About */}
            <a
              href="/#about"
              className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              About
            </a>

            {/* Projects */}
            <Link
              to="/projects"
              className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Projects
            </Link>

            {/* Gallery */}
            <Link
              to="/gallery"
              className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Gallery
            </Link>

            {/* Contact */}
            <Link
              to="/contact"
              className="text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              Contact
            </Link>

            {/* Dark Mode */}
            <button
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀" : "☾"}
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">

            {/* Dark Mode */}
            <button
              type="button"
              onClick={() => setDarkMode((current) => !current)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-black transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-lg text-gray-900 transition hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-4 border-t border-gray-200 pt-4 dark:border-gray-800 md:hidden">
            <div className="flex flex-col gap-1">

              <Link
                to="/"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
              >
                Home
              </Link>

              <a
                href="/#about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
              >
                About
              </a>

              <Link
                to="/projects"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
              >
                Projects
              </Link>

              <Link
                to="/gallery"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
              >
                Gallery
              </Link>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-900"
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

