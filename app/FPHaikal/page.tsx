"use client"

import { useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import { ElectionIcon, EmailIcon, InstagramIcon, JapanIcon, LinkedinIcon, LocationIcon, OrganizationIcon, PhoneIcon } from "@/components/ui/icons"

// magic ui
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import ShimmerButton from "@/components/magicui/shimmer-button"
import CopyButton from "@/components/copy-button"
import {
  BarChartIcon,
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";


import { PracticumExperience } from "@/components/fph-section/certificate";
import AboutMe from "@/components/fph-section/about-me";
import { Container, DoorOpen, Ticket } from "lucide-react";

const features = [
  {
    Icon: BarChartIcon,
    name: "Smart Quality",
    description: "Create a website for quality control reports.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: Container,
    name: "NATSLOCK: Next-generation And Smart Lifestyle Locker",
    description: "This project was created for the needs of the P5 grade (Pancasila Student Profile Strengthening Project)",
    href: "https://github.com/fphaikal/natslock",
    cta: "See Repository",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-4",
  },
  {
    Icon: DoorOpen,
    name: "GASKAN (Gerbang Akses Pintar dan Kehadiran)",
    description: "Use the calendar to filter your files by date.",
    href: "https://gaskan.smtijogja.sch.id",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: Ticket,
    name: "Chemicfest #8",
    description: "In 2024 Chemicfest #8 used a website for ticket purchases and was used for live streaming.",
    href: "/",
    cta: "Learn more",
    background: <img className="absolute -right-20 -top-20 opacity-60" />,
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

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
      <div className="flex flex-col items-center  px-5 py-20 2xl:px-80 2xl:py-32 gap-20 h-screen w-full">
        <h1 className="text-8xl text-primary-50 font-bold">My Projects</h1>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          <div className="w-full h-[300px] bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:scale-105 duration-500">
            <h1 className="text-primary-50 text-xl font-bold">Project 1</h1>
          </div>
          <div className="w-full h-[300px] bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:scale-105 duration-500">
            <h1 className="text-primary-50 text-xl font-bold">Project 2</h1>
          </div>
          <div className="w-full h-[300px] bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:scale-105 duration-500">
            <h1 className="text-primary-50 text-xl font-bold">Project 3</h1>
          </div>
        </div> */}
        <BentoGrid className="lg:grid-rows-3">
          {features.map((feature) => (
            <BentoCard key={feature.name} {...feature} />
          ))}
        </BentoGrid>
      </div>
    </>
  )
}