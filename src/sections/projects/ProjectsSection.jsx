import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/features/ProjectCard";

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-b border-gray-200 bg-white px-6 py-24 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Here are some of the projects I've worked on while learning web development."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Portfolio Website"
            description="A responsive personal portfolio built with React, Vite, and Tailwind CSS."
            technologies={["React", "Vite", "Tailwind CSS"]}
          />

          <ProjectCard
            title="Student Project"
            description="A web application created to practice frontend development and component-based design."
            technologies={["React", "JavaScript", "Tailwind CSS"]}
          />

          <ProjectCard
            title="Landing Page"
            description="A clean and responsive landing page focused on layout, typography, and user experience."
            technologies={["HTML", "CSS", "JavaScript"]}
          />
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;