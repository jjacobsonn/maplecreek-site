"use client";
import Image from "next/image";

export default function HospicePage() {
  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-[28vh] md:h-[36vh] lg:h-[44vh] xl:h-[52vh]">
          <Image
            src="/images/img-14.jpg"
            alt="Hospice Care Banner"
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
            <div className="inline-block bg-[oklch(0.505_0.213_27.518)] text-white rounded-lg px-4 py-2 mb-4 font-montserrat">
              <Image
                src="/images/icon-19.png"
                alt="Hospice Icon"
                width={24}
                height={24}
                className="inline-block w-6 h-6 mr-2 brightness-0 invert"
              />
              <span className="font-bold">Hospice Care</span>
            </div>
            <h1 className="text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-extrabold drop-shadow-lg mb-4 max-w-4xl">
              Learn About Our Compassionate<br />Hospice Services
            </h1>
            <p className="text-white text-lg sm:text-lg md:text-xl font-medium drop-shadow mb-6 max-w-3xl">
              Custom Care provides high quality Hospice care through individualized, compassionate service. Our Hospice services are available all throughout Utah County.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
