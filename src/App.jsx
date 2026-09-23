// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Header from "./common/header/Id-Header";
// import Footer from "./common/footer/Id-Footer";
// import routes from "./routes/routes";



// export default function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         {routes.map((route) => (
//           <Route key={route.path} path={route.path} element={route.element} />
//         ))}
//         <Route path="/" element={<Navigate to="/careers" replace />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./common/header/Id-Header";
import Footer from "./common/footer/Id-Footer";
import routes from "./routes/Routes";


export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="/" element={<Navigate to="/careers" replace />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}