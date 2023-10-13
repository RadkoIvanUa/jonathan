import "swiper/css";
import "swiper/css/pagination";
import "./client.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { motion } from "framer-motion";
import clientsList from "./clients_list";
import PropTypes from "prop-types";

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

export default function Client({ selectedColor }) {
  return (
    <section className="client__section section" id="client">
      <div className="container">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="section__title">
              <span>Client</span> Speak
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.4, 0, 0.2, 1], duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={breakpoints}
              pagination={{ clickable: true }}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              style={{
                "--swiper-pagination-color": `${selectedColor}`,
              }}
            >
              <ul>
                {clientsList.map((client, index) => (
                  <li key={index}>
                    <SwiperSlide
                      style={swiperSlideStyle}
                      className="client__swiper-slide"
                    >
                      <div className="client__slide-top">
                        <div className="client__slide-thumb">
                          <img src={client.img} className="client__slide-img" />
                        </div>
                        <div>
                          <h3 className="client__slide-title">{client.name}</h3>
                          <h4 className="client__slide-subtitle">
                            {client.role}
                          </h4>
                        </div>
                      </div>

                      <p className="client__slide-testimonial">
                        <RiDoubleQuotesL
                          size={20}
                          className="quotes__start"
                          color={selectedColor}
                        />{" "}
                        {client.response}
                        <RiDoubleQuotesR
                          size={20}
                          className="quotes__end"
                          color={selectedColor}
                        />
                      </p>
                    </SwiperSlide>
                  </li>
                ))}
              </ul>
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

Client.propTypes = {
  selectedColor: PropTypes.string,
};
