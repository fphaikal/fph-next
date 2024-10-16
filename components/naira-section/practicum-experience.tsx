export function PracticumExperience() {
  return (
    <>
      <div id="practice" className="relative flex w-full min-h-screen items-center justify-center rounded-lg 2xl:shadow-xl">
        <div className="flex flex-col w-full gap-3 2xl:gap-10 px-5 py-5 2xl:px-80 2xl:py-44">
          <div className="flex flex-col 2xl:flex-row  gap-3 2xl:gap-10 w-full h-fit 2xl:h-[300px]">
            <div className="flex flex-col w-full gap-10 rounded-xl ">
              <div className="h-full flex flex-col justify-end gap-5 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:scale-105 duration-500">
                <div className="flex flex-col gap-5 h-full justify-end">
                  <h1 className="text-primary-50 text-2xl font-bold">Volumetric and Gravimetric </h1>
                  <ul className="list-disc text-md text-primary-50">
                    <li>Operated a burette to perform titration with high accuracy.</li>
                    <li>Calculated the content of a compound based on the weight of ash.</li>
                    <li>Calculated the content of a solution with the results of the titration volume.</li>
                    <li>Reported the practicum report on time.</li>
                  </ul>
                  {/* <button className="p-3 bg-primary-50 rounded-xl">Learn More</button> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-10 rounded-xl">
              <div className="h-full flex flex-col justify-end gap-5 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:-translate-y-4 hover:scale-105 duration-500">
                <h1 className="text-primary-50 text-2xl font-bold">Proximate</h1>
                <ul className="list-disc text-md text-primary-50">
                  <li>Analyzed a product to determine water content, ash content, fat content and protein content to compare with standards.
                  </li>
                  <li>Determining product quality by analyzing acid number and peroxide number.
                  </li>
                  <li>Operated the Kjeldahl apparatus to determine protein levels </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-col 2xl:flex-row gap-3 2xl:gap-10 w-full h-[300px]">
            <div className="flex flex-col w-full gap-10 rounded-xl">
              <div className="h-full flex flex-col justify-end gap-5 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:scale-105 duration-500">
                <div className="flex flex-col gap-5 h-full justify-end  ">
                  <h1 className="text-primary-50 text-2xl font-bold">Microbiology</h1>
                  <ul className="list-disc text-md text-primary-50">
                    <li>Created media from agar for microbial and fungal growth aseptically.</li>
                    <li>Operated microscope to identify fungi and microbes.</li>
                    <li>Growing fungi for analysis. </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full gap-10 rounded-xl">
              <div className="h-full flex flex-col justify-end gap-5 bg-gradient-to-br from-dark-2 to-dark border-dark border-2 shadow-lg rounded-xl p-10 hover:-translate-y-4 hover:scale-105 duration-500">
                <h1 className="text-primary-50 text-2xl font-bold">Instrument Analysis </h1>
                <ul className="list-disc text-md text-primary-50">
                  <li>Operated a UV-VIS spectrophotometer to find the wavelength of a sample.</li>
                  <li>Analyzed pH meters and meter conductors on a sample.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
