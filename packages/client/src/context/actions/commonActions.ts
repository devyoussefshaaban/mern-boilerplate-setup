import * as actionTypes from "./actionTypes";

export const changeLanguage = (language: "ar" | "en") => {
  return {
    type: actionTypes.CHANGE_LANGUAGE,
    payload: language,
  };
};

export const togglethemeMode = () => {
  return {
    type: actionTypes.TOGGLE_THEME_MODE,
  };
};

export const openConfirmModal = (modalContent: ModalContent) => {
  return {
    type: actionTypes.OPEN_CONFIRM_MODAL,
    payload: modalContent,
  };
};

export const closeConfirmModal = () => {
  return {
    type: actionTypes.CLOSE_CONFIRM_MODAL,
  };
};
