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
    <section
      id="gallery"
      className="border-b border-gray-200 bg-white px-6 py-24 dark:border-gray-800 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400">
          Gallery
        </p>

        <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          My Gallery
        </h2>

        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300">
          A collection of photos and moments from my journey.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">

          {/* PIC 1 - FREE */}
          <button
            type="button"
            onClick={() => setSelectedImage(pic1)}
            className="overflow-hidden rounded-2xl shadow-sm"
          >
            <img
              src={pic1}
              alt="Gallery photo 1"
              className="h-64 w-full cursor-pointer object-cover transition duration-300 hover:scale-105"
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
              className="h-64 w-full object-cover blur-md transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center text-white">
                <div className="text-3xl">🔒</div>
                <p className="mt-2 font-semibold">Premium Content</p>
                <p className="mt-1 text-sm text-gray-200">
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
              className="h-64 w-full object-cover blur-md transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center text-white">
                <div className="text-3xl">🔒</div>
                <p className="mt-2 font-semibold">Premium Content</p>
                <p className="mt-1 text-sm text-gray-200">
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
              className="h-64 w-full object-cover blur-md transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center text-white">
                <div className="text-3xl">🔒</div>
                <p className="mt-2 font-semibold">Premium Content</p>
                <p className="mt-1 text-sm text-gray-200">
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
              className="h-64 w-full object-cover blur-md transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center text-white">
                <div className="text-3xl">🔒</div>
                <p className="mt-2 font-semibold">Premium Content</p>
                <p className="mt-1 text-sm text-gray-200">
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
              className="h-64 w-full object-cover blur-md transition duration-300 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center text-white">
                <div className="text-3xl">🔒</div>
                <p className="mt-2 font-semibold">Premium Content</p>
                <p className="mt-1 text-sm text-gray-200">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-3xl text-white hover:text-gray-300"
            aria-label="Close image"
          >
            ✕
          </button>

          <img
            src={selectedImage}
            alt="Full size gallery"
            className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      {/* PREMIUM POPUP */}
      {showPremium && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          onClick={() => setShowPremium(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl dark:bg-gray-900"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="text-5xl">🔒</div>

            <h3 className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
              Premium Gallery
            </h3>

            <p className="mt-3 leading-7 text-gray-600 dark:text-gray-300">
              This photo is available for premium members.
              Subscribe to unlock this content.
            </p>

            <button
              type="button"
              className="mt-6 w-full rounded-lg bg-black px-5 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
              onClick={() => alert("Subscription feature coming soon!")}
            >
              Subscribe to Unlock
            </button>

            <button
              type="button"
              onClick={() => setShowPremium(false)}
              className="mt-3 w-full rounded-lg px-5 py-3 font-medium text-gray-600 transition hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
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