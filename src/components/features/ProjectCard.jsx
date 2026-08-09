function ProjectCard({ title, description, technologies = [] }) {
  return (
    <article
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md
      dark:border-gray-800 dark:bg-gray-900"
    >
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
        {description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;