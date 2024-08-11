import Image from "next/image";
export default function Sidebar() {
  return (
    <>
      <div>
        <div className="relative z-20 h-[112px] sm:h-[150px] md:h-[150px] mx-auto">
          <Image className="h-full w-full rounded-full object-cover object-center" src="/profile.webp" alt="Profile" width={1500} height={1500} />
        </div>
        <h1 className="text-primary-500 font-bold">Hallo Nettt JS</h1>
      </div>
    </>
  );
}