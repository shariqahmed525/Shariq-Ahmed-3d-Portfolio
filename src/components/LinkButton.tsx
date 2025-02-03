import Tilt from "react-parallax-tilt";
import { FaGithub } from "react-icons/fa";
import { SiAppstore } from "react-icons/si";
import { BiLogoPlayStore } from "react-icons/bi";
import { GoLink } from "react-icons/go";

const LinkButton = ({
  ios_link = "",
  live_link = "",
  classNames = "",
  android_link = "",
  source_code_link = "",
  ...rest
}) => {
  const links = [
    {
      link: source_code_link,
      alt: "github source code",
      icon: <FaGithub size={23} color={"#f3f7fb"} />,
    },
    {
      link: android_link,
      alt: "play store link",
      icon: <BiLogoPlayStore size={23} color="#f3f7fb" />,
    },
    {
      link: ios_link,
      alt: "app store link",
      icon: <SiAppstore size={23} color="#f3f7fb" />,
    },
    {
      link: live_link,
      alt: "live demo",
      icon: <GoLink size={23} color="#f3f7fb" />,
    },
  ];

  return (
    <div
      className={
        classNames || "absolute inset-0 gap-2 flex flex-col items-end m-3"
      }
    >
      {links
        .filter((link) => link.link)
        .map((link, index) => (
          <Tilt
            key={`link-button-${index}`}
            className="w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <div className="bg-black border border-solid border-gray-600 rounded-full">
              <div
                className={`bg-black-gradient p-[1px] rounded-full flex justify-center items-center cursor-pointer select-none`}
              >
                <a
                  href={link?.link}
                  title={link?.alt}
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex justify-center items-center"
                  {...rest}
                >
                  {link?.icon}
                </a>
              </div>
            </div>
          </Tilt>
        ))}
    </div>
  );
};

export default LinkButton;
