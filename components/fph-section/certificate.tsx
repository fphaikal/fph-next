import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import Image from "next/image";


const certificate = [
  {
    name: 'Committee for Introduction to the School Environment',
    urlImg: '/fph/panitia-mpls.png'
  },
  {
    name: 'SMTI Vocational High School Career Workshop',
    urlImg: '/fph/career-workshop.png'
  },
  {
    name: 'SmallTalk English Speaking Level Test',
    urlImg: '/fph/small-talk.png'
  },
  {
    name: 'EF SET English Certificate 39/100 (A2 Elementary)',
    urlImg: '/fph/ef-set.png'
  },
]

export function PracticumExperience() {
  return (
    <>
      <div id="practice" className="relative flex flex-col 2xl:flex-row w-full min-h-screen items-center 2xl:justify-between rounded-lg 2xl:shadow-xl px-5 py-20 2xl:px-80 2xl:py-32">
        <h1 className="text-5xl text-primary-50 font-bold">Certifications</h1>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
          {certificate.map((data) => (
            <div key={data.name} className="w-full 2xl:w-[350px] h-[250px] flex flex-col justify-end gap-5 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:scale-105 duration-500">
              <div className="flex flex-col gap-5 h-full justify-end  ">
                <h1 className="text-primary-50 text-xl font-bold">{data.name}</h1>
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <button className="flex gap-4 items-center underline underline-offset-4 hover:no-underline duration-300 w-fit text-primary-50">View Certificate <ArrowRight /></button>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-gradient-to-br from-dark-2 to-dark border-dark border-2 text-primary-50">
                    <AlertDialogHeader>
                      <AlertDialogTitle>{data.name}</AlertDialogTitle>
                      <AlertDialogDescription>
                        <Image src={data.urlImg} alt={data.name} width={1920} height={1920}/>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="bg-primary-500 border-none">Close</AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
