import React from "react"
import Link from "next/link"
export const Destination = () => {
  const dataImage = [
    {
      image_url:
        "https://img.freepik.com/free-vector/isometric-office-relocation-illustration_1284-59291.jpg",
      rate: "4.6",
      title: "Office Relocation",
    },
    {
      image_url:
        "https://img.freepik.com/free-vector/carsharing-service-abstract-concept-illustration-rental-service-short-term-rent-carsharing-application-ride-application-hiring-car-peer-peer-hourly-payment_335657-379.jpg?w=2000",
      rate: "5.0",
      title: "Car/Bus/Bolero Rental",
    },
    {
      image_url:
        "https://5.imimg.com/data5/AU/HB/MY-69291249/car-rental-in-vapi-500x500.jpg",
      title: "Self Drive",
      rate: "4.6",
    },
    {
      image_url:
        "https://thumbs.dreamstime.com/b/happy-family-moving-new-house-mother-little-son-unpacking-cardboard-box-dad-worker-carry-things-home-people-buying-157632761.jpg",
      title: "Room/Office/Store Relocation",
      rate: "4.6",
    },
    {
      image_url:
        "https://c8.alamy.com/comp/2D9EN5E/delivery-logistic-service-concept-vector-illustration-cartoon-team-of-deliver-logistician-people-working-with-laptop-in-delivering-company-online-tracking-transportation-technology-background-2D9EN5E.jpg",
      title: "Logistic All Over Nepal (Starting from Chitwan only)",
      rate: "4.6",
    },
    {
      image_url: "https://thumbs.dreamstime.com/z/%D0%BA-185879598.jpg",
      rate: "4.6",
      title: "Airlines/Bus Ticket Bookings",
    },
    {
      image_url:
        "https://cdni.iconscout.com/illustration/premium/thumb/online-booking-of-travelling-essentials-2357765-2012383.png",
      title: "Hotel Reservation",
      rate: "4.6",
    },
    {
      image_url:
        "https://cdn.dribbble.com/users/1410611/screenshots/12323571/media/fc8b33283432b01c159cefe5543e35fb.jpg?compress=1&resize=400x300",
      title: "Band/Panchey Baja & Wedding Buggie",
      rate: "4.6",
    },
  ]
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-20">
      {dataImage.map((item, key) => (
        <div className="" key={key}>
          <Link href="/">
            <a>
              <img
                src={item.image_url}
                className="object-cover rounded-md hover:opacity-75"
                alt=""
              />

              <div className="py-3">
                <div className="flex items-center"></div>
                <div className="">
                  <h4 className="font-semibold mt-1 text-3xl">{item.title}</h4>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
