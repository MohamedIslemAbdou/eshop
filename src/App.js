import "./App.css";
import Header from "./components/header/Header";
import Layer2 from "./components/layer2/layer2";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Testimonials from "./components/Testimonials/Testimonials";
import Virtual from "./components/Virtual/Virtual";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Layer2></Layer2>
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
