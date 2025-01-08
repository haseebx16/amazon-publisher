'use client';
import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';

export default function HomeAbout() {
  const [activeTab, setActiveTab] = useState('mission');

  const features = [
    "Award-Winning Team.",
    "Extensive Portfolio.",
    "Always deliver quality work.",
    "Most affordable prices.",
    "One-Stop-Solutions."
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-oswald text-orange-500 mb-4">
            ACHIEVE YOUR DREAM OF
          </h2>
          <h2 className="text-4xl md:text-5xl font-oswald text-orange-500 mb-8">
            BECOMING A BEST-SELLING AUTHOR
          </h2>
          <p className="text-2xl font-oswald text-gray-800">
            Step Into the Next Chapter of Your Success Journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            {/* Tabs */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 font-oswald text-lg transition-colors ${
                  activeTab === 'mission'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-100'
                }`}
              >
                Our Mission
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-3 font-oswald text-lg transition-colors ${
                  activeTab === 'vision'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-100'
                }`}
              >
                Our Vision
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-6 py-3 font-oswald text-lg transition-colors ${
                  activeTab === 'history'
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-600 hover:bg-orange-100'
                }`}
              >
                Our History
              </button>
            </div>

            {/* Tab Content */}
            <div className="bg-white p-8 shadow-lg">
              {activeTab === 'mission' && (
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    At Amazon Legacy Press, we are dedicated to bridging the gap between authors 
                    and their readers. Our mission is to empower writers to fully embrace their craft while we 
                    manage the complexities of publishing, promotion, and distribution. Trust us to deliver 
                    excellence at every step!
                  </p>
                </div>
              )}
              {activeTab === 'vision' && (
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Our vision is to become the world's most trusted partner for authors seeking to bring 
                    their stories to life. We strive to create a publishing ecosystem where creativity 
                    flourishes, and every author has the opportunity to reach their full potential.
                  </p>
                </div>
              )}
              {activeTab === 'history' && (
                <div>
                  <p className="text-gray-700 leading-relaxed">
                    Since our inception, we have helped countless authors transform their manuscripts 
                    into bestsellers. Our journey is marked by continuous innovation in publishing 
                    services, always adapting to meet the evolving needs of authors in the digital age.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 bg-white p-4 shadow-lg"
              >
                <FaCheck className="text-orange-500 flex-shrink-0" />
                <span className="text-gray-700 font-oswald">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
