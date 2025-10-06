import "./App.css";
import { Outlet } from "react-router";
import Header from "@design/Header/Header";
import Footer from "@design/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
