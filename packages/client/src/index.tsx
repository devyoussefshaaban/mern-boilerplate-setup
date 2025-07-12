import ReactDOM from "react-dom/client";
import App from "./App";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState, store } from "./context";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import AR_LANG from "./locales/ar/common.json";
import EN_LANG from "./locales/en/common.json";
import { ToastContainer } from "react-toastify";
import { StrictMode, useEffect } from "react";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import type { PaletteMode } from "@mui/material";
import Cookies from "js-cookie";
import { getMe } from "./context/actions/authActions";
import { ConfirmModal } from "./components";
import { closeConfirmModal } from "./context/actions/commonActions";
import useMuiTheme from "./configs/muiTheme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

i18next.use(initReactI18next).init({
  resources: {
    ar: {
      global: AR_LANG,
    },
    en: {
      global: EN_LANG,
    },
  },
  lng: "en",

  ns: ["global"],
  defaultNS: "global",
  interpolation: {
    escapeValue: false,
  },
});

const Root = () => {
  const { language } = useSelector((state: RootState) => state.common);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    i18next.changeLanguage(Cookies.get("language"));
    dispatch(getMe(Cookies.get("token") as string));
  }, []);

  useEffect(() => {
    document.body.dir = language === "en" ? "ltr" : "rtl";
  }, [language]);

  const { modalContent, isOpenConfirmModal } = useSelector(
    (state: RootState) => state.common
  );

  const closeConfirmModalHandler = () => dispatch(closeConfirmModal());

  const { theme } = useMuiTheme();

  return (
    <MainLayout>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
        <ConfirmModal
          handleClose={closeConfirmModalHandler}
          open={isOpenConfirmModal}
          modalContent={modalContent}
        />
      </ThemeProvider>
    </MainLayout>
  );
};

root.render(
  <StrictMode>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <Provider store={store}>
          <Root />
        </Provider>
      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        theme="light"
        closeButton={false}
      />
    </I18nextProvider>
  </StrictMode>
);
