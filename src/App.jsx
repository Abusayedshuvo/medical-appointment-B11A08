import "./App.css";
import Banner from "./component/Banner/Banner";
import Doctors from "./component/Doctors/Doctors";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Doctors></Doctors>
      <Footer></Footer>
    </>
  );
}

export default App;
