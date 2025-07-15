

const BlogCard = ({ image, tag, title }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <span className="inline-block text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full mb-2">
          {tag}
        </span>
        <h3 className="text-sm font-semibold leading-snug text-gray-800 mb-1">
          {title}
        </h3>
        <p className="text-xs text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Sit arcu fusce eros ac.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
