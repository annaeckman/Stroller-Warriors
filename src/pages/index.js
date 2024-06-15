import "./index.css";
import { hotelLeonPlaygrounds } from "../components/utils/constants";

const playgroundListModal = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");
const mapSubmitButton = document.querySelector(".map__submit-button");
// const modalSubmitButton = document.querySelector();

mapSubmitButton.addEventListener("click", openPlaygroundModal);

function openPlaygroundModal() {
  playgroundListModal.classList.add("modal_opened");
}

modalCloseButton.addEventListener("click", closePlaygroundModal);

function closePlaygroundModal() {
  playgroundListModal.classList.remove("modal_opened");
}
