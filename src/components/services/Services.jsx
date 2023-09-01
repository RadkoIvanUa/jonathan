import "./services.css";

import { CgWebsite } from "react-icons/cg";
import { BiLogo500Px } from "react-icons/bi";
import { GoPackage } from "react-icons/go";
import { TbSocial } from "react-icons/tb";
import { FiPrinter } from "react-icons/fi";
import { AiOutlinePicture } from "react-icons/ai";

export default function Services() {
  return (
    <section className="services__section section" id="services">
      <div className="container">
        <h2 className="servises__title section__title">
          <span>Our</span> Services
        </h2>
        <p className="services__subtitle section__subtitle">
          It is a long established fact that a reader will be of a page when
          established fact looking at its layout.
        </p>
        <ul className="services__list">
          <li className="services__list-item">
            <div className="services__item-icon">
              <CgWebsite size={60} className="services__item-icon-svg" />
            </div>
            <h3 className="servises__item-title">Web</h3>
            <p className="services__item-text section__text">
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <BiLogo500Px size={60} className="services__item-icon-svg" />
            </div>
            <h3 className="servises__item-title">Logo</h3>
            <p className="services__item-text section__text">
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <GoPackage size={60} className="services__item-icon-svg" />
            </div>
            <h3 className="servises__item-title">Packaging</h3>
            <p className="services__item-text section__text">
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <TbSocial size={60} className="services__item-icon-svg" />
            </div>
            <h3 className="servises__item-title">Social Media</h3>
            <p className="services__item-text section__text">
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <FiPrinter size={60} className="services__item-icon-svg" />
            </div>
            <h3 className="servises__item-title">Print Design</h3>
            <p className="services__item-text section__text">
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
          <li className="services__list-item">
            <div className="services__item-icon">
              <AiOutlinePicture size={60} className="services__item-icon-svg" />
            </div>
            <h3 className="servises__item-title">Illustration</h3>
            <p className="services__item-text section__text">
              There are many variations of passages of but the majority have
              suffered alteration in some form.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
