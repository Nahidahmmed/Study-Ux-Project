import { Outlet } from "react-router-dom";

import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";



export default function Layout() {
  return <div>
    <Header/>
    <Outlet/>
    <Footer/>
  </div>;
}
