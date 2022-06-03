import Carousel from "./components/Carousel/Carousel";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <video src={'https://amplify-web-staging-11952-deployment.s3.us-west-1.amazonaws.com/VideoBgTrim.mp4'} autoPlay loop muted />
      <Navbar />
      <HeroSection />
      <Carousel />
    </div>
  )
}

export default App;  