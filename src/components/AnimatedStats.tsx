import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const AnimatedStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5, // Trigger when 50% of the element is in view
  });

  return (
    <section ref={ref} className="w-full py-16 bg-[#f4f4f4]">
      <div className="w-full px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto bg-white rounded-3xl p-4 sm:p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {/* 4.8 Stars */}
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/icon-11.png" alt="Google Rating Icon" width={60} height={60} className="mb-4" />
              <div className="stat-number-row flex items-center justify-center min-h-[3.25rem] mb-2">
                <span className="stat-number" style={{ position: 'relative', top: '-1px' }}>
                  {inView ? <CountUp start={1} end={4.8} decimals={1} duration={2.5} /> : '4.8'}
                </span>
              </div>
              <p className="text-[#737373] text-base mt-1">Google Rating</p>
            </div>

            {/* 28 Years of Service */}
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/icon-9.png" alt="Heart Icon" width={64} height={64} className="mb-4" />
              <div className="stat-number-row flex items-center justify-center min-h-[3.25rem] mb-2">
                <span className="stat-number">
                  {inView ? <CountUp start={1} end={28} duration={2.5} /> : '28'}
                </span>
              </div>
              <p className="text-[#737373] text-base mt-1">Years of Service</p>
            </div>

            {/* 65 Caring Staff */}
            <div className="flex flex-col items-center justify-center">
              <Image src="/images/icon-10.png" alt="Team Icon" width={80} height={80} className="mb-4" />
              <div className="stat-number-row flex items-center justify-center min-h-[3.25rem] mb-2">
                <span className="stat-number">
                  {inView ? <CountUp start={1} end={65} duration={2.5} /> : '65'}
                </span>
              </div>
              <p className="text-[#737373] text-base mt-1">Caring Staff</p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .stat-number-row {
          min-height: 3.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 0.75rem;
        }
        .stat-number {
          font-size: 2.25rem;
          font-weight: 800;
          line-height: 1;
          color: #0c142c;
          font-family: var(--font-montserrat), sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </section>
  );
};

export default AnimatedStats; 