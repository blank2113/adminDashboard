import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/loginPage/LoginPage";
import MainPage from "./pages/mainPage/MainPage";
import TourTypePage from "./pages/tourTypesPage/TourTypePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="main/tour_types" element={<TourTypePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
