"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import TourCard from "@/components/tours/TourCard";
export default function ToursPage() {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    api
      .get("/tours", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => setTours(res.data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Tours</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {tours.map((tour: any) => (
            <TourCard
              image="/guide/toures.png"
              guideName="Walter T."
              rating={5}
              reviews={19}
              title={tour.title}
              description={tour.description}
              price={tour.price}
              key={tour.id}
              duration="3 hours"
              capacity="Up to 6 people"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
