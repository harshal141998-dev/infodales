

// Each route has a path, element, and label.

import CareerPage from "../pages/career/Career";
import HomePage from "../pages/home/Home";
import ServicesPage from "../pages/serviceAtInfodales/Service";
import BlogPage from "../pages/blog/blog";
import ContactPage from "../pages/contact/contact";
import AboutUsPag from "../pages/about/AboutUs";

// `showInNav` controls whether it appears in Header/Footer nav automatically.
const routes = [
    // { path: "/", label: "Home", element: <HomePage />, showInNav: true },
    // { path: "/about", label: "About", element: <AboutPage />, showInNav: true },
    // { path: "/services", label: "Services", element: <ServicesPage />, showInNav: true },
    // { path: "/blogs", label: "Blogs", element: <BlogsPage />, showInNav: true },
    { path: "/", label: "Home", element: <HomePage />, showInNav: true, showInFooter: true },
    { path: "/about", label: "About Us", element: <AboutUsPag />, showInNav: true, showInFooter: true },
    { path: "/career", label: "Career", element: <CareerPage />, showInNav: true, showInFooter: false },
    { path: "/services", label: "Services", element: <ServicesPage />, showInNav: true, showInFooter: false },
    { path: "/blog", label: "Blog", element: <BlogPage />, showInNav: true, showInFooter: false },
    { path: "/contact", label: "Contact", element: <ContactPage />, showInNav: true, showInFooter: true },
    // { path: "/contact", label: "Contact", element: <ContactPage />, showInNav: true },
];

export default routes;

// Convenience export: only the routes meant to appear in nav menus
export const navRoutes = routes.filter((r) => r.showInNav);
export const footerRoutes = routes.filter((r) => r.showInFooter);