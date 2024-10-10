"use client"

import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { ElectionIcon, EmailIcon, InstagramIcon, JapanIcon, LinkedinIcon, LocationIcon, OrganizationIcon, PhoneIcon } from "@/components/ui/icons"

// magic ui
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import ShimmerButton from "@/components/magicui/shimmer-button"
import CopyButton from "@/components/copy-button"
import { PracticumExperience } from "@/components/fph-section/practicum-experience";
import AboutMe from "@/components/fph-section/about-me";

export default function FPHaikal() {
  const [iconSize, setIconSize] = useState("30");

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth < 768) {
        setIconSize("20");
      } else {
        setIconSize("30");
      }
    };

    updateIconSize(); // Set initial size based on current window size
    window.addEventListener("resize", updateIconSize);

    return () => window.removeEventListener("resize", updateIconSize);
  }, []);
  return (
    <>
      {/* <div className="fixed top-0 z-[999] flex w-full justify-center mt-10">
        <div className="flex p-3 gap-1 bg-gradient-to-br from-dark-2 to-dark border-dark border shadow-lg justify-center items-center rounded-full">
          <Link href="#home" className="flex px-5 py-3 bg-dark/50 hover:bg-primary-500 transition-all duration-500 rounded-full items-center gap-1">
            <h1 className="text-primary-50">Home</h1>
          </Link>
          <a href="#services" className="flex px-5 py-3 bg-dark/50 hover:bg-primary-500 transition-all duration-500 rounded-full items-center gap-1" >
            <h1 className="text-primary-50">Services</h1>
          </a>
        </div>
      </div> */}
      <div id="home" className="relative flex flex-col h-screen">
        {/* VelocityScroll berada di layer paling bawah */}
        <div className="absolute inset-0 flex justify-center items-center">
          <VelocityScroll
            text="Fahreza Haikal "
            default_velocity={1}
            className="font-display text-center text-4xl font-bold tracking-[-0.02em] bg-gradient-to-br from-primary-500 to-dark-2 text-transparent bg-clip-text md:text-7xl md:leading-[5rem]"
          />
        </div>
        {/* BlurIn berada di atas VelocityScroll */}
        <div className="absolute inset-0 flex items-center z-10">
          <Image alt="Me" src={`/fph.png`} quality={100} fill loading="lazy" className=""
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="w-1/2 flex justify-center ms-0 xl:ms-52 mt-56 md:mt-0 lg:mt-72 xl:mt-32">
            <div className="w-fit">
              <div className="relative z-30 rounded-2xl m-4 p-8 md:p-14 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg">
              <div className="flex flex-col gap-1">
                  <h1 className="text-primary-50 font-normal md:text-4xl">Hi,👋</h1>
                  <h1 className="text-primary-500 font-bold md:text-4xl"><span className="text-primary-50">I&apos;m</span> Fahreza Haikal</h1>
                  <div className="flex items-center justify-between">
                    <div className="hidden xl:flex w-32 outline outline-1 outline-white" />
                    <h1 className="text-white font-bold text-xs md:text-lg text-start md:text-end font-secondary w-fit">Fullstack Developer</h1>
                  </div>
                  <div className="z-10 flex flex-col xl:flex-row items-start xl:items-center mt-4 gap-2">
                    <ShimmerButton shimmerColor="#f0fdf1" background="linear-gradient(90deg, rgba(22,81,30,1) 0%, rgba(39,192,56,1) 100%)" className="shadow-2xl">
                      <span className="whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Hire Me!
                      </span>
                    </ShimmerButton>
                    <Link href={'FPHaikal'} className="px-4 py-2.5 bg-primary-50/10 text-primary-50 rounded-full hover:bg-primary-50 hover:text-primary-500 transition-all duration-200 whitespace-pre-wrap text-center text-xs font-medium leading-none tracking-tight lg:text-lg">
                      Learn More
                    </Link>
                  </div> 
                  <h1 className="text-primary-50 font-normal text-xs md:text-lg mt-3 md:mt-6">Follow Me</h1>
                  <div className="flex gap-1 md:gap-3 mt-1 md:mt-2">
                    <Link href="https://instagram.com/fp_haikal" target="_blank" rel="noopener noreferrer">
                      <InstagramIcon color="white" width={iconSize} />
                    </Link>
                    <Link href="https://linkedin.com/in/fphaikal" target="_blank" rel="noopener noreferrer">
                      <LinkedinIcon color="white" width={iconSize} />
                    </Link>
                    <CopyButton text="abufahreza@gmail.com" color="white" width={iconSize} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutMe />
      <PracticumExperience />

      <div className="flex flex-col gap-10">

      </div>
    </>
  )
}