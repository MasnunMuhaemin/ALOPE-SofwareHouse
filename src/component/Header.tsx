const Header = () => {
  return (
    <header className="relative w-full px-0 " id="home">
      <img
        src="/img/ungu.svg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <img
        src="/img/biru.svg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <img
        src="/img/kuning.svg"
        alt=""
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      />
      <div className="container mx-auto  w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12">
        <div className="w-full md:w-1/2 text-center sm:text-left  sm:mt-24 lg:mt-28 lg:text-left order-2 md:order-1">
          <h2 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-slate-900 mb-2">
            Solusi Pembuatan
          </h2>
          <p className="text-3xl lg:text-5xl xl:text-5xl font-bold text-blue-500 mb-4">
            Software <span className="text-zinc-950">Anda</span>
          </p>
          <p className="text-slate-500 text-sm md:text-sm lg:text-xl xl:text-xl mb-6 leading-relaxed">
            Kami membantu bisnis Anda berkembang melalui{" "}
            <br className="hidden md:block" />
            solusi kreatif kami. Tenang saja, mari bekerja sama.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start mb-16">
            <a
              href="#"
              className="group flex items-center gap-10 text-base  px-8 py-2 border border-blue-600 text-blue-600 rounded-full font-medium bg-white shadow-md ring-1 ring-blue-300/40 hover:bg-blue-600 hover:text-white transition duration-300"
            >
              Explore
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-4 h-4 transition duration-300 group-hover:fill-white"
              >
                <path d="M11.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mt-20 lg:mt-0 md:mb-0 px-0">
          <img
            src="/img/logo.png"
            alt="company profile"
            className="mx-auto w-[300px]  md:mb-24 lg:mb-0 md:w-[330px] lg:w-[400px] xl:w-[450px] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
