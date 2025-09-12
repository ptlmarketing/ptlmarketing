import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Hero from "./page/Hero.jsx";
import About from "./page/About.jsx";
import OurServices from "./page/OurServices.jsx";
import Blog from "./page/blogs/Blog.jsx";
import BlogDetails from "./page/blogs/BlogDetails.jsx";
import FAQ from "./page/FAQ.jsx";
import ConatctUs from "./page/ConatctUs.jsx";
import Testimonials from "./page/Testimonials.jsx";
import PrivacyPolicy from "./page/PrivacyPolicy.jsx";
import TermsAndConditions from "./page/TermsAndConditions.jsx";
import NotFound from "./NotFound.jsx";
import AdminLayout from "./layouts/AdminLayout.jsx";
import Users from "./AdminComponents/pages/Users.jsx";
import Dashboard from "./AdminComponents/pages/Dashboard.jsx";
import Contact from "./AdminComponents/pages/Contact.jsx";
import CreateBlog from "./AdminComponents/pages/CreateBlog.jsx";
import SeeBlog from "./AdminComponents/pages/SeeBlog.jsx";
import Login from "./page/Auth/Login.jsx";
import PrivateRoute from "./utility/PrivateRoute.jsx";
import Loader from "./components/Loader.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<ConatctUs />} />
        <Route path="/testimonial" element={<Testimonials />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<NotFound />} />

      </Route>

      <Route path="/admin/login" element={<Login />} />

      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminLayout />
          </PrivateRoute>
        }
      >
        <Route path="" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="contacts" element={<Contact />} />
        <Route path="create-blog" element={<CreateBlog />} />
        <Route path="see-blogs" element={<SeeBlog />} />
      </Route>
    </>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
