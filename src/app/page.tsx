import Image from "next/image";

export default function Home() {
  return (
    <section className="w-full">
      <div className="relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] xl:h-[92vh]">
        <Image
          src="/images/img-3.jpg"
          alt="Hero image"
          fill
          priority
          className="object-cover object-center w-full h-full"
          sizes="100vw"
        />
      </div>
    </section>
  );
}
