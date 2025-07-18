import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import BlogCard from "../component/element/BlogCard";
const AllBlog = () => {
  const blogs = [
    {
      id: 1,
      image: "/img/nuteam.png",
      heading: "Website",
      title: "Nuteam",
      desc: "Penyusunan tampilan web yang rapi dan responsif menggunakan teknik CSS modern.",
    },
    {
      id: 2,
      image: "/img/safrenz.png",
      heading: "Website",
      title: "Safrenz",
      desc: " Halaman promosi yang dirancang untuk menarik perhatian dan meningkatkan konversi.",
    },
    {
      id: 3,
      image: "/img/invitations.png",
      heading: "mobile",
      title: "Wedding",
      desc: "Pengembangan aplikasi mobile lintas platform dengan performa tinggi menggunakan React Native.",
    },
    {
      id: 4,
      image: "/img/travelop.png",
      heading: "Website",
      title: "Traveloop",
      desc: "Desain antarmuka aplikasi mobile yang estetis, intuitif, dan fokus pada pengalaman pengguna.",
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
        {blogs.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            image={blog.image}
            heading={blog.heading}
            title={blog.title}
            desc={blog.desc}
            // link={`/detail/${id}`}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default AllBlog;
