// pages/index.js
"use client";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Share2 } from "lucide-react";
import TourCard from "@/components/tours/TourCard";
import Calendar02 from "@/components/tours/Calendar";
export default function GuideProfile() {
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
    <>
      <div className="min-h-screen bg-gray-50 flex justify-center p-6">
        <div className="max-w-6xl w-full flex gap-6 p-4">
          {/* Left Section */}
          <Card className="w-64 md:w-72 flex flex-col items-center text-center space-y-4 sticky top-4 self-start">
            <Image
              src="/guide/1000011225-removebg-preview.jpg"
              alt="Jon"
              width={200}
              height={200}
              className="rounded-2xl object-cover"
            />
            <CardContent className="space-y-2">
              <p className="font-medium">Singapore, Singapore</p>
              <p className="text-sm text-gray-600">
                English, Cantonese, Mandarin, Taiwanese
              </p>
              <div className="w-full flex flex-col justify-around text-center mt-4">
                <div className="mb-4 flex justify-around border-1 rounded-full p-4 bg-white border-green-400 shadow-sm">
                  <p className="font-bold text-xl">260</p>
                  <p className="text-xs text-gray-500">
                    Tours Delivered
                    <br />
                    Since Jul 20, 2017
                  </p>
                </div>
                <div className="flex justify-around border-1 rounded-full p-4 border-green-400 bg-white shadow-sm">
                  <p className="font-bold text-xl">2.0</p>
                  <p className="text-xs text-gray-500">
                    Hours Avg.
                    <br />
                    Response Time
                  </p>
                </div>
              </div>
              <Button className="w-full">Message Jon</Button>
            </CardContent>
          </Card>

          {/* Right Section */}
          <div className="flex-1 flex flex-col space-y-4">
            <div className="flex flex-row">
              <div>
                <h1 className="text-2xl font-bold">
                  I'm Jon, your private tour guide in Singapore
                </h1>
                <p className="text-sm text-gray-600">Guide #21663</p>
                <p className="leading-relaxed text-gray-700">
                  Having been born, educated and lived in Singapore all my life,
                  I am passionate about Singapore and would like to share with
                  you our local highlights. Singapore is a hot, sunny island
                  with summer all year round, touring around in aircon private
                  vehicle is the best way to travel. Despite being a small
                  country, we have a diverse and exotic culture naming Chinese,
                  Malay, Indian, Eurasian and Peranakan culture...
                </p>
              </div>
              <div className="flex flex-col items-end flex-shrink-0 ml-4">
                <p className="flex gap-4 text-gray-600 mb-4">
                  <Heart size={16}></Heart> <Share2 size={16}></Share2>
                </p>
                <div className="flex items-center space-x-2 h-16 border-1 rounded-2xl p-2 ml-auto bg-white shadow-sm">
                  <p className="text-3xl font-bold">5</p>
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="gold" stroke="none" />
                    ))}
                  </div>
                  <p className="text-gray-500">(120)</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-sm">
              <p>Singapore Tourism Board - Guiding in ENGLISH Licence</p>
              <p>Singapore Tourism Board - Guiding in MANDARIN Licence</p>
            </div>
            <div className="border-t pt-6">
              <Calendar02 />
            </div>
            <h3>Toure by Rlue</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
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
      </div>
      <div className="h-24">
        <Image
          src="/guide/toures.png"
          alt="Jon"
          width={800}
          height={400}
          className="rounded-2xl object-cover"
        />
      </div>
    </>
  );
}
