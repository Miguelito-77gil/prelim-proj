import SectionHeading from "@/components/ui/SectionHeading";

function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-14 lg:px-6">

        <SectionHeading
          title="About Me"
          description="A little more about me, my journey, and what I enjoy."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">

          {/* A Little About Me */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#3A3B3C] dark:bg-[#242526] dark:hover:bg-[#2A2B2C]">
            <h3 className="text-xl font-semibold text-gray-950 dark:text-white">
              A Little About Me
            </h3>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600 dark:text-gray-300">
              I'm Miguel, a student who is learning web development and
              enjoying the process of building my own websites. I use my
              projects to practice what I learn and get better with each one.
            </p>
          </div>

          {/* My Journey */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#3A3B3C] dark:bg-[#242526] dark:hover:bg-[#2A2B2C]">
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
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#3A3B3C] dark:bg-[#242526] dark:hover:bg-[#2A2B2C]">
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

      {/* Full Width Divider */}
      <div className="mt-14 w-full border-t border-gray-200 dark:border-[#3A3B3C] sm:mt-16" />
    </section>
  );
}

export default AboutSection;

