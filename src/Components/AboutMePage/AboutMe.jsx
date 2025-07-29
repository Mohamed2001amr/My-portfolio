import { FaCalendarAlt, FaAddressCard } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { PiCertificateFill } from "react-icons/pi";
import MyImage from "../../Images/MyImage/Image2.png";
import HomeBackground from "../../Images/Background/Background3.jpg";
import { useEffect, useState } from "react";
import ImageShow from "../../UI/ImageShow";
import CustomSection from "../../UI/CustomSection";

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
    <CustomSection id="about" backgroundImage={HomeBackground} title="About Me" showTitle={showContent}>
      <div
        className={`space-y-4 transition-all duration-1000 ease-in-out
          ${showContent ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}
        `}
      >

        <div className="flex items-center space-x-2 text-xl">
          <FaAddressCard style={{ color: "#ff0095" }}/>
          <span style={{ color: "#ff0095" }} className="font-semibold"> Name: </span>
          <p>Mohamed Amr Fouad</p>
        </div>

        <div className="flex items-center space-x-2 text-xl">
          <MdLocationOn style={{ color: "#ff0095" }}/>
          <span style={{ color: "#ff0095" }} className="font-semibold"> City: </span>
          <p>Egypt,Suez</p>
        </div>

        <div className="flex items-center space-x-2 text-xl">
          <FaCalendarAlt style={{ color: "#ff0095" }}/>
          <span style={{ color: "#ff0095" }} className="font-semibold"> BirthDate: </span>
          <p>2001/1/9</p>
        </div>

        <div className="flex items-start text-xl shadow-md w-fit space-x-2">
          <PiCertificateFill style={{ color: "#ff0095", marginTop: 4 }} />
          <div>
            <span style={{ color: "#ff0095" }} className="font-semibold">Graduation:</span>
            
            <div className="mt-2 flex space-x-2">
              <span className="block font-bold">Collage:</span>
              <p className="">Badr University in Cairo</p>
            </div>

            <div className="mt-2 flex space-x-2">
              <span className="block font-bold">Field:</span>
              <p className="">Engineering & Technology</p>
            </div>

            <div className="mt-2 flex space-x-2">
              <span className="block font-bold">Major:</span>
              <p className="">Computer Engineering System</p>
            </div>
          </div>
        </div>

      </div>

      <ImageShow imageUrl={MyImage} alt="My Imgae" show={showImage} />
    </CustomSection>
  );
}
