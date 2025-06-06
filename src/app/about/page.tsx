import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      <section className="w-full">
        <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] xl:h-[92vh]">
          <Image
            src="/images/img-7.jpg"
            alt="About Us Banner"
            fill
            priority
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4 max-w-4xl">
              About Us
            </h1>
          </div>
        </div>
      </section>
    </>
  );
} 