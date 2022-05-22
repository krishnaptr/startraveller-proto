import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import chats from "./images/chats.png";

function App() {
  return (
    <div>
      <img src={chats} className="w-20 fixed bottom-6 right-6 z-50 cursor-pointer" alt=""/>
      <Header />
      <Carousel />
      <div className="pt-52">
        <Section1 />
      </div>
      <div className="mt-16">
        <Section2 />
      </div>
      <div className="mt-28">
        <Section3 />
      </div>
      <div className="mt-24 xl:mt-16 mb-20">
        <Section4 />
      </div>
      <div>
        <Section5 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
