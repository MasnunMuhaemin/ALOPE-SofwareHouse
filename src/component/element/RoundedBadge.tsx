type RoundedBadgeProps = {
  title?: string;
  icon? : React.ReactNode;
};

export default function RoundedBadge({ title, icon }: RoundedBadgeProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-gradient-to-br from-blue-700 to-blue-300 shadow p-3 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <h3 className=" text-lg sm:text-2xl font-bold text-gray-700">{title}</h3>
    </div>
  );
}
