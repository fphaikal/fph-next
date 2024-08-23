import Image from "next/image"
import { ElectionIcon, EmailIcon, InstagramIcon, JapanIcon, LinkedinIcon, LocationIcon, OrganizationIcon, PhoneIcon } from "@/components/ui/icons"
import RetroGrid from "@/components/magicui/retro-grid";


export default function AboutMe() {
    return(
        <div id="services" className="relative flex w-full items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
        <div className="flex min-h-screen w-full gap-10 px-80 py-32">
          <div className="flex flex-col w-1/2 max-h-screen gap-10 rounded-xl">
            <div className="h-2/3 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-20 hover:-translate-y-4 hover:scale-105 duration-700">
              <div className="flex flex-col gap-10">
                <div className="flex gap-10">
                  <div className="h-40 w-40">
                    <Image className="h-full w-full rounded-3xl object-cover object-center" src={"/naira-2.png"} alt="Profile" width={500} height={500} loading="lazy" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h1 className="text-xl text-primary-50">Let Me Introduce Myself</h1>
                    <h1 className="text-primary-50 font-bold text-5xl">About <span className="text-primary-500">Me</span></h1>
                  </div>
                </div>
                <div className="bg-dark p-6 rounded-xl">
                  <h1 className="text-primary-50 text-lg">Naira Salima is a grade 12 student at SMK SMTI Yogyakarta majoring in Analytical Chemistry. Naira is very interested in art and experiments. Naira has good communication skills, accuracy and adaptation. Her interests are as a quality analyst (QC), quality control analyst (QA) and or RnD. Naira has a principle in her life, namely &quot;losing is okay, but don&apos;t give up&quot;</h1>
                </div>
              </div>
            </div>
            <div className="h-1/3 grid grid-cols-2 gap-10 ">
              <div className="flex flex-col gap-1 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 justify-end hover:-translate-y-4 hover:scale-105 duration-700">
                <PhoneIcon color="primary-500" width="50" />
                <h1 className="text-primary-50 text-2xl font-bold">+62 853-3018-5121</h1>
                <h1 className="text-primary-50 text-xl">Phone</h1>
              </div>
              <div className="flex flex-col gap-1 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 justify-end hover:-translate-y-4 hover:scale-105 duration-700">
                <LocationIcon color="primary-500" width="50" />
                <h1 className="text-primary-50 text-2xl font-bold">Yogyakarta, Indonesia</h1>
                <h1 className="text-primary-50 text-xl">Location</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3 gap-10">
            <div className="flex flex-col gap-2 h-1/3 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:-translate-y-4 hover:scale-105 duration-700">
              <OrganizationIcon color="primary-500" width="50" />
              <h1 className="text-primary-50 text-2xl font-bold">Student Council of SMTI Yogyakarta Vocational High School</h1>
              <h1 className="text-primary-50 text-xl">Skills and Entrepreneurship (Danus)</h1>
              <h1 className="text-primary-50 text-lg">Sep 2023 - Present </h1>
            </div>
            <div className="flex flex-col gap-1 h-1/3 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:-translate-y-4 hover:scale-105 duration-700">
              <JapanIcon color="primary-500" width="50" />
              <h1 className="text-primary-50 text-2xl font-bold">Language Japanese Club (AOTAKA CLUB)</h1>
              <h1 className="text-primary-50 text-xl">General Treasurer</h1>
              <h1 className="text-primary-50 text-lg">2022 - June 2024</h1>
            </div>
            <div className="flex flex-col gap-1 h-1/3 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:-translate-y-4 hover:scale-105 duration-700">
              <ElectionIcon color="primary-500" width="50" />
              <h1 className="text-primary-50 text-2xl font-bold">Student Council Election Commission (KPO)</h1>
              <h1 className="text-primary-50 text-xl">Field Executive (Sie Pelaksana)</h1>
              <h1 className="text-primary-50 text-lg">Aug 2023 - Sep 2023</h1>
            </div>
          </div>
        </div>
        <RetroGrid />
      </div>
    )
}