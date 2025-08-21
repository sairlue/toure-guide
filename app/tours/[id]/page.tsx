"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import api from "@/lib/api";

export default function TourDetail() {
  const params = useParams();
  const [tour, setTour] = useState<any>(null);

  useEffect(() => {
    if (params?.id) {
      api.get(`/tours/${params.id}`).then((res) => setTour(res.data));
    }
  }, [params]);

  if (!tour) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{tour.title}</h1>
      <p>{tour.description}</p>
      <p className="text-lg font-semibold">${tour.price}</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Book Now
      </button>
    </div>
  );
}
