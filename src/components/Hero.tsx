import { Link } from "react-scroll";
import { MagicCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <MagicCanvas />

      <div className="absolute bottom-10 w-full flex justify-center items-center flex-col">
        <div className="w-fit mx-auto flex items-center justify-center gap-6 bg-c-white dark:bg-secondary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 max-[330px]:hidden select-none">
          <p className="text-c-black dark:text-gray-300 text-sm sm:text-base">
            Try Clicking Screen!
          </p>
        </div>

        <Link to={"about"} href="#about" smooth={true} duration={500}>
          <div className="mouse_scroll">
            <div className="mouse border-c-black dark:border-white">
              <div className="wheel border-c-black dark:border-white"></div>
            </div>
            <div>
              <span className="m_scroll_arrows border-r-c-black dark:border-r-white border-b-c-black dark:border-b-white unu"></span>
              <span className="m_scroll_arrows border-r-c-black dark:border-r-white border-b-c-black dark:border-b-white doi"></span>
              <span className="m_scroll_arrows border-r-c-black dark:border-r-white border-b-c-black dark:border-b-white trei"></span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
