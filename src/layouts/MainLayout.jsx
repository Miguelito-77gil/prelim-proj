import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#18191A]">

      {/* Header */}
      <header className="mx-auto max-w-6xl bg-white px-5 dark:bg-[#18191A] sm:px-8">
       <Navbar />
        </header>

      {/* Full Width Divider */}
      <div className="w-full border-t border-gray-200 dark:border-[#3A3B3C]" />

      {/* Main Content with Vertical Borders */}
      <div className="mx-auto max-w-6xl border-x border-gray-200 dark:border-[#3A3B3C]">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>

      {/* Full Width Divider */}
      <div className="w-full border-t border-gray-200 dark:border-[#3A3B3C]" />

      {/* Footer */}
      <footer className="mx-auto max-w-6xl bg-white px-5 dark:bg-[#18191A] sm:px-8">
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;

