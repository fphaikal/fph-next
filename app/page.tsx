import Image from "next/image";
import BlurIn from "@/components/magicui/blur-in";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export default function Home() {
  return (
    <>
      <div className="relative flex flex-col h-screen">
        {/* VelocityScroll berada di layer paling bawah */}
        <div className="absolute inset-0 flex justify-center items-center">
          <VelocityScroll
            text="Hello World👋"
            default_velocity={5}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-primary- drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
        </div>
        {/* BlurIn berada di atas VelocityScroll */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <BlurIn word="Hello World" className="text-4xl font-bold text-white md:text-7xl md:leading-[5rem]" />
        </div>
      </div>
      <div className="relative flex flex-col mt-28 h-screen">
        {/* VelocityScroll berada di layer paling bawah */}
        <div className="absolute inset-0 flex justify-center items-center">
          <VelocityScroll
            text="Hello World👋"
            default_velocity={5}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-primary- drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
          />
        </div>
        {/* BlurIn berada di atas VelocityScroll */}
        <div className="absolute inset-0 flex justify-center items-center z-10">
          <BlurIn word="Hello World" className="text-4xl font-bold text-white md:text-7xl md:leading-[5rem]" />
        </div>
      </div>
    </>
  );
}
