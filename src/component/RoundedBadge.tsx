import BookIcon from "./icons/BookIcon";

type RoundedBadgeProps = {
  title: string;
};

export default function RoundedBadge({ title }: RoundedBadgeProps) {
  return (
    <div className="flex gap-3">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-500 shadow p-3 rounded-full flex items-center justify-center">
        <BookIcon />
      </div>
      <h3 className="text-lg sm:text-2xl font-bold text-gray-700">{title}</h3>
    </div>
  );
}
