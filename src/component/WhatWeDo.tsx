const Course = () => {
  return (
    <>
      <section
        className="container mx-auto mt-16 py-10 px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 bg-white text-black"
        id="learning"
      >
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-8 sm:mb-10">
          What We Do
        </h2>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="relative lg:w-1/2 rounded-xl overflow-hidden border border-blue-300 shadow-md  ">
            <div
              className="absolute inset-0   lg:w-1/2  bg-blue-200  z-0 hidden lg:block"
              style={{
                backgroundImage: `url('/img/image.png')`,
                backgroundSize: "cover",
                backgroundPosition: "top",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="relative z-10 p-4 sm:p-6 gap-6 flex flex-col lg:flex-row items-center">
              <div className="flex-1"></div>
              <div className="flex-1  lg:mt-10 lg:ml-6 justify-center items-center">
                <h3 className="text-xl sm:text-3xl font-bold mb-2">Academy</h3>
                <p className="text-xs md:text-base text-gray-700 mb-4 text-justify">
                  Program pelatihan coding dan teknologi untuk mempersiapkan
                  talenta digital siap kerja.
                </p>
                <a
                  className="flex items-center w-fit gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm"
                  href="https://alope.id/"
                >
                  View Detail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 flex-1">
            <div className="flex items-start bg-white shadow-md border border-gray-200 rounded-xl p-4">
              <div className="text-blue-500 text-xl md:text-2xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C5.895 2 5 2.895 5 4v16c0 1.105.895 2 2 2h10c1.105 0 2-.895 2-2V4c0-1.105-.895-2-2-2H7zm0 2h10v16H7V4zm5 14a1 1 0 110 2 1 1 0 010-2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md sm:text-lg font-bold mb-1">
                  Mobile App
                </h3>
                <p className="text-xs md:text-base text-gray-600 mb-2">
                  Pembuatan aplikasi Android dengan desain modern dan peforma
                  dan optimal.
                </p>
                <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm">
                  View Detail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-start bg-white shadow-md border border-gray-200 rounded-xl p-4">
              <div className="text-blue-500 text-xl md:text-2xl mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-10 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.486 2 2 6.486 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-5.514-4.486-10-10-10zm7.938 8h-2.042c-.145-1.576-.555-3.026-1.182-4.263A8.035 8.035 0 0119.938 10zM12 4c.838 0 2.383 1.872 2.805 6h-5.61C9.617 5.872 11.162 4 12 4zM6.286 5.737A13.025 13.025 0 005.104 10H3.062a8.03 8.03 0 013.224-4.263zM4.062 12h2.042c.145 1.576.555 3.026 1.182 4.263A8.035 8.035 0 014.062 12zM12 20c-.838 0-2.383-1.872-2.805-6h5.61C14.383 18.128 12.838 20 12 20zm5.714-1.737c.515-.874.927-1.854 1.182-2.263h2.042a8.03 8.03 0 01-3.224 4.263zM18.896 14c-.287 1.108-.723 2.183-1.286 3.263A13.025 13.025 0 0018.896 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-md sm:text-lg font-bold mb-1">Web App</h3>
                <p className="text-xs md:text-base text-gray-600 mb-2">
                  Aplikasi web responsif yang disesuaikan untuk mendukung
                  kebutuhan bisnis Anda.
                </p>
                <button className="flex items-center gap-1 bg-blue-500 hover:bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm">
                  View Detail
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Course;
