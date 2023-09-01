import "./portfolio.css";
import { useEffect, useState } from "react";
import galery_filter from "../../helpers/galery_filter";

import workArr from "../../portfolio_img";
import ModalWindow from "../modal/Modal";

export default function Portfolio() {
  const [largeImageURL, setLargeImageURL] = useState();
  const [description, setDescription] = useState();
  const [client, setClient] = useState();
  const [title, setTitle] = useState();
  const [category, setCategory] = useState();
  const [website, setWebsite] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = (e) => {
    const largeImageURL = e.target.dataset.src;
    const itemDescription = e.target.dataset.description;
    const client = e.target.dataset.client;
    const title = e.target.dataset.title;
    const category = e.target.dataset.category;
    const website = e.target.dataset.website;

    if (!largeImageURL) {
      return;
    }

    setLargeImageURL(largeImageURL);
    setDescription(itemDescription);
    setClient(client);
    setTitle(title);
    setCategory(category);
    setWebsite(website);

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
                <button className="item active" data-name="all">
                  All
                </button>
                <button className="item" data-name="web">
                  Web
                </button>
                <button className="item" data-name="logo">
                  Logo
                </button>
                <button className="item" data-name="packaging">
                  Packaging
                </button>
                <button className="item" data-name="social">
                  Social
                </button>
                <button className="item" data-name="print">
                  Print
                </button>
                <button className="item" data-name="illustration">
                  Illustration
                </button>
              </div>
            </nav>
            <ul className="gallery" onClick={handleModalOpen}>
              {workArr.map((item, index) => (
                <li key={index} className="image" data-name={item.category}>
                  <div className="image__thumb">
                    <img
                      src={item.link}
                      data-src={item.link}
                      data-description={item.description}
                      data-client={item.client}
                      data-title={item.title}
                      data-category={item.category}
                      data-website={item.website}
                      alt=""
                      width="300px"
                    />
                    <div
                      className="overlay"
                      data-src={item.link}
                      data-description={item.description}
                      data-client={item.client}
                      data-title={item.title}
                      data-category={item.category}
                      data-website={item.website}
                      onClick={handleModalOpen}
                    >
                      <p
                        className="overlay__title"
                        data-src={item.link}
                        data-description={item.description}
                        data-client={item.client}
                        data-title={item.title}
                        data-category={item.category}
                        data-website={item.website}
                        onClick={handleModalOpen}
                      >
                        {item.title}
                      </p>
                      <p
                        className="overlay__category"
                        data-src={item.link}
                        data-description={item.description}
                        data-client={item.client}
                        data-title={item.title}
                        data-category={item.category}
                        data-website={item.website}
                        onClick={handleModalOpen}
                      >
                        {item.category}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
              <ModalWindow
                largeImageURL={largeImageURL}
                isModalOpen={isModalOpen}
                onCloseModal={hendleModalClose}
                description={description}
                client={client}
                title={title}
                category={category}
                website={website}
              />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
