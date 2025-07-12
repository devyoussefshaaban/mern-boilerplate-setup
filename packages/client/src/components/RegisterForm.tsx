import React, { FC } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  MenuItem,
  Typography,
  Paper,
  Divider,
} from "@mui/material";
import { AppDispatch, RootState } from "../context";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../context/actions/authActions";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

type RegisterFormInputs = {
  username: string;
  email: string;
  password: string;
};

interface IProps {
  switchForm: () => void;
}

const RegisterForm: FC<IProps> = ({ switchForm }) => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RegisterFormInputs>();

  const { language } = useSelector((state: RootState) => state.common);

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const onSubmit = (data: RegisterFormInputs) => {
    dispatch(registerUser(language, data));
    reset();
    setTimeout(() => navigate("/"), 500);
  };

  const { t } = useTranslation();

  return (
    <Paper elevation={3} sx={{ p: 4, maxWidth: 400, mx: "auto", mt: 6 }}>
      <Box sx={{ margin: "auto", textAlign: "center" }}>
        <Typography variant="h5" mb={1}>
          {t("auth.register.head")}
        </Typography>
        <Typography variant="body2">
          {t("auth.register.enter_all_fields")}
        </Typography>
        <Divider sx={{ my: 2 }} />
      </Box>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Controller
          name="username"
          control={control}
          defaultValue=""
          rules={{
            required: t("auth.register.username.error.required"),
            minLength: {
              value: 3,
              message: t("auth.register.username.error.minLength"),
            },
            maxLength: {
              value: 30,
              message: t("auth.register.username.error.maxLength"),
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("auth.register.username.label")}
              fullWidth
              margin="normal"
              error={!!errors.username}
              helperText={errors.username?.message}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          rules={{
            required: t("auth.register.email.error.required"),
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: t("auth.register.email.error.valid"),
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("auth.register.email.label")}
              type="email"
              fullWidth
              margin="normal"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{
            required: t("auth.register.password.error.required"),
            minLength: {
              value: 6,
              message: t("auth.register.password.error.minLength"),
            },
          }}
          render={({ field }) => (
            <TextField
              {...field}
              label={t("auth.register.password.label")}
              type="password"
              fullWidth
              margin="normal"
              error={!!errors.password}
              helperText={errors.password?.message}
            />
          )}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{
            margin: "1rem auto",
            textTransform: "capitalize",
            display: "block",
          }}
        >
          {t("auth.register.register")}
        </Button>
        <Box
          sx={{
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Typography variant="body1">
            {t("auth.register.already_have_account")}
          </Typography>
          <Typography
            variant="body1"
            color="primary"
            sx={{ cursor: "pointer", ml: 1 }}
            onClick={switchForm}
          >
            {t("auth.register.login")}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default RegisterForm;
