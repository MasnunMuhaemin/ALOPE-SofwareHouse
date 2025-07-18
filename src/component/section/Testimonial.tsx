const testimonials = [
  {
    name: "Client Name",
    message:
      "ALOPE benar-benar memahami kebutuhan kami. Mereka tidak hanya membuat aplikasi yang fungsional, tapi juga memberikan insight strategis selama proses pengembangan. Hasil akhirnya responsif, user-friendly, dan sesuai ekspektasi.",
  },
  {
    name: "Client Name",
    message:
      "Bekerja sama dengan ALOPE adalah pengalaman yang menyenangkan. Tim mereka komunikatif, cepat tanggap, dan sangat kompeten. Proyek selesai tepat waktu dengan kualitas yang luar biasa. Sangat direkomendasikan!",
  },
  {
    name: "Client Name",
    message:
      "Kami mencari partner teknologi yang bisa diandalkan, dan ALOPE menjawab semua kebutuhan kami. Mulai dari desain hingga deployment, semuanya ditangani dengan profesional. Mereka bukan hanya vendor, tapi mitra sejati.",
  },
];

const QuoteIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M7.17 6A5.985 5.985 0 0 0 2 12v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4.08A4.002 4.002 0 0 1 8 7.17V6a1 1 0 0 0-1-1H7.17zM17.17 6A5.985 5.985 0 0 0 12 12v6a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-3.08A4.002 4.002 0 0 1 18 7.17V6a1 1 0 0 0-1-1h-.83z" />
  </svg>
);

const Testimonial = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold mb-12 text-gray-800">
          What’s <span className="text-blue-600">Our Client’s</span> Say
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-10 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-tr from-blue-300 to-blue-100 relative rounded-2xl px-6 py-8 "
            >
              <div className="hidden sm:block lg:block">
                <div className=" absolute -top-4 -right-4 rounded-tr-3xl bg-blue-600 w-12 h-12 flex items-center justify-center shadow-lg">
                  <QuoteIcon className="text-white w-5 h-5" />
                </div>
              </div>
              <h3 className="text-xl lg:px-4 text-gray-900 font-semibold lg:text-xl mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm lg:text-base lg:px-4 text-gray-600 line-clamp-4  lg:line-clamp-5">
                {testimonial.message}
              </p>

              <div className="hidden sm:block lg:block">
                <div className="absolute -bottom-5 -left-4 bg-blue-600 rounded-bl-3xl w-10 h-10 flex items-center justify-center shadow-lg">
                  <QuoteIcon className="text-white w-4 h-4 rotate-180" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
