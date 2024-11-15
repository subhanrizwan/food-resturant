import React from "react";
import CustomCursor from "./components/cursor";
import Layout from "./components/Layout";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CustomCursor />
    </>
  );
}

export default App;
