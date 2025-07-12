import i18next from "i18next";
import Cookies from "js-cookie";
import * as actionTypes from "../actions/actionTypes";

const initialState: {
  language: "ar" | "en";
  themeMode: "dark" | "light";
  isOpenConfirmModal: boolean;
  modalContent: ModalContent | null;
} = {
  language: Cookies.get("language") as "ar" | "en",
  themeMode: Cookies.get("themeMode") as "dark" | "light",
  isOpenConfirmModal: false,
  modalContent: null,
};

const commonReducer = (state = initialState, action: any) => {
  const isDarkMode = state.themeMode === "dark";

  switch (action.type) {
    case actionTypes.CHANGE_LANGUAGE:
      i18next.changeLanguage(action.payload);
      Cookies.set("language", action.payload);
      return {
        ...state,
        language: action.payload,
      };
    case actionTypes.TOGGLE_THEME_MODE:
      isDarkMode
        ? Cookies.set("themeMode", "light")
        : Cookies.set("themeMode", "dark");
      return {
        ...state,
        themeMode: isDarkMode ? "light" : "dark",
      };
    case actionTypes.OPEN_CONFIRM_MODAL:
      return {
        ...state,
        isOpenConfirmModal: true,
        modalContent: action.payload,
      };
    case actionTypes.CLOSE_CONFIRM_MODAL:
      return {
        ...state,
        isOpenConfirmModal: false,
        modalContent: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default commonReducer;
