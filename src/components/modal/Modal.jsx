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

  const windowSize = useRef([window.innerWidth]);

  useEffect(() => {
    if (windowSize.current[0] < 420) {
      setModalWidth(300);
    } else if (windowSize.current[0] > 500 && windowSize.current[0] < 768) {
      setModalWidth(450);
    } else if (windowSize.current[0] > 768) {
      setModalWidth(700);
    } else if (windowSize.current[0] > 1024) {
      setModalWidth(900);
    }
  }, []);

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
    maxHeight: "90%",
    border: "none",
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
    outline: "none",
    overflow: "hidden",
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
          <Box sx={style}>
            <div className="modal__img-thumb">
              <img src={largeImageURL} alt="" width="800px" />
            </div>

            <div className="modal__bottom-content">
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
            </div>

            <IoIosCloseCircleOutline
              size={30}
              style={{
                position: "absolute",
                top: 5,
                right: 5,
              }}
              className="modal__close"
              onClick={handleClose}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
