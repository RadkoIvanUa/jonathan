import "./about.css";
import aboutImg from "../../../public/img/about/about_photo.jpg";

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about_img__thumb">
          <img src={aboutImg} alt="" className="about_img" width={520} />
        </div>
        <h2 className="about_title">title</h2>
        <h3 className="about_subtitle">subtitle</h3>
        <p className="about_text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid quo
          laboriosam esse nulla harum quis, repellat a perferendis nam veniam
          eum, reprehenderit vel, repudiandae vero magni odit maxime maiores ex
          eligendi. Impedit doloremque incidunt eaque, voluptatem alias facere
          tempora dolor voluptatum corrupti quas eos velit! Tempora earum
          voluptas ab dignissimos. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aliquid quo laboriosam esse nulla harum quis,
          repellat a perferendis nam veniam eum, reprehenderit vel, repudiandae
          vero magni odit maxime maiores ex eligendi. Impedit doloremque
          incidunt eaque, voluptatem alias facere tempora dolor voluptatum
          corrupti quas eos velit! Tempora earum voluptas ab dignissimos.
        </p>
      </div>
    </section>
  );
}
