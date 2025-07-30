import { signIn } from "next-auth/react";
import { FaUserCircle } from "react-icons/fa";

interface LoginButtonProps {
  isMobile?: boolean;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ isMobile }) => {
  return (
    <button
      className="flex flex-row items-center gap-3 text-white transition-colors hover:text-gray-300"
      onClick={() => signIn("google")}
      data-aos="zoom-in"
      data-aos-delay="600"
    >
      <FaUserCircle size={20} />
      <span className={`${isMobile ? "flex" : "hidden lg:flex"}`}>
        Iniciar sesión
      </span>
    </button>
  );
};
