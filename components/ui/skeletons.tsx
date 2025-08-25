const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function GuideCardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-4 shadow-sm flex flex-col items-center`}
    >
      {/* Image placeholder */}
      <div className="h-32 w-32  bg-gray-200 mb-4" />
      {/* Name placeholder */}
      <div className="h-5 w-24 rounded bg-gray-200 mb-2" />
      {/* Rating placeholder */}
      <div className="h-4 w-16 rounded bg-gray-200 mb-2" />
      {/* Button placeholder */}
      <div className="h-8 w-24 rounded bg-gray-200 mt-4" />
    </div>
  );
}

export default function CardsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {Array.from({ length: 8 }).map((_, i) => (
        <GuideCardSkeleton key={i} />
      ))}
    </div>
  );
}
