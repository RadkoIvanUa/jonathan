/* eslint-disable react/prop-types */
import "./modal.css";

import { IoIosCloseCircleOutline } from "react-icons/io";

import { CgWebsite } from "react-icons/cg";

import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import { useEffect, useRef, useState } from "react";

export default function ModalWindow({
  isModalOpen,
  onCloseModal,
  largeImageURL,
  description,
  client,
  title,
  category,
  website,
}) {
  const [open, setOpen] = useState(false);
  const [modalWidth, setModalWidth] = useState();

  const windowSizeArr = useRef([window.innerWidth]);

  const windowSize = windowSizeArr.current[0];

  useEffect(() => {
    console.log(windowSize);
    if (windowSize === 280 && windowSize < 320) {
      setModalWidth(250);
    } else if (windowSize === 320 && windowSize < 400) {
      setModalWidth(280);
    } else if (windowSize === 400 || windowSize < 500) {
      setModalWidth(300);
    } else if (windowSize === 500 || windowSize < 768) {
      setModalWidth(450);
    } else if (windowSize === 768 || windowSize < 1024) {
      setModalWidth(600);
    } else if (windowSize === 1024 || windowSize < 1280) {
      setModalWidth(800);
    } else if (windowSize === 1280 || windowSize < 1920) {
      setModalWidth(1000);
    }
  }, [windowSize]);

  useEffect(() => {
    if (isModalOpen) {
      setOpen(true);
    }
  }, [isModalOpen]);

  useEffect(() => {
    onCloseModal();
  }, [onCloseModal]);

  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: modalWidth,
    maxHeight: "80%",
    border: "none",
    bgcolor: "background.paper",
    borderRadius: 2,
    boxShadow: 24,
    outline: "none",
    overflowY: "auto",
    overflowX: "hidden",
  };

  return (
    <div>
      <Modal
        disableEnforceFocus
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        style={{ zIndex: 11000 }}
      >
        <Fade in={open}>
          <Box sx={style} className="modal">
            <div className="modal__img-thumb">
              <img src={largeImageURL} alt="" width="800px" />
            </div>

            <Box className="modal__bottom-content">
              <h4 className="modal__category">{category}</h4>
              <h3 className="modal__title">{title}</h3>

              <div className="modal__client">
                <h4 className="modal__client-name">
                  <span>Client:</span> {client}
                </h4>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <a href={website} className="modal__client-website">
                    Visit client website
                  </a>
                  <CgWebsite size={22} color="black" />
                </div>
              </div>
              <p className="modal__description section__text">{description}</p>
            </Box>
          </Box>
        </Fade>
      </Modal>

      {open ? (
        <IoIosCloseCircleOutline
          size={40}
          className="modal__close"
          onClick={handleClose}
        />
      ) : null}
    </div>
  );
}
