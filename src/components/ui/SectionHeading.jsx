function SectionHeading({ eyebrow, title, description }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
        {eyebrow}
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;