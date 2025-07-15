import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
const AllBlog = () => {
  const blogs = [
    {
      image: "/img/alope.jpg",
      tag: "Frontend",
      title: "Mengenal React dari Nol",
    },
    {
      image: "/img/alope.jpg",
      tag: "Backend",
      title: "Belajar Node.js dan Express",
    },
    {
      image: "/img/alope.jpg",
      tag: "Technology",
      title: "Tren Teknologi 2025",
    },
    {
      image: "/img/alope.jpg",
      tag: "Frontend",
      title: "Mengoptimalkan Tailwind CSS",
    },
    {
      image: "/img/alope.jpg",
      tag: "Backend",
      title: "API REST vs GraphQL",
    },
    {
      image: "/img/alope.jpg",
      tag: "Technology",
      title: "Apa itu AI dan Machine Learning?",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f3f8ff] to-[#fff7e0] mt-20 px-6 py-10 md:px-16 lg:px-24">
      {/* Back button */}
      <Navbar />
      <button className="mb-4 px-4 py-2 border border-blue-500 text-blue-500 text-sm rounded-full hover:bg-blue-500 hover:text-gray-100">
        ← Go Back
      </button>
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
        <span className="text-blue-600">INSIDE</span> THE STACK
      </h1>
      <p className="text-gray-600 mb-6 text-center text-sm">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-blue-500 to-blue-300 rounded-xl p-6 text-white flex items-center justify-between mb-8 overflow-visible min-h-[200px]">
        <img
          src="/img/image.png"
          alt="hero"
          className="absolute bottom-0 left-6 w-64 h-64
           -translate-y-0"
        />
        <div className="ml-90 text-5xl font-semibold">ALOPE is Amazing!</div>
      </div>

      {/* Tags and sort */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {["All Topics", "Front End", "Backend", "Technology"].map(
          (tag, idx) => (
            <button
              key={idx}
              className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
            >
              {tag}
            </button>
          )
        )}
        <div className="ml-auto text-sm">
          <label htmlFor="sort" className="mr-1 text-gray-700">
            Short by
          </label>
          <select
            id="sort"
            className=" rounded px-2 py-1 bg-blue-100 shadow-2xl shadow-blue-300 hover:bg-blue-200"
          >
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
      {/* Blog cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mb-2">
                {blog.tag}
              </span>
              <h3 className="text-sm font-semibold leading-snug text-gray-800 mb-1">
                {blog.title}
              </h3>
              <p className="text-xs text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Sit arcu fusce eros ac.
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AllBlog;
