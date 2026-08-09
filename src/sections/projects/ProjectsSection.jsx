import { Link } from "react-router-dom";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import logoImage from "@/assets/logo.jpg";

function ProjectsSection() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const comingSoonProjects = [1, 2, 3, 4, 5];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-14 lg:px-6">
        <SectionHeading
          title="Projects"
          description="A collection of projects I've built while learning and improving my web development skills."
        />

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

          {/* Featured Project */}
          <Link
            to="/"
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#3A3B3C] dark:bg-[#242526] dark:hover:bg-[#2A2B2C]"
          >
            <div className="h-44 overflow-hidden bg-gray-100 dark:bg-[#18191A] sm:h-48">
              <img
                src={logoImage}
                alt="Personal Portfolio Website"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Featured Project
              </p>

              <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                Personal Portfolio Website
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                This is the portfolio website I built while learning React,
                Vite, and Tailwind CSS.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Vite", "Tailwind CSS"].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-[#3A3B3C] dark:text-gray-200"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </Link>

          {/* Coming Soon Projects */}
          {comingSoonProjects.map((project) => (
            <button
              key={project}
              type="button"
              onClick={() => setShowComingSoon(true)}
              className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#3A3B3C] dark:bg-[#242526] dark:hover:bg-[#2A2B2C]"
            >
              <div className="relative h-44 overflow-hidden bg-gray-200 dark:bg-[#18191A] sm:h-48">
                <div className="flex h-full items-center justify-center text-4xl blur-sm sm:text-5xl">
                  Project
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
                  <div className="text-center text-white">
                    <p className="text-sm font-semibold sm:text-base">
                      Coming Soon
                    </p>

                    <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                      Click to view
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Future Project
                </p>

                <h2 className="mt-2 text-lg font-semibold text-gray-900 dark:text-white sm:text-xl">
                  Project Coming Soon
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  I have more project ideas that I want to work on as I
                  continue learning.
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto mt-14 w-full max-w-6xl border-t border-gray-200 px-6 dark:border-[#3A3B3C] sm:mt-16 sm:px-8 md:px-14 lg:px-6" />

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl sm:p-8 dark:bg-[#242526]"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              More Projects Soon
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">
              I'm still learning and working on new projects. I'll add them
              here once they're ready.
            </p>

            <button
              type="button"
              onClick={() => setShowComingSoon(false)}
              className="mt-6 w-full rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-gray-800 sm:w-auto sm:text-base dark:bg-white dark:text-black dark:hover:bg-gray-200"
            >
              Got it
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;

