import "./App.css";
import { Outlet } from "react-router";
import Header from "@design/Header/Header";
import Footer from "@design/Footer/Footer";
import useAuth from "@functional/Auth/useAuth";

const App = () => {
  const { user } = useAuth();

  return (
    <>
      <Header user={user} />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default App;
