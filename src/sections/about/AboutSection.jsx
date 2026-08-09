import SectionHeading from "@/components/ui/SectionHeading";

function AboutSection() {
  return (
    <section
      id="about"
      className="border-b border-gray-200 bg-white px-6 py-24 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          
          title="About me"
          description="A little more about me, what I've learned, and what I enjoy doing."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* A Little About Me */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900 md:col-span-2">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              A Little About Me
            </h3>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
              I'm Miguel, a student who is learning web development and
              enjoying the process of building my own websites. I use my
              projects to practice what I learn and get better with each one.
            </p>
          </div>

          {/* My Journey */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              My Journey
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
              I started by learning the basics of HTML, CSS, and JavaScript.
              After getting more comfortable with them, I started learning
              React and using it to build more projects.
            </p>
          </div>

          {/* What I Enjoy */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              What I Enjoy
            </h3>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
              I enjoy working on website layouts, trying different designs,
              and figuring out how to make things work. I also like learning
              something new whenever I work on a project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
