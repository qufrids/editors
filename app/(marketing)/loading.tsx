export default function MarketingLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-b from-primary-50 via-white to-white py-14 md:py-20">
        <div className="container">
          <div className="h-4 w-28 rounded bg-navy-200" />
          <div className="mt-4 h-10 w-full max-w-lg rounded bg-navy-200" />
          <div className="mt-3 h-10 w-full max-w-md rounded bg-navy-100" />
          <div className="mt-5 h-5 w-full max-w-xl rounded bg-navy-100" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="rounded-xl border border-navy-100 p-6"
              >
                <div className="h-5 w-3/4 rounded bg-navy-200" />
                <div className="mt-3 h-4 w-full rounded bg-navy-100" />
                <div className="mt-2 h-4 w-5/6 rounded bg-navy-100" />
                <div className="mt-5 h-4 w-24 rounded bg-navy-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
