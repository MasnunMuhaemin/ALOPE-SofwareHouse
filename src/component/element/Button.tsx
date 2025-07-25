import { Link } from "react-router-dom";
import ArrowRight from "../icons/ArrowRight";

type ButtonProps = {
  title?: string;
  href?: string;
  className?: string;
};

const Button = ({ title, href = "/", className = "" }: ButtonProps) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Link
        to={href}
        className="group flex items-center gap-10 text-sm sm:text-base  px-8 py-2 border border-blue-600 text-blue-600 rounded-full font-medium bg-white shadow-md ring-1 ring-blue-300/40 hover:bg-blue-600 hover:text-white transition duration-300"
      >
        {title}
        <ArrowRight />
      </Link>
    </div>
  );
};

export default Button;
