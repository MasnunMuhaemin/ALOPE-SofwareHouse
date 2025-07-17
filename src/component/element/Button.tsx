type ButtonProps = {
    title?: string;
    href?: string;
    className?: string;
}
const Button = ({ title, href, className = "" } : ButtonProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <a
        href={href}
        className="group flex items-center gap-10 text-sm sm:text-base  px-8 py-2 border border-blue-600 text-blue-600 rounded-full font-medium bg-white shadow-md ring-1 ring-blue-300/40 hover:bg-blue-600 hover:text-white transition duration-300"
      >
        {title}
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
  );
};

export default Button;
