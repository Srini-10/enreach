import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Home/Header.tsx";
import Newsletter from "../components/Home/Newsletter.tsx";
import Popup from "../components/Home/Popup.tsx";
import Footer from "../components/Footer.tsx";
import Navbar from "../components/Navbar.tsx";
import Templates from "../components/Home/Templates.tsx";
import Product from "../components/Home/Product.tsx";
import Smart from "../components/Home/Smart.tsx";
import GraphLoadingAnimation from "../animation/GraphLoadingAnimation.tsx";
import GraphLoadingAnimationMobile from "../animation/GraphLoadingAnimationMobile.tsx"; // Import mobile animation
import NetworkConnectionWarning from "../components/NetworkConnectionWarning.tsx"; // Import the new component

const Home = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false); // State to check if it's mobile view
  const [isOffline, setIsOffline] = useState(!navigator.onLine); // Check network status

  useEffect(() => {
    // Check if screen width is less than 768px
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Check on initial load
    handleResize();

    return () => {
      // Cleanup the event listener
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Simulate page load completion (e.g., fetch data, images, etc.)
    const timer = setTimeout(() => {
      setIsLoading(false); // Set loading to false after 2 seconds (simulating data load)
    }, 2000); // Adjust duration as needed

    // Event listeners for online/offline events
    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => setIsOffline(false);

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
      clearTimeout(timer); // Clean up the timer on component unmount
    };
  }, []);

  return (
    <>
      {/* Display Network Connection Warning if offline */}
      {isOffline && <NetworkConnectionWarning />}

      {/* Only show the loading animation if it's not offline */}
      {!isOffline && (
        <>
          {/* Show mobile loading animation if screen width is < 768px */}
          {isLoading && isMobile && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50">
              <GraphLoadingAnimationMobile />
            </div>
          )}

          {/* Show desktop loading animation for larger screens */}
          {isLoading && !isMobile && (
            <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-50">
              <GraphLoadingAnimation />
            </div>
          )}

          {/* Main content */}
          <div
            ref={containerRef}
            className={`transition-opacity duration-1000 ${
              isLoading ? "opacity-0" : "opacity-100"
            } max-w-full max-h-screen text-white overflow-y-scroll scroll-smooth`}
          >
            <Navbar />
            <div>
              <Header />
              <Popup containerRef={containerRef} />
              <Templates />
              <Smart />
              <Product />
              <Newsletter />
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
