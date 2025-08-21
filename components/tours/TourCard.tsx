// components/TourCard.tsx
import Image from "next/image";
import { Star, Users, Clock, Car } from "lucide-react";

interface TourCardProps {
  image: string;
  guideName: string;
  rating: number;
  reviews: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  capacity: string;
}

export default function TourCard({
  image,
  guideName,
  rating,
  reviews,
  title,
  description,
  price,
  duration,
  capacity,
}: TourCardProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white">
      {/* Tour Image */}
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4">
        {/* Info Row */}
        <div className="flex items-center text-gray-600 text-sm gap-4">
          <Car size={16} />
          <Clock size={16} /> <span>{duration}</span>
          <Users size={16} /> <span>{capacity}</span>
        </div>

        {/* Guide Info */}
        <div className="flex items-center gap-3 mt-3">
          <Image
            src="/guide/1000011225-removebg-preview.jpg" // replace with guide photo
            alt={guideName}
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <p className="font-semibold">{guideName}</p>
            <div className="flex items-center text-yellow-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill={i < rating ? "currentColor" : "none"}
                  stroke="currentColor"
                />
              ))}
              <span className="ml-1 text-sm text-gray-600">({reviews})</span>
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="mt-3 text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>

        {/* Price */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-lg font-bold">{price}</p>
        </div>
      </div>
    </div>
  );
}
