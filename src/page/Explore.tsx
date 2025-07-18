import Navbar from "../component/layout/Navbar";
import Footer from "../component/layout/Footer";
import Card from "../component/element/Card";

const projects = [
  {
    heading: "Website",
    title: "CSS Layouting",
    desc: "Penyusunan tampilan web yang rapi dan responsif menggunakan teknik CSS modern.",
    image: "/img/nuteam.png",
  },
  {
    heading: "Mobile",
    title: "React Native Project",
    desc: "Pengembangan aplikasi mobile lintas platform dengan performa tinggi menggunakan React Native.",
    image: "/img/wedding.png",
  },
  {
    heading: "Website",
    title: "Landing Page",
    desc: "Halaman promosi yang dirancang untuk menarik perhatian dan meningkatkan konversi.",
    image: "/img/safrenz.png",
  },
  {
    heading: "Mobile",
    title: "UI Design Mobile",
    desc: "Desain antarmuka aplikasi mobile yang estetis, intuitif, dan fokus pada pengalaman pengguna.",
    image: "/img/course.jpg",
  },
];

const Explore = () => {
  return (
    <>
      <Navbar />
      <section className="container mt-17 mx-auto py-10 px-4 sm:px-6 md:px-10 lg:px-8 xl:px-8 text-black">
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center lg:mb-10 mb-4">
          Website
        </h2>

        {/* DESKTOP */}
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              heading={project.heading}
              title={project.title}
              desc={project.desc}
              image={project.image}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Explore;
