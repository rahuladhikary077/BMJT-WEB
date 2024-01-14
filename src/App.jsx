// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header, Mainslide, Our3Ws, WhatWeOffer, Surajchacha, Roadmap, Questions, Footer, PageNotFound } from "./components";
import "../src/App.css";
import Spice_Page from "./pages/SpicePage/spice_page"
import Rice_Page from './pages/RicePage/rice_page';
import About_Page from './pages/AboutPage/about_page'
import Blogs_Page from './pages/BlogsPage/blogs_page'



const HomePage = () => (
  <>
    <Header />
    <Mainslide />
    <Our3Ws />
    <WhatWeOffer />
    <Surajchacha />
    <Roadmap />
    <Questions />
    <Footer />
  </>
);

const RicePage = () => (
  <>
    <Header />
    <Rice_Page/>
    <Footer />
  </>
);

const SpicePage = () => (
  <>
    <Header />
    <Spice_Page/>
    <Footer />
  </>
);

const AboutPage = () => (
  <>
    <Header />
    <About_Page/>
    <Footer />
  </>
);

const BlogsPage = () => (
  <>
    <Header />
    <Blogs_Page/>
    <Footer />
  </>
);
const NotFoundPage = () => (
  <>
    <div className="not-found-page">
      <Header />
      <PageNotFound />
      <Footer className="not-found-footer" />
    </div>

  </>
);

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/rices" element={<RicePage />} />
      <Route path="/spices" element={<SpicePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blogs" element={<BlogsPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
);

export default App;
