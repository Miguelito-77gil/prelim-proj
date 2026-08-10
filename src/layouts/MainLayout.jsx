import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">

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