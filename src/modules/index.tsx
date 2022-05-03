import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AboutPage = lazy(() => import('./about'));
const HomePage = lazy(() => import('./home'));

const MainApp: React.FC = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="about" element={<AboutPage />} />
  </Routes>
);

export default MainApp;