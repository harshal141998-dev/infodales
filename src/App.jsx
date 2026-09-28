import {  Routes, Route, Navigate, Router } from "react-router-dom";
import Header from "./common/header/Id-Header";
import Footer from "./common/footer/Id-Footer";
import "./App.css"
import routes from "./routes/Routes";
import ScrollTopUp from "./common/scrollTopUp/ScrollToTop";
import { BrowserRouter } from "react-router-dom";


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollTopUp />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}