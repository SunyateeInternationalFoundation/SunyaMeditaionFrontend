import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllRoutes from "./components/HomePage/AllRoutes";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<AllRoutes />}></Route>
      </Routes>
    </div>
  );
}

export default App;
