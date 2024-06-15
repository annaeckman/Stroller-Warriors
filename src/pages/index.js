import "./index.css";
import { hotelLeonPlaygrounds } from "../components/utils/constants";

const playgroundListModal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");
const locationSubmitButton = document.querySelector(".location__submit-button");
const modalSubmitButton = document.querySelector(".modal__submit-button");

locationSubmitButton.addEventListener("click", openPlaygroundModal);

function openPlaygroundModal(evt) {
  evt.preventDefault();
  playgroundListModal.classList.add("modal_opened");
}

modalCloseButton.addEventListener("click", () => {
  playgroundListModal.classList.remove("modal_opened");
});
