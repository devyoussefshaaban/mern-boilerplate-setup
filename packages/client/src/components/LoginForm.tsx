import {
  Box,
  Button,
  Divider,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AppDispatch, RootState } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../context/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type LoginFormInputs = {
  email: string;
  password: string;
};

interface IProps {
  switchForm: () => void;
}

const LoginForm: FC<IProps> = ({ switchForm }) => {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const { language } = useSelector((state: RootState) => state.common);

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    dispatch(loginUser(language, data));
    reset();
  };

  useEffect(() => {
    isAuthenticated && navigate("/");
  }, [isAuthenticated]);

  const { t } = useTranslation();

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 6 }}>
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <Typography variant="h5" mb={1}>
          {t("auth.login.head")}
        </Typography>
        <Typography variant="body2">
          {t("auth.login.enter_all_fields")}
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Box>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Box mb={2}>
          <TextField
            label={`${t("auth.login.email.label")}`}
            type="email"
            fullWidth
            {...register("email", {
              required: t("auth.login.email.error.required"),
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: t("auth.login.email.error.valid"),
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
        </Box>
        <Box mb={2}>
          <TextField
            label={`${t("auth.login.password.label")}`}
            type="password"
            fullWidth
            {...register("password", {
              required: t("auth.login.password.error.required"),
              minLength: {
                value: 8,
                message: t("auth.login.password.error.minLength"),
              },
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
        </Box>
        <Box>
          <Button
            variant="contained"
            style={{
              textTransform: "capitalize",
              margin: "auto",
              display: "block",
            }}
            type="submit"
          >
            {t("auth.login.login")}
          </Button>
        </Box>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Typography variant="body1">
            {t("auth.login.not_have_account")}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            sx={{ cursor: "pointer", ml: 1 }}
            onClick={switchForm}
          >
            {t("auth.login.register")}
          </Typography>
        </Box>
      </form>
    </Paper>
  );
};

export default LoginForm;
