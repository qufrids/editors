import { Star, StarHalf } from "lucide-react";

import { cn } from "@/lib/utils";

type StarSize = "sm" | "md" | "lg";

type StarRatingProps = {
  rating: number;
  maxStars?: number;
  size?: StarSize;
  className?: string;
  showValue?: boolean;
};

const sizeClasses: Record<StarSize, string> = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

const valueSizeClasses: Record<StarSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export function StarRating({
  rating,
  maxStars = 5,
  size = "md",
  className,
  showValue = false,
}: StarRatingProps) {
  const clamped = Math.max(0, Math.min(rating, maxStars));
  const fullStars = Math.floor(clamped);
  const hasHalf = clamped - fullStars >= 0.25 && clamped - fullStars < 0.75;
  const emptyStars = maxStars - fullStars - (hasHalf ? 1 : 0);

  const iconClass = sizeClasses[size];

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex gap-0.5">
        {/* Full stars */}
        {Array.from({ length: fullStars }, (_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(iconClass, "fill-amber-400 text-amber-400")}
          />
        ))}

        {/* Half star */}
        {hasHalf && (
          <div className="relative">
            <Star className={cn(iconClass, "fill-gray-200 text-gray-200")} />
            <div className="absolute inset-0 overflow-hidden" style={{ width: "50%" }}>
              <Star className={cn(iconClass, "fill-amber-400 text-amber-400")} />
            </div>
          </div>
        )}

        {/* Empty stars */}
        {Array.from({ length: emptyStars }, (_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(iconClass, "fill-gray-200 text-gray-200")}
          />
        ))}
      </div>

      {showValue && (
        <span className={cn("font-bold text-navy-900", valueSizeClasses[size])}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
