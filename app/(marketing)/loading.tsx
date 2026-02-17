export default function MarketingLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
        <div className="container">
          <div className="h-4 w-28 rounded bg-ink/10" />
          <div className="mt-4 h-10 w-full max-w-lg rounded bg-ink/10" />
          <div className="mt-3 h-10 w-full max-w-md rounded bg-ink/5" />
          <div className="mt-5 h-5 w-full max-w-xl rounded bg-ink/5" />
        </div>
      </div>

      {/* Content skeleton */}
      <div className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className="rounded-xl border border-ink/10 p-6"
              >
                <div className="h-5 w-3/4 rounded bg-ink/10" />
                <div className="mt-3 h-4 w-full rounded bg-ink/5" />
                <div className="mt-2 h-4 w-5/6 rounded bg-ink/5" />
                <div className="mt-5 h-4 w-24 rounded bg-ink/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
