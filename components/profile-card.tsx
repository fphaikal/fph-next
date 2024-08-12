import Image from "next/image";
import { HomeIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/icons";

export default function ProfileCard() {
  return (
    <>
      <aside className="sticky shrink-0 top-0 flex justify-center items-center w-[500px] h-screen">
        {/* <Sidebar /> */}
        <div className="">
          <div className="relative z-30 mx-auto h-30 w-full max-w-30 rounded-full bg-white/20 p-1 backdrop-blur sm:h-44 sm:max-w-44 sm:p-3">
            <div className="h-[112px] sm:h-[150px] md:h-[150px] mx-auto">
              <Image className="h-full w-full rounded-full object-cover object-center" src="/profile.png" alt="Profile" width={500} height={500} />
            </div>
          </div>
          <div className="z-20 -mt-20 rounded-2xl px-14 pt-24 pb-8 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg">
            <div className="flex flex-col">
              <h1 className="text-primary-500 font-bold text-center text-2xl">Fahreza Pasha Haikal</h1>
              <h1 className="text-white font-bold text-center text-md font-secondary">Fullstack Developer</h1>
              <div className="flex gap-3 justify-center mt-2">
                <a href="https://instagram.com/fphaikal" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon color="white" width="30" />
                </a>
                <a href="https://linkedin.com/in/fphaikal" target="_blank" rel="noopener noreferrer">
                  <LinkedinIcon color="white" width="30" />
                </a>
              </div>
              <nav className="flex flex-col gap-1 border-t mt-5">
                <div className="flex gap-2 py-2 px-3 items-center bg-dark-2 mt-2 rounded-lg">
                  <HomeIcon color="white" width="25" />
                  <h1 className="font-xl text-white font-semibold ">Home</h1>
                </div>
                <div className="flex gap-2 py-2 px-3 items-center bg-dark-2 rounded-lg">
                  <HomeIcon color="white" width="25" />
                  <h1 className="font-xl text-white">Home</h1>
                </div>
              </nav>
            </div>
          </div>

        </div>
      </aside>
    </>
  )
}