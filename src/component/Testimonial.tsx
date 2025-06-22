const testimonials = [
  {
    name: "Client Name",
    message:
      "Lorem ipsum dolor sit amet consectetur, ipsum et laoreet convallis justo fermentum purus ac. Vulputate ullamcorper malesuada enim. Tincidunt arcu orci integer vulputate eleifend.",
  },
  {
    name: "Client Name",
    message:
      "Lorem ipsum dolor sit amet consectetur, ipsum et laoreet convallis justo fermentum purus ac. Vulputate ullamcorper malesuada enim. Tincidunt arcu orci integer vulputate eleifend.",
  },
  {
    name: "Client Name",
    message:
      "Lorem ipsum dolor sit amet consectetur, ipsum et laoreet convallis justo fermentum purus ac. Vulputate ullamcorper malesuada enim. Tincidunt arcu orci integer vulputate eleifend.",
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
        <h2 className="text-center text-2xl md:text-3xl font-semibold mb-12 text-gray-800">
          What’s <span className="text-blue-600">Our Client’s</span> Say
        </h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-blue-100 px-6 py-8 shadow-md"
            >
         
              <div className="absolute -top-4 right-4 bg-blue-600 rounded-br-xl rounded-tl-xl p-3">
                <QuoteIcon className="text-white w-5 h-5" />
              </div>

              <h3 className="text-gray-900 font-semibold text-lg mb-2">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {testimonial.message}
              </p>

              <div className="absolute -bottom-4 left-4 bg-blue-600 rounded-tl-xl rounded-br-xl p-2">
                <QuoteIcon className="text-white w-4 h-4 rotate-180" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
