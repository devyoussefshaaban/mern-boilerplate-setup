import { toast } from "react-toastify";
import { User } from "../../models/User";
import * as actioTypes from "../actions/actionTypes";
import Cookie from "js-cookie";

const initialState: {
  user: User | null;
  isAuthenticated: boolean;
} = {
  user: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case actioTypes.LOGIN_USER:
      Cookie.set("token", action.payload.data.token);
      toast.success(action.payload.message);
      return {
        ...state,
        user: action.payload.data.emailVerification.isVerified
          ? action.payload.data
          : null,
        isAuthenticated: action.payload.data.emailVerification.isVerified,
      };
    case actioTypes.REGISTER_USER:
      Cookie.set("token", action.payload.data.token);
      toast.success(action.payload.message);
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
      };
    case actioTypes.GET_ME:
      return {
        ...state,
        user: action.payload.data,
        isAuthenticated: true,
      };
    case actioTypes.LOGOUT_USER:
      Cookie.remove("token");
      toast.success(action.payload.message);
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      };
    case actioTypes.AUTH_FAILED:
      toast.error(action.payload.message);
      return {
        ...state,
      };
    default:
      return { ...state };
  }
};

export default authReducer;
