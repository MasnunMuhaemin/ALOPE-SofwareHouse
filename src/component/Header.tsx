const Header = () => {
  return (
    <header className="container mx-auto relative mt-24 2xl:mt-32 w-full px-0" id="home">
      <div className="w-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-6 lg:px-8 xl:px-12">

        <div className="w-full md:w-1/2 text-center sm:text-left lg:text-left order-2 md:order-1">
          <h2 className="text-3xl lg:text-5xl xl:text-5xl font-bold text-slate-900 mb-2">
            Solusi Pembuatan
          </h2>
          <p className="text-3xl lg:text-5xl xl:text-5xl font-bold text-blue-500 mb-4">
            Software <span className="text-zinc-950">Anda</span>
          </p>
          <p className="text-slate-500 text-xs md:text-sm lg:text-xl xl:text-xl mb-6 leading-relaxed">
            Kami membantu bisnis Anda berkembang melalui <br className="hidden md:block" />
            solusi kreatif kami. Tenang saja, mari bekerja sama.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start mt-8">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 font-semibold text-white px-6 py-2 rounded-full text-base lg:text-lg"
            >
              Contact Us
            </a>
            <a
              href="/explore"
              className="bg-slate-200 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-full text-base lg:text-lg"
            >
              Explore
            </a>
          </div>
        </div>

        {/* Kanan: Gambar */}
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2 mb-10 md:mb-0 px-0">
          <img
            src="/img/logo.png"
            alt="company profile"
            className="mx-auto w-[300px] md:w-[330px] lg:w-[400px] xl:w-[450px] object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
