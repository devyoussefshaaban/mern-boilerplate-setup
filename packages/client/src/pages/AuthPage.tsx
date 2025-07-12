import { Box, Typography } from "@mui/material";
import { LoginForm, RegisterForm } from "../components";
import { useState } from "react";

const AuthPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const switchForm = () => setIsLoginForm((ps) => !ps);

  return (
    <Box>
      {isLoginForm ? (
        <LoginForm switchForm={switchForm} />
      ) : (
        <RegisterForm switchForm={switchForm} />
      )}
    </Box>
  );
};

export default AuthPage;
