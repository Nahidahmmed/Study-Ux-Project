import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

export default function Layout() {
  return <div>
    <Header/>
    <Outlet/>
    <Footer/>
  </div>;
}
