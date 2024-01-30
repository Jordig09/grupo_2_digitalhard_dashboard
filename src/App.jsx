import { Outlet } from "react-router-dom";

import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";

import "./App.css";

function App() {
  return (
    <div id="wrapper" className="vw-100">
      <SideBar />
      <div id="content-wrapper" className="d-flex flex-column vh-100">
        {/* <!-- Topbar --> */}
        <TopBar />
        {/* <!-- End of Topbar --> */}
        <Outlet />

        <Footer />
      </div>
    </div>
  );
}

export default App;
