'use client';
import Link from 'next/link';

export default function QuoteBar() {
  return (
    <div className="relative -mb-32 z-10">
      <div className="bg-orange-500 py-16 rounded-lg mx-auto max-w-[1200px]">
        <div className="max-w-[1000px] mx-auto px-8 md:px-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-oswald text-white mb-6 leading-tight">
                REQUEST YOUR FREE<br />
                QUOTE TODAY!
              </h2>
              <p className="text-white/90 text-lg leading-relaxed">
                Kick off your journey with a complimentary quote from Amazon
                Classic Publishers Experts. Our dedication to transparency makes
                it easy to explore your options and plan confidently. Get a no-obligation,
                cost-free quote and start your publishing journey with
                clarity.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Link 
                href="/contact"
                className="inline-block bg-black text-white px-10 py-4 font-oswald text-lg uppercase tracking-wide hover:bg-gray-900 transition-colors rounded"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
