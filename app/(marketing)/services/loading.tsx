export default function ServicesLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero skeleton */}
      <div className="bg-gradient-to-b from-primary-50 via-white to-white py-14 md:py-20">
        <div className="container">
          {/* Breadcrumb */}
          <div className="mb-6 flex gap-2">
            <div className="h-4 w-12 rounded bg-navy-200" />
            <div className="h-4 w-4 rounded bg-navy-100" />
            <div className="h-4 w-16 rounded bg-navy-200" />
            <div className="h-4 w-4 rounded bg-navy-100" />
            <div className="h-4 w-32 rounded bg-navy-200" />
          </div>

          <div className="h-4 w-28 rounded bg-navy-200" />
          <div className="mt-4 h-12 w-full max-w-2xl rounded bg-navy-200" />
          <div className="mt-4 h-5 w-full max-w-xl rounded bg-navy-100" />
          <div className="mt-5 h-4 w-full max-w-3xl rounded bg-navy-100" />
          <div className="mt-2 h-4 w-full max-w-2xl rounded bg-navy-100" />
          <div className="mt-2 h-4 w-full max-w-xl rounded bg-navy-100" />
        </div>
      </div>

      {/* Features skeleton */}
      <div className="bg-white py-14 md:py-20">
        <div className="container">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:gap-14">
            <div>
              <div className="h-4 w-24 rounded bg-navy-200" />
              <div className="mt-3 h-8 w-48 rounded bg-navy-200" />
              <div className="mt-7 grid gap-4 md:grid-cols-2">
                {Array.from({ length: 4 }, (_, i) => (
                  <div key={i} className="rounded-xl border border-navy-100 p-5">
                    <div className="h-5 w-3/4 rounded bg-navy-200" />
                    <div className="mt-3 h-4 w-full rounded bg-navy-100" />
                    <div className="mt-2 h-4 w-5/6 rounded bg-navy-100" />
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-primary-100 bg-primary-50/30 p-6">
              <div className="h-7 w-32 rounded bg-navy-200" />
              <div className="mt-4 space-y-3">
                {Array.from({ length: 5 }, (_, i) => (
                  <div key={i} className="h-4 w-full rounded bg-navy-100" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA skeleton */}
      <div className="bg-navy-900 py-14 md:py-20">
        <div className="container">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="h-4 w-36 rounded bg-white/10" />
            <div className="mt-3 h-9 w-full max-w-md rounded bg-white/10" />
            <div className="mt-4 h-4 w-full max-w-sm rounded bg-white/5" />
          </div>
        </div>
      </div>
    </div>
  );
}
