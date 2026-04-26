import Nav from "./components/Nav";
import BouncingLogo from "./components/BouncingLogo";
import Hero from "./components/Hero";
import About from "./components/About";
import Positioning from "./components/Positioning";
import Coaching from "./components/Coaching";
import HowItWorks from "./components/HowItWorks";
import Location from "./components/Location";
import BookingForm from "./components/BookingForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <BouncingLogo />
      <main>
        <Hero />
        <About />
        <Positioning />
        <Coaching />
        <HowItWorks />
        <Location />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
