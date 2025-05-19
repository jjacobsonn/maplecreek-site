import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] xl:h-[92vh]">
        <Image
          src="/images/img-4.jpg"
          alt="Hero image"
          fill
          priority
          className="object-cover object-center w-full h-full"
          sizes="100vw"
        />
        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 bg-black/30 font-montserrat">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg mb-4 max-w-4xl">
            Exceptional Home Health and Hospice Services in Utah County
          </h1>
          <p className="text-white text-lg sm:text-xl md:text-2xl font-medium drop-shadow mb-8 max-w-2xl">
            Empowering Families Through Every Chapter of Care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="/about" className="bg-red-700 hover:bg-red-800 text-white font-bold py-3 px-8 rounded shadow-lg text-lg transition-all duration-150">
              Learn More
            </Link>
            <Link href="/contact" className="bg-white hover:bg-gray-100 text-red-700 font-bold py-3 px-8 rounded shadow-lg text-lg transition-all duration-150 border-2 border-red-700">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
