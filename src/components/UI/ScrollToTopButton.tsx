import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (typeof window === 'undefined') return;
    
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (typeof window === 'undefined') return;
    
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      className={`${
        isVisible ? "block" : "hidden"
      } bg-red-600 fixed bottom-6 right-6 z-50 rounded-md p-3 text-white hover:opacity-90 focus:outline-none`}
      onClick={scrollToTop}
      data-aos="zoom-in"
    >
      <IoIosArrowUp />
    </button>
  );
};
