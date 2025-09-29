"use client";

import Image from "next/image";

interface BannerSectionProps {
  imageSrc: string;
  imageAlt: string;
  iconSrc?: string;
  iconAlt?: string;
  buttonText?: string;
  title: string;
  description: string;
}

export default function BannerSection({
  imageSrc,
  imageAlt,
  iconSrc,
  iconAlt,
  buttonText,
  title,
  description,
}: BannerSectionProps) {
  return (
    <section className="w-full">
      <div className="relative w-full h-[28vh] min-h-[200px] md:h-[36vh] lg:h-[44vh] xl:h-[52vh]">
        {/* Banner Image */}
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          className="object-cover object-center w-full h-full"
          sizes="100vw"
        />
        
        {/* Overlay content - Exact match to services page */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
          {/* Only show button if iconSrc is provided */}
          {iconSrc && buttonText && (
            <div className="mb-3">
              <div className="inline-flex items-center bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-md">
                <Image
                  src={iconSrc}
                  alt={iconAlt || ""}
                  width={20}
                  height={20}
                  className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 brightness-0 invert"
                />
                <span className="font-bold text-sm sm:text-base">{buttonText}</span>
              </div>
            </div>
          )}
          
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg mb-2 sm:mb-3 max-w-4xl">
            {title}
          </h1>
          
          <p className="text-white text-base sm:text-lg md:text-xl font-medium drop-shadow mb-4 sm:mb-6 max-w-2xl">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
