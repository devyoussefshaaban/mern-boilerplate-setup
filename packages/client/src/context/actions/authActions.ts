import Cookies from "js-cookie";
import { authApi, LoginRequestType, RegisterRequestBody } from "../../api";
import * as actionTypes from "./actionTypes";

export const loginUser =
  (language: "en" | "ar", loginRequestBody: LoginRequestType) =>
  async (dispatch: any) => {
    try {
      const res = await authApi.login(language, loginRequestBody);
      const { data } = res;
      dispatch({
        type: actionTypes.LOGIN_USER,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.AUTH_FAILED,
        payload: {
          message: error.response.data.message,
        },
      });
    }
  };

export const registerUser =
  (language: "ar" | "en", registerRequestBody: RegisterRequestBody) =>
  async (dispatch: any) => {
    try {
      const res = await authApi.register(language, registerRequestBody);
      const { data } = res;
      dispatch({
        type: actionTypes.REGISTER_USER,
        payload: data,
      });
    } catch (error: any) {
      dispatch({
        type: actionTypes.AUTH_FAILED,
        payload: {
          message: error.response.data.message,
        },
      });
    }
  };

export const getMe = (token: string) => async (dispatch: any) => {
  try {
    const res = await authApi.getMe(token);
    const { data } = res;
    dispatch({
      type: actionTypes.GET_ME,
      payload: data,
    });
  } catch (error: any) {
    dispatch({
      type: actionTypes.AUTH_FAILED,
      payload: {
        message: error.response.data.message,
      },
    });
  }
};

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
    payload: {
      message:
        Cookies.get("language") === "ar"
          ? "تم تسجيل الخروج بنجاح"
          : "Logged out successfully",
    },
  };
};
