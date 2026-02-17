export default function CoursesLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
        <div className="container">
          <div className="h-4 w-32 rounded bg-ink/10" />
          <div className="mt-4 h-10 w-full max-w-md rounded bg-ink/10" />
          <div className="mt-4 h-5 w-full max-w-xl rounded bg-ink/5" />
        </div>
      </div>

      {/* Filter pills skeleton */}
      <div className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="mb-8 flex gap-2">
            {Array.from({ length: 5 }, (_, i) => (
              <div
                key={i}
                className="h-9 rounded-full bg-ink/5"
                style={{ width: `${60 + i * 15}px` }}
              />
            ))}
          </div>

          {/* Course cards skeleton */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-ink/10"
              >
                <div className="h-48 w-full bg-ink/5" />
                <div className="p-5">
                  <div className="h-5 w-3/4 rounded bg-ink/10" />
                  <div className="mt-2 h-4 w-full rounded bg-ink/5" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-ink/5" />
                  <div className="mt-4 flex items-center gap-1.5">
                    <div className="h-4 w-4 rounded bg-ink/10" />
                    <div className="h-4 w-8 rounded bg-ink/5" />
                  </div>
                  <div className="mt-5 h-10 w-full rounded-md bg-ink/5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
