import { MdEngineering, MdOutlineDataThresholding } from "react-icons/md";
import { FaGithub, FaLinkedin, FaTiktok, FaEnvelope } from "react-icons/fa";
import MyImage from "../../Images/MyImage/Image1.png";
import HomeBackground from "../../Images/Background/HomeBackground.jpg";
import { useEffect, useState } from "react";
import ImageShow from "../../UI/ImageShow";
import CustomSection from "../../UI/CustomSection";
import CustomeLink from "../../UI/CustomeLink";

export default function Home() {
  const [showImage, setShowImage] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowImage(true);
      setShowContent(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <CustomSection id="home" backgroundImage={HomeBackground} title="Home" showTitle={showContent}>
      <div
        className={`space-y-4 transition-all duration-1000 ease-in-out
          ${showContent ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
      >
        <h1 className="text-4xl font-bold">
          HELLO <span className="text-cyan-500"> I’M </span> Mohamed Amr
        </h1>

        <p className="text-3xl font-semibold flex items-center gap-2">
          <MdEngineering className="text-2xl text-cyan-500" />
          <span> Software Engineering </span>
        </p>

        <p className="text-3xl items-center text-cyan-500 font-bold text-center w-1/2">
          <span> & </span>
        </p>

        <p className="text-3xl font-semibold flex items-center gap-2">
          <MdOutlineDataThresholding className="text-2xl text-cyan-500" />
          <span> Business Analyst </span>
        </p>

        <div className="flex space-x-3">
          <a
            href="#contact"
            className="relative overflow-hidden w-1/2 px-4 py-2 rounded-full border border-white text-white z-10 group text-center"
          >
            <span className="relative z-20">Contact Me</span>
            <span className="absolute inset-0 bg-cyan-500 origin-bottom scale-y-0 transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0"></span>
          </a>
        </div>

        <div className="flex space-x-8 text-xl">
          <CustomeLink href="https://github.com/Mohamed2001amr">
            <FaGithub className="cursor-pointer text-2xl" />
          </CustomeLink>

          <CustomeLink href="https://www.linkedin.com/in/mohamed-abuewisha-3b57981a3">
            <FaLinkedin className="cursor-pointer text-2xl" />
          </CustomeLink>

          <CustomeLink href="https://www.tiktok.com/@codelancer5">
            <FaTiktok className="cursor-pointer text-2xl" />
          </CustomeLink>

          <CustomeLink href="https://mail.google.com/mail/?view=cm&to=mohamedabuewisha00@gmail.com">
            <FaEnvelope className="cursor-pointer text-2xl" />
          </CustomeLink>
        </div>
      </div>

      <ImageShow imageUrl={MyImage} alt="My Imgae" show={showImage} />
    </CustomSection>
  );
}
