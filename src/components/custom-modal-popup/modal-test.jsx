import { useState } from "react";
import Modal from "./modal";
import "./styles.css";

export default function ModalTest() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Modal Popup</button>
      {showPopup && <Modal onClose={closePopup} body={<div>Customized body</div>} />}
    </div>
  );
}
