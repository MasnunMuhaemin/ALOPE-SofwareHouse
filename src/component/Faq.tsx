import React, { useState } from "react";

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen,
  onClick,
}) => {
  return (
    <div className="w-full border-b border-gray-300">
      <button
        className="flex w-full items-center justify-between px-4 py-4 text-left text-sm sm:text-base font-semibold hover:bg-gray-100 transition"
        onClick={onClick}
      >
        <span>{title}</span>
        <span
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-sm sm:text-base text-gray-700 animate-fade-in">
          {content}
        </div>
      )}
    </div>
  );
};

const Faq: React.FC = () => {
  const data = [
    {
      title: "Apa itu ALOPE?",
      content:
        "ALOPE adalah sebuah komunitas programming yang memiliki visi untuk berbagi ilmu dan pengalaman seputar coding, dengan tujuan menciptakan lingkungan belajar yang inklusif dan mendukung bagi siapa saja yang ingin mengembangkan keterampilan di bidang pemrograman khususnya bagi pemula.",
    },
    {
      title: "Apa keunggulan belajar di ALOPE?",
      content:
        "Keunggulan belajar di ALOPE adalah tersedianya berbagai artikel tutorial yang dilengkapi dengan video pembelajaran interaktif serta soal berbasis studi kasus untuk mengasah pemahaman secara langsung. Selain itu, ALOPE juga memiliki komunitas aktif di Discord.",
    },
    {
      title: "Apa saja bahasa pemrograman yang diajarkan?",
      content:
        "Saat ini, ALOPE fokus mengajarkan web programming, termasuk HTML, CSS, JavaScript, serta framework seperti React dan Laravel. Kami juga terbuka untuk berkembang ke IoT atau mobile development.",
    },
    {
      title: "Apakah saya perlu pengalaman sebelumnya?",
      content:
        "Tidak perlu! Kami menyediakan materi dari nol untuk pemula, dan juga materi lanjutan bagi yang sudah berpengalaman.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section
      className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-8 py-10 sm:py-14 lg:py-20 "
      id="faq"
    >
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/img/faq.png"
            alt="FAQ Illustration"
            className="w-[400px] xl:w-[450px] object-cover object-center hidden lg:block"
          />
        </div>

        <div className="w-full lg:w-1/2 lg:mt-16">
          <h2 className="text-4xl mb-2 sm:text-2xl md:text-3xl xl:text-4xl font-bold ">
            FAQ
          </h2>
          <div className="rounded-xl  bg-white shadow-md divide-y divide-gray-300 ">
            {data.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
