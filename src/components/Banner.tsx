import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
export const Banner = () => {
  const dataReview = [
    {
      image_url:
        "https://c.ndtvimg.com/2020-02/0rftg1vc_maruti-suzuki-vitara-brezza_625x300_28_February_20.jpg",
      name: "Vitara Brezza",
    },
    {
      image_url:
        "https://d1hv7ee95zft1i.cloudfront.net/custom/car-model-photo/original/2022-suzuki-celerio-6274aea79818c.jpg",
      name: "Celerio",
    },
    {
      image_url:
        "https://imgd.aeplcdn.com/1200x900/n/cw/ec/45732/wr-v-exterior-right-front-three-quarter.jpeg?q=75",
      name: "WR-V",
    },
    {
      image_url:
        "https://images.hindustantimes.com/auto/img/2022/05/20/1600x900/All-New_Scorpio-N_Pic_04_1653046559013_1653046569084.jpg",
      name: "Scorpio",
    },
    {
      image_url: "https://skamalmotors.com/wp-content/uploads/2022/04/9.jpg",
      name: "Youdha",
    },
    {
      image_url:
        "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Bolero/7233/1632121139564/front-left-side-47.jpg",
      name: "Bolero",
    },
    {
      image_url:
        "https://www.carrentaldelhi.biz/images/car-photoes/ac-deluxe-tata-bus-40-seater/ac-deluxe-tata-bus-40-seater-2.jpg",
      name: "Delux Bus",
    },
  ]

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 500 },
      items: 1,
    },
  }

  return (
    <div className="mt-20">
      <Carousel
        responsive={responsive}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
      >
        {dataReview.map((item, key) => (
          <div className="mx-2">
            <img src={item.image_url} alt="" className="rounded-xl" />
            <p>{item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  )
}
