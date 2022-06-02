import Carousel from "./components/Carousel/Carousel";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import videoBg from '/Users/amarcin/web/src/components/VideoBgTrim.mp4'

function App() {
  return (
    <div className="App">
      <video src={videoBg} autoPlay loop muted />
      <Navbar />
      <HeroSection />
      <Carousel />
    </div>
  )
}

export default App;  