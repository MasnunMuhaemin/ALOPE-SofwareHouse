const Header = () => {
  return (
    <header className="relative w-full px-0 " id="home">
      <div className="container mx-auto  w-full min-h-screen flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12">
        <div className="w-full md:w-1/2 text-center sm:text-left lg:text-left order-2 md:order-1">
          <h2 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-slate-900 mb-2">
            Solusi Pembuatan
          </h2>
          <p className="text-3xl lg:text-5xl xl:text-5xl font-bold text-blue-500 mb-4">
            Software <span className="text-zinc-950">Anda</span>
          </p>
          <p className="text-slate-500 text-xs md:text-sm lg:text-xl xl:text-xl mb-6 leading-relaxed">
            Kami membantu bisnis Anda berkembang melalui{" "}
            <br className="hidden md:block" />
            solusi kreatif kami. Tenang saja, mari bekerja sama.
          </p>
          <div className="flex  mb-16">
            <a
              href="#"
              className="flex px-8 border py-2 border-blue-600 text-blue-600 rounded-full font-medium hover:bg-blue-500 hover:text-white transition duration-300"
            >
              Explore
              <img src="/img/arrow-right.svg" className="" alt="" />
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
