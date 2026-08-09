import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

function ContactSection() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setMessageSent(true);
    event.currentTarget.reset();

    setTimeout(() => {
      setMessageSent(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="border-b border-gray-200 bg-white px-6 py-24 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect"
          description="Have a question, project idea, or just want to say hello? Feel free to reach out."
        />

        <div className="mt-8 grid gap-4 md:mt-10 md:grid-cols-2 md:gap-6">
          {/* Contact Information */}
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 dark:border-gray-800 dark:bg-gray-900 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Get in Touch
            </h3>

            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">
              I'm open to learning opportunities, student projects, and
              conversations about web development.
            </p>

            <div className="mt-7 space-y-5 sm:mt-8">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </p>

                <p className="mt-1 break-all text-sm text-gray-900 dark:text-white sm:text-base">
                  carillomiguel77@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Location
                </p>

                <p className="mt-1 text-sm text-gray-900 dark:text-white sm:text-base">
                  Cebu, Philippines
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Availability
                </p>

                <p className="mt-1 text-sm text-gray-900 dark:text-white sm:text-base">
                  Open for opportunities
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-7 border-t border-gray-200 pt-6 dark:border-gray-800 sm:mt-8">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Connect with me
              </p>

              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="https://github.com/Miguelito-77gil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:px-4 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  <span>◉</span>
                  GitHub
                </a>

                <a
                  href="https://www.facebook.com/antonioraze777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:px-4 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  <span>f</span>
                  Facebook
                </a>

                <a
                  href="https://www.instagram.com/migl.cr14/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100 sm:px-4 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-200 dark:hover:bg-gray-800"
                >
                  <span>◎</span>
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-8">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Send a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black sm:text-base dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black sm:text-base dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-y rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-black focus:ring-1 focus:ring-black sm:text-base dark:border-gray-700 dark:bg-gray-950 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-white dark:focus:ring-white"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>

              {messageSent && (
                <p className="rounded-lg bg-green-50 px-4 py-3 text-center text-sm font-medium text-green-700 dark:bg-green-950 dark:text-green-300">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

