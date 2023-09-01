import "./portfolio.css";
import { useEffect, useState } from "react";
import galery_filter from "../../helpers/galery_filter";

import workArr from "../../portfolio_img";
import Modal2 from "../modal/Modal";

export default function Portfolio() {
  const [largeImageURL, setLargeImageURL] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (e) => {
    const largeImageURL = e.target.dataset.src;

    console.log(largeImageURL);

    if (!largeImageURL) {
      return;
    }

    setLargeImageURL(largeImageURL);
    setIsModalOpen(true);
  };

  const hendleModalClose = () => setIsModalOpen(false);

  useEffect(() => {
    galery_filter();
  }, []);

  return (
    <section className="portfolio__section section" id="portfolio">
      <div className="container">
        <h3 className="portfolio__title section__title">
          <span>Our</span> Works
        </h3>
        <div>
          <div className="wrapper">
            <nav>
              <div className="items">
                <span className="item active" data-name="all">
                  All
                </span>
                <span className="item" data-name="web">
                  Web
                </span>
                <span className="item" data-name="logo">
                  Logo
                </span>
                <span className="item" data-name="packaging">
                  Packaging
                </span>
                <span className="item" data-name="social">
                  Social
                </span>
                <span className="item" data-name="print">
                  Print
                </span>
                <span className="item" data-name="illustration">
                  Illustration
                </span>
              </div>
            </nav>
            <ul className="gallery" onClick={handleModalOpen}>
              {workArr.map((item, index) => (
                <li key={index} className="image" data-name={item.category}>
                  <span>
                    <img src={item.link} data-src={item.link} alt="" />
                  </span>
                </li>
              ))}
              <Modal2
                largeImageURL={largeImageURL}
                isModalOpen={isModalOpen}
                onCloseModal={hendleModalClose}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
