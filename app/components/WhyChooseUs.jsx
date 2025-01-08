import { FaBook, FaUserSecret, FaEdit, FaBookOpen, FaBullhorn, FaGlobe, FaPaintBrush, FaDrawPolygon, FaPrint, FaVideo, FaHeadphones } from 'react-icons/fa';

export default function WhyChooseUs() {
  const services = [
    {
      id: "01",
      title: "BOOK WRITING SERVICE",
      icon: FaBook
    },
    {
      id: "02",
      title: "GHOST BOOK WRITING SERVICE",
      icon: FaUserSecret
    },
    {
      id: "03",
      title: "BOOK EDITING & PROOFREADING SERVICE",
      icon: FaEdit
    },
    {
      id: "04",
      title: "BOOK PUBLISHING SERVICE",
      icon: FaBookOpen
    },
    {
      id: "05",
      title: "BOOK MARKETING SERVICE",
      icon: FaBullhorn
    },
    {
      id: "06",
      title: "AUTHOR WEBSITE SERVICE",
      icon: FaGlobe
    },
    {
      id: "07",
      title: "BOOK COVER DESIGN",
      icon: FaPaintBrush
    },
    {
      id: "08",
      title: "BOOK ILLUSTRATION SERVICE",
      icon: FaDrawPolygon
    },
    {
      id: "09",
      title: "BOOK PRINTING SERVICE",
      icon: FaPrint
    },
    {
      id: "10",
      title: "VIDEO PRODUCTION SERVICE",
      icon: FaVideo
    },
    {
      id: "11",
      title: "AUDIO BOOK PUBLISHING",
      icon: FaHeadphones
    }
  ];

  return (
    <section className="damascus-pattern text-white py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
      <div className="max-w-[1400px] mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-oswald mb-4 text-white uppercase">
            FROM DREAMS TO SUCCESS: Amazon Legacy Press EXPERTS ELEVATE AUTHORS
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-oswald font-bold mb-8 text-orange-500">
            THE PREMIER CHOICE FOR UNMATCHED PUBLISHING SERVICES
            <span className="text-white"> – WHY CHOOSE US?</span>
          </h3>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg leading-relaxed">
            FOR MORE THAN EIGHT YEARS, Amazon Legacy Press EXPERTS HAVE BEEN AT THE FOREFRONT OF THE PUBLISHING INDUSTRY,
            CREATING AN EXTENSIVE PORTFOLIO FILLED WITH HUNDREDS OF BESTSELLERS. OUR CONSISTENT DEDICATION TO QUALITY HAS EARNED US AN
            OUTSTANDING REPUTATION IN THE LITERARY WORLD. WHETHER YOU NEED WRITING, PUBLISHING, OR MARKETING SUPPORT, AMAZON CLASSIC
            PUBLISHERS EXPERTS ARE YOUR ALL-IN-ONE PARTNER FOR ACHIEVING LITERARY EXCELLENCE.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-lg text-center group hover:bg-orange-500 transition-all duration-300"
              >
                <div className="text-6xl mb-4 text-orange-500 group-hover:text-white flex justify-center">
                  <IconComponent className="w-16 h-16" />
                </div>
                <div className="text-gray-800 group-hover:text-white">
                  <div className="text-4xl font-oswald font-light mb-2">{service.id}</div>
                  <h3 className="font-oswald font-bold text-xl">
                    {service.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
