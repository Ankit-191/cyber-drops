import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Mission from "./components/Mission";
import Partners from "./components/Partners";
import Algo from "./components/Algo";
import Wedo from "./components/Wedo";
import Work from "./components/Work";
import Team from "./components/Team";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";
import Roadmap from "./components/Roadmap";
import Preloder from "./components/Preloder";
import Backtotop from "./components/Backtotop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);
  return (
    <div className="bg_black overflow-hidden">
      <Hero />
      <Mission />
      <Partners />
      <Algo />
      <Wedo />
      <Work />
      <Team />
      <Roadmap />
      <Faqs />
      <Footer />
      <Preloder/>
      <Backtotop/>
    </div>
  );
}

export default App;
