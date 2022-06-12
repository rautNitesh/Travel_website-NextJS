import Link from "next/link"
export const Footer = () => {
  return (
    <div className="" style={{ backgroundColor: "#403E56" }}>
      <div className="px-5 md:px-20 flex flex-col md:flex-row py-10 md:py-20">
        <div className="menu mr-20 ">
          <h4 className="text-lg font-semibold text-white">MENU</h4>
          <ul className="mt-2 text-white text-sm">
            <li className="py-3">
              <a>Address: Bal Mandir Road, Bharatpur-10, Chitwan, Nepal</a>
            </li>
            <li className="py-3">
              <Link href="#">
                <>
                  Contact: &nbsp;
                  <a href="tel:9855051698" className="underline">
                    9855051698
                  </a>
                </>
              </Link>
            </li>
          </ul>
        </div>

        <div className="legal mt-5 md:mt-0">
          <h4 className="text-lg font-semibold text-white">Social</h4>
          <ul className="mt-2 text-white text-sm flex">
            <li className="mr-3">
              <Link href="#">
                <a
                  href="https://www.facebook.com/sambhavtoursandtravels.bharatpurchitwannepal"
                  target="_blank"
                >
                  <img
                    src="/assets/sosmed/facebook.svg"
                    className="h-5 w-5"
                    alt=""
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="ml-0 md:ml-auto mt-5 md:mt-0">
          <h2 className="text-2xl font-bold text-white">
            Sambhav Travel & Tours Pvt. Ltd.
          </h2>
        </div>
      </div>
      <div className="flex justify-center pb-4">
        <p className="text-white text-1xl">
          Made with ❤️ by{" "}
          <a
            className="underline"
            href="https://niteshraut.com.np"
            target="_blank"
          >
            Nitesh
          </a>
        </p>
      </div>
    </div>
  )
}
