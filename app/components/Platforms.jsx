import Image from 'next/image';

export default function Platforms() {
  const logos = [
    'amazon-kindle.png',
    'logo1.png',
    'logo2.png',
    'logo3.png',
    'logo5.png',
    'logo6.png',
    'logo7.png',
    'logo8.png',
    'logo9.png',
    'logo10.png',
    'logo11.png',
    'logo12.png'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl text-black font-oswald font-bold mb-4">
            Publish Across Multiple Platforms
          </h2>
          <p className="text-gray-600 text-lg">
            Discover the diverse platforms we collaborate with.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div 
              key={index}
              className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300"
            >
              <Image
                src={`/${logo}`}
                alt={`Platform logo ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
