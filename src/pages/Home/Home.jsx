import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./Home.css";
import asset from "../../assets/assets";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/files/PatrickBuenaventura_CV.pdf";
    link.download = "PatrickBuenaventura_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      mirror: true,
    });

    return () => {
      AOS.refresh();
    };
  }, []);
  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center gap-10 w-100%"
    >
      <div data-aos="fade-right" className="flex flex-col gap-3">
        <h2 className="text-3xl text-[#2b2c34] font-bold">
          Hi, I'm Patrick Duncan
        </h2>
        <h1 className="text-4xl text-[#2b2c34] font-bold pr-5 looping-text">
          Aspiring Full Stack Developer
        </h1>
        <div className="flex gap-5 mt-2">
          <div className="w-7 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <a href="https://www.linkedin.com/in/patrick-duncan-buenaventura/">
              <img className="w-auto" src={asset.linkedin} alt="" />
            </a>
          </div>
          <div className="w-7 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <img className="w-auto" src={asset.github} alt="" />
          </div>
          <div className="w-7 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <a href="https://www.facebook.com/patwenks/">
              <img className="w-auto" src={asset.fb} alt="" />
            </a>
          </div>
          <div className="w-7 transition-transform duration-200 hover:scale-110 cursor-pointer">
            <a href="https://www.instagram.com/iiam.dxncan/">
              <img className="w-auto" src={asset.insta} alt="" />
            </a>
          </div>
        </div>
        <button
          className="w-40 p-2 mt-2 text-[#fffffe] bg-[#6246ea] rounded-sm cursor-pointer  hover:bg-[#8069f1] transition-colors duration-200 active:bg-[#6246ea]"
          onClick={handleDownload}
        >
          Dowload CV
        </button>
      </div>
      <div data-aos="fade-left">
        <img src={asset.profile} alt="" />
      </div>
    </div>
  );
}
