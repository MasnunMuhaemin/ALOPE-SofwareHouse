const WhatWeDo = () => {
  return (
    <>
      <section
        className="container mx-auto py-10 px-3 sm:px-6 lg:px-8 bg-white text-black"
        id="learning"
      >
        <div className="mb-10 ">
          <h2 className="text-blue-600 font-semibold text-xl sm:text-2xl mb-2">
            Our Services
          </h2>
          <h1 className="text-xl sm:text-3xl lg:text-3xl font-bold text-gray-900">
            Our Top Services to Help You Grow.
          </h1>
        </div>

        <div className="max-w-5xl mx-auto min-h-[400px] lg:h-[400px] rounded-xl overflow-hidden border border-blue-400 shadow-md flex flex-col lg:flex-row bg-white">
          <div className="w-full h-full lg:w-1/2 bg-gradient-to-r from-blue-100 to-white flex items-center justify-start">
            <img
              src="/img/image.png"
              alt="Service Illustration"
              className="w-full h-full md:h-[300px] md:mt-5 lg:h-full xl:h-full object-contain"
            />
          </div>

          <div className="w-full lg:w-2/3 m-auto py-5 text-justify px-6">
            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Academy
              </h3>
              <p className="text-sm text-gray-600">
                Akademi kami menyediakan pengalaman belajar terstruktur dan
                langsung untuk membantu Anda mengembangkan keterampilan yang
                dibutuhkan. Belajarlah dengan kecepatan Anda sendiri dengan
                konten yang dirancang untuk aplikasi di dunia nyata.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Web App
              </h3>
              <p className="text-sm text-gray-600">
                Aplikasi web kami dibuat agar responsif, dapat diskalakan, dan
                mudah digunakan. Dari alat sederhana hingga platform yang
                kompleks, kami memberikan solusi yang menghasilkan hasil.
              </p>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                Mobile App
              </h3>
              <p className="text-sm text-gray-600">
                Kami menciptakan aplikasi seluler yang cepat, mudah digunakan,
                dan disesuaikan dengan kebutuhan Anda. Libatkan pengguna Anda
                kapan saja, di mana saja dengan solusi seluler yang lancar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;
