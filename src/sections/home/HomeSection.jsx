import Button from "@/components/ui/Button";
import heroImage from "@/assets/miguel.jpg";

function HomeSection() {
  return (
    <section className="bg-white px-6 pt-10 dark:bg-gray-950 sm:pt-14">

      {/* Hero Content */}
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">

          {/* Hero Text */}
          <div className="pt-2">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
              Hello, I'm
            </p>

            <h1 className="mt-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
              Miguel Carillo
            </h1>

            <p className="mt-4 max-w-xl text-xl text-gray-600 dark:text-gray-300">
             “I'm a student learning web development and building my skills one project at a time.”
            </p>

            <p className="mt-5 max-w-xl leading-7 text-gray-600 dark:text-gray-300">
              I enjoy building modern, responsive websites and learning new
              technologies through real-world projects.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
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
          <div className="flex justify-center md:justify-end">
            <img
              src={heroImage}
              alt="Miguel Carillo"
              className="w-full max-w-sm rounded-2xl object-cover shadow-lg"
            />
          </div>

        </div>
      </div>

      {/* Full Width Divider Before About */}
      <div className="mt-16 w-full border-t border-gray-200 dark:border-gray-800" />

    </section>
  );
}

export default HomeSection;

