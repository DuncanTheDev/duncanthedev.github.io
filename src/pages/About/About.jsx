import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./About.css";

export default function About() {
  // Education data array
  const educationData = [
    {
      degree: "Diploma in Information Technology (Advanced Programming)",
      school: "TAFE South Australia",
      years: "2024–2025",
    },
    {
      degree: "Certificate IV in Information Technology (Programming)",
      school: "TAFE South Australia",
      years: "2023–2024",
    },
    {
      degree: "Bachelor of Industrial Technology – Instrumentation & Control Tech",
      school: "Batangas State University",
      years: "2015–2019",
    },
  ];

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
      id="about"
      className="min-h-screen w-[90%] md:w-[80%] mx-auto px-4 md:px-8 py-12 flex flex-col justify-center bg-white"
    >
      {/* Section Title */}
      <div className="title text-center mb-12">
        <h1
          className="text-4xl md:text-5xl font-bold text-[#2b2c34]"
          data-aos="fade-down"
        >
          About Me
        </h1>
      </div>

      {/* Content Section */}
      <div className="content-section flex flex-col md:flex-row gap-12 p-5">
        {/* Education Section */}
        <div data-aos="fade-right" className="education">
          <h2 className="text-2xl font-semibold text-[#2b2c34] mb-6">
            Education
          </h2>
          <ul className="space-y-6">
            {educationData.map((item, index) => (
              <li key={index}>
                <p className="font-semibold">{item.degree}</p>
                <p className="text-sm text-[#5f6c7b]">
                  {item.school}, {item.years}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Divider */}
        <div className="hidden md:block w-px bg-gray-300" />

        {/* About Description */}
        <div
          data-aos="fade-left"
          className="description md:w-1/2 space-y-5 text-black text-lg leading-relaxed"
        >
          <p>
            A passionate and dedicated full-stack developer who loves turning
            ideas into functional and user-friendly applications. I enjoy
            exploring both frontend and backend technologies and constantly seek
            ways to improve my skills.
          </p>
          <p>
            I’m a fast learner, adaptable, and always eager to take on new
            challenges. I value clean code, teamwork, and continuous growth.
            Even without a strong foundation yet, I’m committed to learning and
            developing my abilities to become a well-rounded full-stack
            developer who contributes to meaningful projects.
          </p>
        </div>
      </div>
    </div>
  );
}
