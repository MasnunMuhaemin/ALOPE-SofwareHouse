import Button from "../element/Button";

const AboutUs = () => {
  return (
    <>
      <section
        className="relative w-full flex py-32 justify-center items-center px-3 sm:px-6 lg:px-8 "
        id="aboutUs"
      >
        <img
          src="/img/svg/vector-1.svg"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          loading="lazy"
        />
        <img
          src="/img/svg/vector-2.svg"
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          loading="lazy"
        />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 sm:gap-12 items-center">
          <div className="">
            <h1 className="text-blue-600 text-2xl mb-2 sm:text-3xl font-semibold">
              About Us
            </h1>
            <p className="hidden sm:block text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 sm:mb-8 max-w-xl leading-snug">
              ALOPE is a coding knowledge sharing community for beginners.
            </p>

            {/* <div
              className="rounded-xl mx-auto p-6 sm:p-8 flex items-center justify-center max-w-sm shadow-lg"
              style={{
                backgroundImage: 'url("/img/panda.svg")',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <img
                src="/img/Alope.png"
                alt="ALOPE"
                className="h-35 w-35 object-contain"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 ml-4">
                ALOPE
              </h2>
            </div> */}
          </div>

          <div className="text-gray-700 sm:px-1.5">
            <div className="items-center ">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                Tentang ALOPE
              </h2>
              <p className="mb-6 text-sm sm:text-sm lg:text-base leading-relaxed">
                ALOPE adalah sebuah komunitas programming yang memiliki visi
                untuk berbagi ilmu dan pengalaman seputar coding, dengan tujuan
                menciptakan lingkungan belajar yang inklusif dan mendukung bagi
                siapa saja yang ingin mengembangkan keterampilan di bidang
                pemrograman khususnya bagi pemula.
              </p>
            </div>

            <Button
              title="Learn More"
              className="text-sm"
              href="https://alope.id/"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
