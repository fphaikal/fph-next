import Image from "next/image"
import { ElectionIcon, EmailIcon, InstagramIcon, JapanIcon, LinkedinIcon, LocationIcon, OrganizationIcon, PhoneIcon } from "@/components/ui/icons"
import RetroGrid from "@/components/magicui/retro-grid";


export default function AboutMe() {
  return (
    <div id="about" className="relative flex w-full min-h-screen items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
      <div className="flex flex-col 2xl:flex-row h-full w-full gap-5 2xl:gap-10 px-5 py-3 2xl:px-80 2xl:py-32">
        <div className="flex flex-col w-full 2xl:w-1/2 gap-5 2xl:gap-10 rounded-xl">
          <div className="h-fit 2xl:h-2/3 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 2xl:p-20 hover:-translate-y-4 hover:scale-105 duration-700">
            <div className="flex flex-col gap-10">
              <div className="flex gap-10 items-center">
                <div className="flex h-40 w-40 items-center">
                  <Image className="h-fit w-fit rounded-3xl object-cover object-center " src={"/profile.png"} alt="Profile" width={500} height={500} loading="lazy" />
                </div>
                <div className="flex flex-col justify-center">
                  <h1 className="text-md 2xl:text-xl text-primary-50">Let Me Introduce Myself</h1>
                  <h1 className="text-primary-50 font-bold text-4xl 2xl:text-5xl">About <span className="text-primary-500">Me</span></h1>
                </div>
              </div>
              <div className="bg-dark p-6 rounded-xl">
                <h1 className="text-primary-50 text-md 2xl:text-lg">Hello. My name is Fahreza Pasha Haikal and please call me Haikal. I come from Gresik and I&apos;m currently in my second year studying Mechatronic Engineering at SMK-SMTI Yogyakarta (Yogyakarta Vocational High School of Industrial Technology). I was born in Gresik on the 16th December 2006</h1>
              </div>
            </div>
          </div>
          <div className="h-fit 2xl:h-1/3 grid grid-cols-2 gap-5 2xl:gap-10">
            <div className="flex flex-col gap-1 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-5 2xl:p-10 justify-end hover:-translate-y-4 hover:scale-105 duration-700">
              <PhoneIcon color="primary-500" width="50" />
              <h1 className="text-primary-50 text-lg 2xl:text-2xl font-bold">+62 857-6590-9380</h1>
              <h1 className="text-primary-50 text-md 2xl:text-xl">Phone</h1>
            </div>
            <div className="flex flex-col gap-1 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-5 2xl:p-10 justify-end hover:-translate-y-4 hover:scale-105 duration-700">
              <LocationIcon color="primary-500" width="50" />
              <h1 className="text-primary-50 text-lg 2xl:text-2xl font-bold">Yogyakarta, Indonesia</h1>
              <h1 className="text-primary-50 text-md 2xl:text-xl">Location</h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full 2xl:w-1/3 gap-5 2xl:gap-10">
          <div className="flex flex-col gap-2 h-1/3 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:-translate-y-4 hover:scale-105 duration-700">
            <OrganizationIcon color="primary-500" width="50" />
            <h1 className="text-primary-50 text-lg 2xl:text-2xl font-bold">Committee for Introduction to the School Environment</h1>
            <h1 className="text-primary-50 text-md 2xl:text-xl">Documentation</h1>
            <h1 className="text-primary-50 text-sm 2xl:text-lg">July 2024 </h1>
          </div>
          <div className="flex flex-col gap-1 h-1/3 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:-translate-y-4 hover:scale-105 duration-700">
            <JapanIcon color="primary-500" width="50" />
            <h1 className="text-primary-50 text-lg 2xl:text-2xl font-bold">GASKAN (Gerbang Akses Pintar dan Kehadiran)</h1>
            <h1 className="text-primary-50 text-md 2xl:text-xl">Web Developer</h1>
            <h1 className="text-primary-50 text-sm 2xl:text-lg">Oktober 2023 - Present</h1>
          </div>
          <div className="flex flex-col gap-1 h-1/3 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:-translate-y-4 hover:scale-105 duration-700">
            <ElectionIcon color="primary-500" width="50" />
            <h1 className="text-primary-50 text-lg 2xl:text-2xl font-bold">Volunteer Chemicfest #8</h1>
            <h1 className="text-primary-50 text-md 2xl:text-xl">Decoration & Documentation, Web Developer</h1>
            <h1 className="text-primary-50 text-sm 2xl:text-lg">Jan 2024 - Mei 2024</h1>
          </div>
        </div>
      </div>
      <RetroGrid />
    </div>
  )
}