import React from "react";
import RoundedBadge from "./RoundedBadge";

interface ServiceCardProps {
  title: string;
  description: string;
}

export default function ServiceCard({ title, description }: ServiceCardProps) {
  return (
    <div className="mb-4">
      <div className="py-1">
        <RoundedBadge title={title} />
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
