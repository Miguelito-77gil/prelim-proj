import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logoImage from "@/assets/logo.jpg";

function Navbar() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-950">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
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

        {/* Navigation */}
        <div className="flex items-center gap-3 sm:gap-6">
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
            className="hidden text-sm font-medium text-gray-600 transition hover:text-black dark:text-gray-300 dark:hover:text-white sm:block"
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
      </nav>
    </header>
  );
}

export default Navbar;

