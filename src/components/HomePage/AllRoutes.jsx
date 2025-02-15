import { Outlet, Route, Routes } from "react-router-dom";
// import Contact from "../Contact/Contact";
import Home from "../Home/Home";
// import Therapist from "../Therapy/Therapist";
import Navbar from "../Ui/Navbar";

const AllRoutes = () => {
  return (
    <div>
      <div style={{ height: "8vh" }}>
        <Navbar />
      </div>

      <div className="flex" style={{ height: "92vh" }}>
        <div style={{ width: "100%", height: "92vh" }} className="bg-gray-100">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            {/* <Route path="/therapy" element={<Therapist />}></Route> */}
            {/* <Route path="/contact-details" element={<Contact />}></Route> */}
          </Routes>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AllRoutes;
