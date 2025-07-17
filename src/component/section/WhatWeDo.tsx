import BookIcon from "../icons/BookIcon";
import MobileIcon from "../icons/MobileIcon";
import WebIcon from "../icons/WebIcon";
// import RoundedBadge from "./RoundedBadge";
import ServiceCard from "../element/ServiceCard";

const WhatWeDo = () => {
  return (
    <>
      <section
        className="relative pt-10 px-4 lg:px-8  text-black"
        id="learning"
      >
        <img
          src="/img/svg/vector-ungu.svg"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          loading="lazy"
        />
        <img
          src="/img/svg/vector-biru.svg"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          loading="lazy"
        />
        <div className="container mx-auto">
          <div className="mx-auto rounded-xl overflow-hidden flex flex-col lg:flex-row items-center">
            <div className="w-full h-full lg:w-1/2 flex items-center justify-start">
              <img
                src="/img/image.png"
                alt="Service Illustration"
                className="w-full h-full md:h-[300px] md:mt-5 lg:h-full xl:h-full object-contain max-h-[500px]"
              />
            </div>

            <div className="w-full lg:w-2/3  m-auto text-justify my-5 sm:my-5 sm:px-4 lg:px-6">
              <div className="mb-10">
                <h2 className="text-blue-600 font-bold text-2xl sm:text-3xl">
                  Our Services
                </h2>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                  Our Top Services to Help You Grow.
                </h1>
              </div>

              <ServiceCard
                title="Academy"
                description=" Akademi kami menawarkan pembelajaran terstruktur dan
                    interaktif untuk membantu Anda mengembangkan keterampilan
                    secara fleksibel dan sesuai kebutuhan dunia nyata."
                icon={<BookIcon />}
              />
              <ServiceCard
                title="Web App"
                description=" Kami membangun aplikasi web responsif dan mudah digunakan,
                  dari solusi sederhana hingga platform kompleks."
                icon={<WebIcon />}
              />
              <ServiceCard
                title="Mobile App"
                description="Kami menciptakan aplikasi seluler yang cepat, intuitif, dan
                  disesuaikan dengan kebutuhan Anda, memungkinkan pengguna
                  terlibat kapan saja dan di mana saja dengan pengalaman yang
                  lancar."
                icon={<MobileIcon />}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
