import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const App = () => { 
  return (
    <div className="overflow-hidden text-neutral-300 bg-white">
      <div className="container mx-auto px-8 bg-white">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default App;
