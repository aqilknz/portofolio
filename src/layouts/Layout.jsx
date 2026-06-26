import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedBackground from "../components/common/AnimatedBackground";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main className="pt-10">{children}</main>
      <Footer />
    </div>
  );
}
