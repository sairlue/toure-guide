// components/TourCard.tsx
import Image from "next/image";
import { Star, Heart, Globe, MapPin, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
interface GuideCardProps {
  image: string;
  guideName: string;
  rating: number;
  reviews: number;
}

export default function GuideCard({
  image,
  guideName,
  rating,
  reviews,
}: GuideCardProps) {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border bg-white">
      {/* Tour Image */}
      <Link href={`/tour-guides/${guideName}`} className="block">
        <div className="relative w-full h-48">
          <Image src={image} alt={guideName} fill className="object-cover" />
        </div>

        <div className="p-4">
          {/* Guide Info */}
          <div className="flex flex-col gap-1 w-full">
            <div className="flex items-center justify-between w-full">
              <p className=" text-sm">{guideName}</p>
              <Link href="#" className="text-lg font-semibold hover:underline">
                <Heart size={16}></Heart>{" "}
              </Link>
            </div>

            <div className="flex items-center gap-1 text-yellow-500">
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
            <div className="flex items-center gap-2 whitespace-nowrap">
              <MapPin size={14} className="text-gray-600" />
              <span>Singapore , Singapore Island</span>
            </div>
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Globe size={14} className="text-gray-600" />
              <span>Madarin , English</span>
            </div>
            <Button className="mt-4 rounded-3xl w-full bg-white border text-black hover:bg-gray-100">
              <MessageCircleMore size={14} />
              Message{" "}
            </Button>
          </div>
        </div>
      </Link>
    </div>
  );
}
