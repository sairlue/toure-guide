"use client";
import { useEffect, useState, Suspense } from "react";
import api from "@/lib/api";
import GuideCard from "@/components/tours/GuideCard";
import CardsSkeleton from "@/components/ui/skeletons";
export default function GuidePage() {
  const [guides, setGuides] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    api
      .get("/guides", {
        params: { page: page, limit: 12 },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setGuides(res.data.data);
        setTotalPages(res.data.last_page);
        setLoading(false);
      });
  }, [page]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Available Guides</h1>
        {loading ? (
          <CardsSkeleton />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {guides.map((tour: any) => (
                <GuideCard
                  image="/guide/1000011225-removebg-preview.jpg"
                  guideName={tour.name}
                  rating={5}
                  reviews={19}
                  key={tour.id}
                />
              ))}
            </div>
          </>
        )}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => {
              setLoading(true);
              setPage((p) => Math.max(1, p - 1));
            }}
            disabled={page === 1}
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => {
              setLoading(true);
              setPage((p) => Math.min(totalPages, p + 1));
            }}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
