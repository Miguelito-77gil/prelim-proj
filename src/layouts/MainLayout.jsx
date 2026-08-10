import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";
import backgroundImage from "@/assets/mainbg.jpg";

function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* Whole Website Background */}
      <div
        className="pointer-events-none fixed inset-0 -z-20 scale-105 bg-cover bg-center bg-no-repeat blur-md"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
        aria-hidden="true"
      />

      {/* Light / Dark Overlay */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-white/60 dark:bg-black/50"
        aria-hidden="true"
      />

      {/* Header */}
     <header className="relative z-10 mx-auto max-w-6xl bg-transparent px-5 sm:px-8">
       <Navbar />
        </header>

      {/* Divider */}
      <div className="relative z-10 w-full border-t border-gray-200 dark:border-[#3A3B3C]" />

      {/* Main */}
      <div className="relative z-10 mx-auto max-w-6xl border-x border-gray-200 dark:border-[#3A3B3C]">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      {/* Divider */}
      <div className="relative z-10 w-full border-t border-gray-200 dark:border-[#3A3B3C]" />

      {/* Footer */}
      <footer className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <Footer />
      </footer>

    </div>
  );
}

export default MainLayout;