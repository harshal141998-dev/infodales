import { HashRouter, Routes, Route, Navigate, Router, BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate, Router } from "react-router-dom";
import Header from "./common/header/Id-Header";
import Footer from "./common/footer/Id-Footer";
import "./App.css"
import routes from "./routes/Routes";
import ScrollTopUp from "./common/scrollTopUp/ScrollToTop";
import NotFound from "./pages/NotFound/NotFound";


export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Header />
      <ScrollTopUp />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
}