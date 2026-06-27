import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#07090F] text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-20">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;