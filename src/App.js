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
function App() {
  return (
    <div className="bg_black">
      <Hero />
      <Mission/>
      <Partners/>
      <Algo/>
      <Wedo/>
      <Work/>
      <Team/>
      <Roadmap/>
      <Faqs/>
      <Footer/>
      {/* <Preloder/> */}
      {/* <Backtotop/> */}
    </div>
  );
}

export default App;
