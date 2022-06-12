import React from "react"

export const MainHero = () => {
  return (
    <div className="py-20" style={{ backgroundColor: "#FFF7F5" }}>
      <div className="lg:flex justify-between items-center px-5 md:px-20">
        <div className="w-full lg:w-2/5 ">
          <img
            src="https://images.livemint.com/img/2020/12/03/1600x900/Brezza_1606986967204_1606986978616.PNG"
            alt=""
            className="block w-full right-0 object-cover"
            style={{ borderRadius: "0px 0px 7rem 0rem" }}
          />
        </div>
        <div className="w-full lg:w-2/5 ">
          <h1 className="text-6xl font-bold">Your Trip, Our Car</h1>
          <p>
            A complete your travel partner rent a car service, self driver
            service, office shifting, room shifting, store all over Nepal.
          </p>
          <div className=" mt-5">
            <a
              href="tel:9855051698"
              className="px-5 py-2 text-white rounded-full bg-red-500  text-sm "
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
