import Button from "@/components/ui/Button";
import heroImage from "@/assets/miguel.jpg";

function HomeSection() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-10 lg:px-6">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">

          {/* Hero Text */}
          <div className="pt-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Hello, I'm
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              Miguel Carillo
            </h1>

            <p className="mt-4 max-w-xl text-lg leading-7 text-gray-600 dark:text-gray-300 sm:text-xl">
              I'm currently learning web development and improving my skills
              through different projects.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-base sm:leading-7">
              I like creating websites, trying new things, and learning more
              as I work on each project.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <Button href="/projects">
                View Projects
              </Button>

              <Button
                href="#contact"
                className="bg-white text-black ring-1 ring-gray-300 hover:bg-gray-50 dark:bg-gray-900 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center pt-2 md:justify-end md:pt-4">
            <img
              src={heroImage}
              alt="Miguel Carillo"
              className="w-full max-w-[260px] rounded-2xl object-cover shadow-lg sm:max-w-xs"
            />
          </div>

        </div>
      </div>

      {/* Full Width Divider */}
      <div className="mt-14 w-full border-t border-gray-200 dark:border-gray-800 sm:mt-16" />
    </section>
  );
}

export default HomeSection;