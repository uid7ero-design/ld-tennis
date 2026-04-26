import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Offer from "./components/Offer";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Offer />
        <BookingForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
