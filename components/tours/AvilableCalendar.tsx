"use client";

import * as React from "react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export default function AvailabilityCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  // Example: available dates
  const availableDates = [
    new Date(2025, 7, 28), // Aug 28, 2025
    new Date(2025, 7, 29),
    new Date(2025, 7, 30),
    new Date(2025, 7, 31),
  ];

  const isAvailable = (day: Date) =>
    availableDates.some(
      (d) =>
        d.getFullYear() === day.getFullYear() &&
        d.getMonth() === day.getMonth() &&
        d.getDate() === day.getDate()
    );

  return (
    <div className="flex flex-col items-center gap-4">
      <Calendar
        mode="single"
        numberOfMonths={2}
        selected={date}
        onSelect={setDate}
        className="rounded-md border shadow"
        modifiers={{
          available: (day) => isAvailable(day),
        }}
        modifiersStyles={{
          available: {
            backgroundColor: "#16a34a", // green
            color: "white",
            borderRadius: "9999px",
          },
        }}
      />

      <div className="flex gap-4 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-600"></span>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-gray-300"></span>
          <span>Not Available</span>
        </div>
      </div>
    </div>
  );
}
