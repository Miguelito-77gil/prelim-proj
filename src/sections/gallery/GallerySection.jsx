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

  const premiumImages = [
    { image: pic2, number: 2 },
    { image: pic3, number: 3 },
    { image: pic4, number: 4 },
    { image: pic5, number: 5 },
    { image: pic6, number: 6 },
  ];

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 md:px-14 lg:px-6">

        {/* Gallery Heading */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            My Gallery
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">
            A collection of photos and moments from my journey.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 md:grid-cols-3">

          {/* FREE PHOTO */}
          <button
            type="button"
            onClick={() => setSelectedImage(pic1)}
            className="group w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#3A3B3C] dark:bg-[#242526] dark:hover:bg-[#2A2B2C]"
          >
            <div className="h-56 overflow-hidden sm:h-64">
              <img
                src={pic1}
                alt="Gallery photo 1"
                className="h-full w-full cursor-pointer object-cover transition duration-300 group-hover:scale-105"
              />
            </div>
          </button>

          {/* PREMIUM PHOTOS */}
          {premiumImages.map(({ image, number }) => (
            <button
              key={number}
              type="button"
              onClick={() => setShowPremium(true)}
              className="group relative w-full overflow-hidden rounded-2xl border border-gray-200 bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-[#3A3B3C] dark:bg-[#242526] dark:hover:bg-[#2A2B2C]"
            >
              <div className="relative h-56 overflow-hidden bg-[#18191A] sm:h-64">

                {/* Strongly Blurred Premium Image */}
                <img
                  src={image}
                  alt={`Premium gallery photo ${number}`}
                  className="h-full w-full scale-110 object-cover blur-2xl"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 px-4">
                  <div className="text-center text-white">

                    <div className="mx-auto mb-2 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-black dark:text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    </div>

                    <p className="mt-2 text-sm font-semibold sm:text-base">
                      Premium Content
                    </p>

                    <p className="mt-1 text-xs text-gray-300 sm:text-sm">
                      Click to unlock
                    </p>

                  </div>
                </div>
              </div>
            </button>
          ))}
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
            className="absolute right-4 top-4 text-2xl text-white transition hover:text-gray-300 sm:right-6 sm:top-6 sm:text-3xl"
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
            className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-xl sm:p-8 dark:border-[#3A3B3C] dark:bg-[#242526]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mx-auto flex items-center justify-center">
              <svg
                className="h-10 w-10 text-black dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>

            <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl">
              Premium Gallery
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base sm:leading-7">
              This photo is available for premium members. Subscribe to
              unlock this content.
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
              className="mt-3 w-full rounded-lg px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-100 sm:text-base dark:text-gray-300 dark:hover:bg-[#3A3B3C]"
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