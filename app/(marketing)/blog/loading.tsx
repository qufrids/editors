export default function BlogLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-b from-primary-50 via-white to-white py-14 md:py-20">
        <div className="container">
          <div className="h-4 w-20 rounded bg-navy-200" />
          <div className="mt-4 h-10 w-full max-w-lg rounded bg-navy-200" />
          <div className="mt-4 h-5 w-full max-w-xl rounded bg-navy-100" />
        </div>
      </div>

      {/* Filter pills skeleton */}
      <div className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="mb-8 flex gap-2">
            {Array.from({ length: 4 }, (_, i) => (
              <div
                key={i}
                className="h-9 rounded-full bg-navy-100"
                style={{ width: `${50 + i * 20}px` }}
              />
            ))}
          </div>

          {/* Blog card skeletons */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-navy-100"
              >
                <div className="h-52 w-full bg-navy-100" />
                <div className="p-5">
                  <div className="flex items-center gap-3">
                    <div className="h-3.5 w-24 rounded bg-navy-100" />
                    <div className="h-3 w-px bg-navy-200" />
                    <div className="h-3.5 w-20 rounded bg-navy-100" />
                  </div>
                  <div className="mt-3 h-5 w-full rounded bg-navy-200" />
                  <div className="mt-1 h-5 w-2/3 rounded bg-navy-200" />
                  <div className="mt-3 h-4 w-full rounded bg-navy-100" />
                  <div className="mt-1.5 h-4 w-full rounded bg-navy-100" />
                  <div className="mt-1.5 h-4 w-3/4 rounded bg-navy-100" />
                  <div className="mt-4 h-4 w-24 rounded bg-navy-200" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
