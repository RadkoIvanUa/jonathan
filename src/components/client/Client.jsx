// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./client.css";

import client1 from "../../img/client/client_1.jpg";
import client2 from "../../img/client/client_2.jpg";
import client3 from "../../img/client/client_3.jpg";
import client4 from "../../img/client/client_4.jpg";
import client5 from "../../img/client/client_5.jpg";

const swiperSlideStyle = {
  padding: 20,
  borderRadius: 5,
  backgroundColor: "white",
  height: 400,
};

const breakpoints = {
  768: {
    slidesPerView: 2,
    spaceBetween: 20,
  },

  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
};

export default function Client() {
  return (
    <section className="client__section section" id="client">
      <div className="container">
        <h3 className="section__title">
          <span>Client</span> Speak
        </h3>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={breakpoints}
          pagination={true}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide
            style={swiperSlideStyle}
            className="client__swiper-slide"
          >
            <div className="client__slide-top">
              <div className="client__slide-thumb">
                <img src={client1} className="client__slide-img" />
              </div>
              <div>
                <h3 className="client__slide-title">Johny Black</h3>
                <h4 className="client__slide-subtitle">FronEnd developer</h4>
              </div>
            </div>

            <p className="client__slide-testimonial">
              <RiDoubleQuotesL size={20} className="quotes__start" /> I stumbled
              upon this service, and I must say, it's a true gem! The innovative
              approach they take to simplify complex concepts and ideas is
              simply remarkable. It's like they have a magical way of distilling
              complexity into elegant simplicity. The user interface is clean
              and intuitive, making the entire experience a breeze.
              <RiDoubleQuotesR size={20} className="quotes__end" />
            </p>
          </SwiperSlide>
          <SwiperSlide
            style={swiperSlideStyle}
            className="client__swiper-slide"
          >
            <div className="client__slide-top">
              <div className="client__slide-thumb">
                <img src={client2} className="client__slide-img" />
              </div>
              <div>
                <h3 className="client__slide-title">Monica Layola</h3>
                <h4 className="client__slide-subtitle">Project Manager</h4>
              </div>
            </div>

            <p className="client__slide-testimonial">
              <RiDoubleQuotesL size={20} className="quotes__start" />
              It's like a portal to a world of creative thinking and fresh
              ideas. Using it feels like a journey into the unknown, with each
              abstract concept unveiling a new layer of intrigue. The way it
              seamlessly blends simplicity and depth is mind-boggling.
              <RiDoubleQuotesR size={20} className="quotes__end" />
            </p>
          </SwiperSlide>
          <SwiperSlide
            style={swiperSlideStyle}
            className="client__swiper-slide"
          >
            <div className="client__slide-top">
              <div className="client__slide-thumb">
                <img src={client3} className="client__slide-img" />
              </div>
              <div>
                <h3 className="client__slide-title">Antonio White</h3>
                <h4 className="client__slide-subtitle">Desinger</h4>
              </div>
            </div>

            <p className="client__slide-testimonial">
              <RiDoubleQuotesL size={20} className="quotes__start" />
              Discovering this service has been a delightful surprise. It's like
              having access to a treasure trove of creative concepts. The
              user-friendly interface makes exploring abstract ideas a breeze,
              and it's been an invaluable tool for my work. I've found it to be
              a source of inspiration and a catalyst for innovative thinking.
              <RiDoubleQuotesR size={20} className="quotes__end" />
            </p>
          </SwiperSlide>
          <SwiperSlide
            style={swiperSlideStyle}
            className="client__swiper-slide"
          >
            <div className="client__slide-top">
              <div className="client__slide-thumb">
                <img src={client4} className="client__slide-img" />
              </div>
              <div>
                <h3 className="client__slide-title">Jesica Parcker</h3>
                <h4 className="client__slide-subtitle">Graphic Desinger</h4>
              </div>
            </div>

            <p className="client__slide-testimonial">
              <RiDoubleQuotesL size={20} className="quotes__start" />
              I recently started using this service, and it's been a
              game-changer for my creative projects. It's as if they've
              harnessed the power of imagination and distilled it into a digital
              tool. Navigating through their abstract concepts is like embarking
              on a fascinating intellectual journey.
              <RiDoubleQuotesR size={20} className="quotes__end" />
            </p>
          </SwiperSlide>
          <SwiperSlide
            style={swiperSlideStyle}
            className="client__swiper-slide"
          >
            <div className="client__slide-top">
              <div className="client__slide-thumb">
                <img src={client5} className="client__slide-img" />
              </div>
              <div>
                <h3 className="client__slide-title">Donald Rich</h3>
                <h4 className="client__slide-subtitle">Photographer</h4>
              </div>
            </div>

            <p className="client__slide-testimonial">
              <RiDoubleQuotesL size={20} className="quotes__start" />
              This service is nothing short of mind-blowing. It's like a portal
              to a world of endless possibilities. The way it breaks down
              complex ideas into bite-sized, understandable pieces is genius.
              <RiDoubleQuotesR size={20} className="quotes__end" />
            </p>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
