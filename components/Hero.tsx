export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h1 className="text-[74px] leading-[1.1] font-extrabold tracking-tight -mt-30">
              REFLECT <br /> FASHION
            </h1>

            <p className="mt-6 max-w-md text-gray-600">
              Discover fashion that not only meets your unique personality but
              elevates it. Reflect your style with confidence and elegance.
            </p>

            <div className="mt-8 flex gap-4">
              <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
                Buy Product
              </button>

              <button className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
                Explore Product
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-75 md:h-125 lg:h-150 w-full rounded-2xl overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/hero.png')",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
