import { BsFacebook } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

export const SocialNetworks = () => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <h5 className="text-white text-xl font-medium" data-aos="zoom-in">
          Redes
        </h5>
        <div className="flex flex-row items-center gap-5">
          <a
            href="https://facebook.com"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <BsFacebook className="text-white" size={20} />
          </a>

          <a
            href="https://twitter.com"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <BsTwitterX className="text-white" size={20} />
          </a>

          <a
            href="https://instagram.com"
            target="_blank"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <BsInstagram className="text-white" size={20} />
          </a>
        </div>
      </div>
    </>
  );
};
