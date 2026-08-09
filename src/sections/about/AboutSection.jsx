import SectionHeading from "@/components/ui/SectionHeading";

function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-gray-200 bg-white px-6 py-24 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="A little about myself"
          description="A quick look at who I am, my journey, and what I enjoy doing."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* A Little About Me */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900 md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              A Little About Me
            </h3>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
              I'm Miguel, a student and aspiring web developer who enjoys
              creating modern and responsive websites. I'm continuously
              improving my skills by building projects and exploring new
              technologies.
            </p>
          </div>

          {/* My Journey */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              My Journey
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
              I started my web development journey by learning the
              fundamentals of HTML, CSS, and JavaScript. As I continued
              learning, I became interested in React and modern frontend
              development.
            </p>
          </div>

          {/* What I Enjoy */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              What I Enjoy
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
              I enjoy designing clean interfaces, building responsive
              websites, learning new technologies, and turning ideas
              into working projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;