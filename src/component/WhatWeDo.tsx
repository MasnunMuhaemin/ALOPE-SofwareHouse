import RoundedBadge from "./RoundedBadge";
import ServiceCard from "./ServiceCard";

const WhatWeDo = () => {
  return (
    <>
      <section
        className="relative pt-10 px-3 sm:px-4 lg:px-8  text-black"
        id="learning"
        // style={{
        //   backgroundImage:
        //     'url("/img/vector-ungu.svg"), url("/img/vector-biru.svg")',
        //   backgroundRepeat: "no-repeat, no-repeat",
        //   backgroundSize: "cover, cover",
        //   backgroundPosition: "center, center",
        // }}
      >
        <div className="container mx-auto">
          <div className="mx-auto rounded-xl overflow-hidden flex flex-col lg:flex-row items-center bg-white">
            <div className="w-full h-full lg:w-1/2 flex items-center justify-start">
              <img
                src="/img/image.png"
                alt="Service Illustration"
                className="w-full h-full md:h-[300px] md:mt-5 lg:h-full xl:h-full object-contain max-h-[500px]"
              />
            </div>

            <div className="w-full lg:w-2/3  m-auto text-justify my-5 sm:my-5 px-4 lg:px-6">
              <div className="mb-10">
                <h2 className="text-blue-600 font-bold text-2xl sm:text-3xl">
                  Our Services
                </h2>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-900">
                  Our Top Services to Help You Grow.
                </h1>
              </div>
              <div className="mb-4">
                <div className="py-1">
                  <RoundedBadge title="Academy" />
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    Akademi kami menawarkan pembelajaran terstruktur dan
                    interaktif untuk membantu Anda mengembangkan keterampilan
                    secara fleksibel dan sesuai kebutuhan dunia nyata.
                  </p>
                </div>
              </div>

              <ServiceCard title="Hello" description="iewufgweuigf" />
              <ServiceCard title="Hello" description="iewufgweuigf" />
              <ServiceCard
                title="Mobile App"
                description="Kami menciptakan aplikasi seluler yang cepat, intuitif, dan
                  disesuaikan dengan kebutuhan Anda, memungkinkan pengguna
                  terlibat kapan saja dan di mana saja dengan pengalaman yang
                  lancar."
              />

              {/* <div className="mb-4">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-700 mb-2">
                  Web App
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Kami membangun aplikasi web responsif dan mudah digunakan,
                  dari solusi sederhana hingga platform kompleks.
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-lg sm:text-2xl font-bold text-gray-700 mb-2">
                  Mobile App
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Kami menciptakan aplikasi seluler yang cepat, intuitif, dan
                  disesuaikan dengan kebutuhan Anda, memungkinkan pengguna
                  terlibat kapan saja dan di mana saja dengan pengalaman yang
                  lancar.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
