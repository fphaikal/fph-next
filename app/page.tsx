import Image from "next/image";
import BlurIn from "@/components/magicui/blur-in";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <>
      <div id="home" className="relative flex flex-col h-screen">
        {/* VelocityScroll berada di layer paling bawah */}
        <div className="absolute inset-0 flex justify-center items-center">
          <VelocityScroll
            text="FPHaikal "
            default_velocity={1}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-primary-500 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          />
        </div>
        {/* BlurIn berada di atas VelocityScroll */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <Image
            alt="Mountains"
            src={`/te.png`}
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>
      </div>
      <div id="services" className="relative flex flex-col h-screen">
        {/* VelocityScroll berada di layer paling bawah */}
        <div className="absolute inset-0 flex justify-center items-center">
          <VelocityScroll
            text="Hello World👋"
            default_velocity={1}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-primary- drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
        </div>
        {/* BlurIn berada di atas VelocityScroll */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <BlurIn word="Hello World" className="text-4xl font-bold text-white md:text-7xl md:leading-[5rem]" />
          <BlurIn word="Hello World" className="text-4xl font-bold text-white md:text-7xl md:leading-[5rem]" />
          <BlurIn word="Hello World" className="text-4xl font-bold text-white md:text-7xl md:leading-[5rem]" />
        </div>
      </div>

    </>
  );
}
