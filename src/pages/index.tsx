import { NextSeo } from "next-seo"
import { MainLayout } from "../components/Layout/MainLayout"
import { MainHero } from "../components/MainHero"
import { Destination } from "../components/Destination"
import { PeopleReview } from "../components/Review"
import { Banner } from "../components/Banner"
import { Footer } from "../components/Footer"

const DEFAULT_SEO = {
  title: "Sambhav Travels And Tours",
  description: "Explore Nepal with rented car from Sambhav Tours, Chitwan",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://sambhavtours.vercel.app",
    title: "Sambhav Travels And Tours",
    description: "Explore Nepal with rented car from Sambhav Tours, Chitwan",
    image:
      "https://prismic-io.s3.amazonaws.com/gary-blog%2F3297f290-a885-4cc6-9b19-3235e3026646_default.jpg",
    site_name: "sambhavtours.vercel.app",
    imageWidth: 1200,
    imageHeight: 1200,
  },
  twitter: {
    handle: "@garmeeh",
    cardType: "summary_large_image",
  },
}

export default function Home() {
  return (
    <>
      <NextSeo
        title={"Sambhav Travels And Tours"}
        description={
          "Explore Nepal with rented car from Sambhav Tours, Chitwan"
        }
        openGraph={DEFAULT_SEO}
        additionalMetaTags={[
          {
            property: "dc:creator",
            content: "Apsyadira",
          },
          {
            name: "application-name",
            content: "sambhavtours.vercel.app",
          },
        ]}
      />
      <MainLayout>
        <MainHero />
        <div className="px-5 md:px-20 py-10">
          <h4 className="text-5xl font-bold">Our Services</h4>
          <p className="mt-8 w-full md:w-2/4 leading-relaxed font-semibold text-gray-700">
            Sambhav Travels & Tours Pvt. Ltd, is a reputed name on the business
            established on 2020, situated at Balmandir Road, Bharatpur-10,
            Chitwan. We provide all kinds of travel, tourism services at the
            best market price than others.
            {/* घर,रूम फ्लाइट , अफिस, होटेल, गोदाम, सर्नु परेमा हामीलाई
            सम्झनुहोला! हामीकहाँ Yoddha ,bolaro , गाडीहरु उपलब्ध रहेको छ! आवश्यक
            परेमा सम्झनुहोला 9855051698 9855064232 9855011698 */}
          </p>
          <Destination />
          <div className="flex justify-center mt-10">
            <a
              href="tel:9855051698"
              className="border-red-500 border py-3 px-20 w-full sm:w-auto text-red-500 font-semibold mt-10 rounded-full hover:bg-red-600 hover:text-white"
            >
              Call Us
            </a>
          </div>
        </div>
        <div className="px-5 md:px-20 py-10">
          <div className="container mx-auto text-center w-full lg:w-2/5">
            <h4 className="text-3xl font-semibold">Testimonials</h4>
            <p className="mt-8 leading-relaxed font-semibold text-gray-700 ">
              Read what our customer think of our services 😎
            </p>
          </div>
          <PeopleReview />
        </div>
        <div className="py-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="w-full lg:w-5/12 px-5 lg:px-20 ">
              <h4 className="text-4xl font-bold">Our Products Gallery</h4>
              <p className="leading-relaxed mt-5">
                Here are the some list of products we have, for more details
                please{" "}
              </p>
              <div className="mt-4">
                <a
                  href="tel:9855051698"
                  className="bg-red-500 rounded-full mt-4 px-5 py-3 shadow-md mt-10 text-white w-2/4"
                >
                  Call Us
                </a>
              </div>
            </div>
            <div className="w-full lg:w-7/12">
              <Banner />
            </div>
          </div>
        </div>
        <Footer />
      </MainLayout>
    </>
  )
}
