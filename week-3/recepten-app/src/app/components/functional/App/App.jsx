import Footer from "@design/Footer/Footer";
import Header from "@design/Header/Header";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
