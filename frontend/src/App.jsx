import { useEffect, useRef } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminDashboard from "./pages/AdminDashboard.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import HomePage from "./pages/Homepage.jsx";

function App() {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const onMouseMove = (e) => {
      if (!follower) return;
      follower.style.left = e.clientX + "px";
      follower.style.top = e.clientY + "px";
    };

    const isElementEnteringViewport = (elem) => {
      const bounding = elem.getBoundingClientRect();

      return (
        bounding.top <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.bottom >= 0 &&
        bounding.left <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.right >= 0
      );
    };

    const checkElements = () => {
      document.querySelectorAll(".scroll-el, .reveal-el").forEach((element) => {
        if (isElementEnteringViewport(element)) {
          element.classList.add("visible");
        }
      });
    };

    const checkScroll = () => {
      if (Math.round(window.scrollY) > 40) {
        document.body.classList.add("scrolled");
      } else {
        document.body.classList.remove("scrolled");
      }
    };

    const update = () => {
      checkElements();
      checkScroll();
    };

    let frame = 0;
    const observer = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    });
    observer.observe(document.body, { childList: true, subtree: true });

    update();

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("load", update);
    window.addEventListener("scroll", update, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("load", update);
      window.removeEventListener("scroll", update);
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className="custom-cursor-follower" />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
