import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./common/header/Id-Header";
import Footer from "./common/footer/Id-Footer";
import "./App.css"
import routes from "./routes/Routes";


export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}