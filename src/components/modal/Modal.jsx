/* eslint-disable react/prop-types */
import ReactModal from "react-modal";

import "./modal.css";

import { IoIosCloseCircleOutline } from "react-icons/io";

import { useEffect, useRef, useState } from "react";

// BODYSCROLL LOCK LIBRARY
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";

//FOR REACT MODAL
ReactModal.setAppElement("#root");

export function Modal({ isModalOpen, onCloseModal, largeImageURL }) {
  const windowSize = useRef([window.innerWidth]);
  const [modalWidth, setModalWidth] = useState();

  useEffect(() => {
    console.log(windowSize.current[0]);
    if (windowSize.current[0] > 768) {
      setModalWidth(700);
    } else if (windowSize.current[0] > 1024) {
      setModalWidth(900);
    } else if (windowSize.current[0] < 420) {
      setModalWidth(300);
    }
  }, []);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      width: modalWidth,
      transition: "opacity 2000ms ease-in-out",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      zIndex: 11000,
    },
  };

  return (
    <>
      <ReactModal
        style={customStyles}
        isOpen={isModalOpen}
        onRequestClose={onCloseModal}
        onAfterOpen={disableBodyScroll}
        onAfterClose={clearAllBodyScrollLocks}
        closeTimeoutMS={300}
      >
        <img
          src={largeImageURL}
          alt=""
          width="800px"
          style={{ borderRadius: "5px" }}
        />

        <div className="modal__bottom-content">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
            natus itaque voluptatem voluptatibus repudiandae fugiat ipsum eos
            corporis totam cumque aspernatur tempora quos sequi laborum nam ipsa
            ullam esse nesciunt amet libero dignissimos iste est, error magni!
            Porro tempore totam nam exercitationem. Aperiam officia quae, quas
            deserunt nobis qui atque commodi, dolore fugit, aut cumque
            consectetur. Necessitatibus assumenda placeat beatae quaerat
            molestias ut quisquam dolor tempora debitis explicabo hic cupiditate
            minima laboriosam, iusto velit numquam facilis consequuntur! Ullam
            officia doloribus dolorum, vero nemo aliquam optio doloremque beatae
            dignissimos maxime consectetur velit, id similique, voluptatum
            dolore aliquid quis ex possimus error.
          </p>
        </div>

        <IoIosCloseCircleOutline
          size={30}
          style={{
            position: "absolute",
            top: 5,
            right: 5,
            zIndex: 12000,
          }}
          className="modal__close"
          onClick={onCloseModal}
        />
      </ReactModal>
    </>
  );
}
