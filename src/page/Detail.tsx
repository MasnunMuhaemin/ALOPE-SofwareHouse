import Navbar from "../component/Navbar";

const Detail = () => {
  return (
    <>
      <Navbar />
      <div className="relative container mx-auto max-w-screen-2xl mt-17 px-4  md:px-8 lg:px- xl:px-30 py-10 space-y-10">
        <div className="absolute w-full h-full top-0 left-0 -z-10">
          <div className="absolute top-1/3 left-2/3 w-[500px] h-[500px] bg-[#F0C322] opacity-30 rounded-full blur-3xl"></div>
          <div className="absolute top-10 left-56 w-[450px] h-[350px] bg-[#2276F0] opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-11 w-[500px] h-[400px] bg-[#673EF0] opacity-20 rounded-full blur-2xl"></div>
        </div>

        <div className="z-10">
          <div
            onClick={() => window.history.back()}
            className="inline-flex items-center space-x-2 border border-[#5998F4] text-[#5998F4] hover:text-blue-800 px-3 py-1 rounded-full cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span>Kembali</span>
          </div>

          <div className="text-center">
            <h1 className="inline-block text-2xl sm:text-3xl lg:text-4xl font-bold border-b-3 border-[#5998F4] pb-2">
              Nuteam
            </h1>
          </div>
          <div className="space-y-4 text-sm sm:text-base text-center sm:text-left mt-20">
            <div className="flex flex-wrap justify-center items-start gap-28 text-sm sm:text-base text-left">
              <div className="flex flex-col items-start border-b-2 border-[#5998F4] px-4 w-fit pb-2">
                <div>Client</div>
                <div className="font-semibold mt-2">Johan</div>
              </div>
              <div className="flex flex-col items-start border-b-2 border-[#5998F4] px-4 w-fit pb-2">
                <div>Platform</div>
                <div className="font-semibold mt-2">Website</div>
              </div>
              <div className="flex flex-col items-start border-b-2 border-[#5998F4] px-4 w-fit pb-2">
                <div>Timeline</div>
                <div className="font-semibold mt-2">2025</div>
              </div>
              <div className="flex flex-col items-start border-b-2 border-[#5998F4] px-4 w-fit pb-2">
                <div>Website</div>
                <a
                  href="https://alope.id/"
                  target="_blank"
                  className="no-underline font-semibold mt-2"
                >
                  nuteam.id
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 pb-0 rounded-xl mt-10">
            <img
              src="/img/project/project_nuteam.png"
              alt="Main Project"
              className="mx-auto w-full max-w-6xl object-cover mb-0"
            />
          </div>
          <p className="border-b-3 border-[#5998F4] w-60 mx-auto mt-4 mb-6"></p>
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-10 mt-20">
            <div className="w-full lg:w-1/2 lg:order-2">
              <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 rounded-xl pb-0">
                <img
                  src="/img/project/card_nuteam1.png"
                  alt="Project Detail"
                  className="rounded-t-md w-[500px] h-[280px] mt-8 mb-0 object-cover mx-auto"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1 space-y-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                About The Project
              </h2>
              <p className="text-gray-600 text-justify text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-10">
            <div className="w-full lg:w-1/2">
              <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 rounded-xl pb-0">
                <img
                  src="/img/project/card_nuteam2.png"
                  alt="Project Detail"
                  className="rounded-t-md w-[500px] h-[280px] mt-8 mb-0 object-cover mx-auto"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 space-y-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                Feature
              </h2>
              <p className="text-gray-600 text-justify text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-16 items-center mb-10">
            <div className="w-full lg:w-1/2 lg:order-2">
              <div className="bg-gradient-to-b from-[#5998F4] to-[#C8DDFB] p-4 rounded-xl pb-0">
                <img
                  src="/img/project/card_nuteam3.png"
                  alt="Project Detail"
                  className="rounded-t-md w-[500px] h-[280px] mt-8 mb-0 object-cover mx-auto"
                />
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:order-1 space-y-4">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold">
                Stack
              </h2>
              <p className="text-gray-600 text-justify text-sm sm:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
