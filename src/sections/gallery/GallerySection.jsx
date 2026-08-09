import { useState } from "react";

import pic1 from "@/assets/gallery/pic1.jpg";
import pic2 from "@/assets/gallery/pic2.jpg";
import pic3 from "@/assets/gallery/pic3.jpg";
import pic4 from "@/assets/gallery/pic4.jpg";
import pic5 from "@/assets/gallery/pic5.jpg";
import pic6 from "@/assets/gallery/pic6.jpg";

function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPremium, setShowPremium] = useState(false);

  return (
    <section className="border-b border-gray-200 bg-white px-6 py-16 dark:border-gray-800 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl">
        {/* Gallery Heading */}
        <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          My Gallery
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">
          A collection of photos and moments from my journey.
        </p>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">
          {/* PIC 1 - FREE */}
          <button
            type="button"
            onClick={() => setSelectedImage(pic1)}
            className="group w-full overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={pic1}
              alt="Gallery photo 1"
              className="h-56 w-full cursor-pointer object-cover transition duration-300 group-hover:scale-105 sm:h-64"
            />
          </button>

          {/* PIC 2 - PREMIUM */}
          <button
            type="button"
            onClick={() => setShowPremium(true)}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={pic2}
              alt="Premium gallery photo 2"
              className="h-56 w-full object-cover blur-md transition duration-300 group-hover:scale-105 sm:h-64"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
              <div className="text-center text-white">
                <div className="text-2xl sm:text-3xl">🔒</div>

                <p className="mt-2 text-sm font-semibold sm:text-base">
                  Premium Content
                </p>

                <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                  Click to unlock
                </p>
              </div>
            </div>
          </button>

          {/* PIC 3 - PREMIUM */}
          <button
            type="button"
            onClick={() => setShowPremium(true)}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={pic3}
              alt="Premium gallery photo 3"
              className="h-56 w-full object-cover blur-md transition duration-300 group-hover:scale-105 sm:h-64"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
              <div className="text-center text-white">
                <div className="text-2xl sm:text-3xl">🔒</div>

                <p className="mt-2 text-sm font-semibold sm:text-base">
                  Premium Content
                </p>

                <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                  Click to unlock
                </p>
              </div>
            </div>
          </button>

          {/* PIC 4 - PREMIUM */}
          <button
            type="button"
            onClick={() => setShowPremium(true)}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={pic4}
              alt="Premium gallery photo 4"
              className="h-56 w-full object-cover blur-md transition duration-300 group-hover:scale-105 sm:h-64"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
              <div className="text-center text-white">
                <div className="text-2xl sm:text-3xl">🔒</div>

                <p className="mt-2 text-sm font-semibold sm:text-base">
                  Premium Content
                </p>

                <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                  Click to unlock
                </p>
              </div>
            </div>
          </button>

          {/* PIC 5 - PREMIUM */}
          <button
            type="button"
            onClick={() => setShowPremium(true)}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={pic5}
              alt="Premium gallery photo 5"
              className="h-56 w-full object-cover blur-md transition duration-300 group-hover:scale-105 sm:h-64"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
              <div className="text-center text-white">
                <div className="text-2xl sm:text-3xl">🔒</div>

                <p className="mt-2 text-sm font-semibold sm:text-base">
                  Premium Content
                </p>

                <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                  Click to unlock
                </p>
              </div>
            </div>
          </button>

          {/* PIC 6 - PREMIUM */}
          <button
            type="button"
            onClick={() => setShowPremium(true)}
            className="group relative block w-full overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={pic6}
              alt="Premium gallery photo 6"
              className="h-56 w-full object-cover blur-md transition duration-300 group-hover:scale-105 sm:h-64"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 px-4">
              <div className="text-center text-white">
                <div className="text-2xl sm:text-3xl">🔒</div>

                <p className="mt-2 text-sm font-semibold sm:text-base">
                  Premium Content
                </p>

                <p className="mt-1 text-xs text-gray-200 sm:text-sm">
                  Click to unlock
                </p>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* FULL SCREEN - FREE PHOTO */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-4 top-4 text-2xl text-white hover:text-gray-300 sm:right-6 sm:top-6 sm:text-3xl"
            aria-label="Close image"
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Full size gallery"
            className="max-h-[85vh] max-w-full rounded-xl object-contain sm:max-h-[90vh] sm:max-w-[90vw]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      {/* PREMIUM POPUP */}
      {showPremium && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 sm:p-6"
          onClick={() => setShowPremium(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl sm:p-8 dark:bg-gray-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="text-4xl sm:text-5xl">🔒</div>

            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              Premium Gallery
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">
              This photo is available for premium members. Subscribe to unlock
              this content.
            </p>

            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition hover:bg-gray-800 sm:text-base dark:bg-white dark:text-black dark:hover:bg-gray-200"
              onClick={() => alert("Subscription feature coming soon!")}
            >
              Subscribe to Unlock
            </button>

            <button
              type="button"
              onClick={() => setShowPremium(false)}
              className="mt-3 w-full rounded-lg px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 sm:text-base dark:text-gray-300 dark:hover:bg-gray-800"
            >
              Maybe Later
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default GallerySection;

