import RoundedBadge from "./RoundedBadge";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="mb-4 ">
      <div className="py-1">
        <RoundedBadge title={title} icon={icon} />
        <p className="text-sm mt-1.5 sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
