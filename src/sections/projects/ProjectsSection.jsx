import { Link } from "react-router-dom";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import logoImage from "@/assets/logo.jpg";

function ProjectsSection() {
  const [showComingSoon, setShowComingSoon] = useState(false);

  const comingSoonProjects = [1, 2, 3, 4, 5];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="My Projects"
          description="A collection of projects I have created and projects currently in development."
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured Project */}
          <Link
            to="/"
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={logoImage}
                alt="Personal Portfolio Website"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                Featured Project
              </p>

              <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                Personal Portfolio Website
              </h2>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                A responsive personal portfolio website built while learning
                modern web development.
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {["React", "Vite", "Tailwind CSS"].map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700 dark:bg-gray-800 dark:text-gray-300"
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
              className="group overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                <div className="flex h-full items-center justify-center text-5xl blur-sm">
                  Project
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <div className="text-center text-white">
                    <p className="font-semibold">Coming Soon</p>

                    <p className="mt-1 text-xs text-gray-200">
                      Click to view
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                  Future Project
                </p>

                <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Project Coming Soon
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  A new project will be added here in the future.
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Coming Soon Popup */}
      {showComingSoon && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
          onClick={() => setShowComingSoon(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-gray-900"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Project Coming Soon
            </h2>

            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
              I'm currently learning and building more projects. This section
              will be updated as new projects are completed.
            </p>

            <button
              type="button"
              onClick={() => setShowComingSoon(false)}
              className="mt-6 rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
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
