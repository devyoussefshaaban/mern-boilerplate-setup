import { ReactElement } from "react";
import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import { Box } from "@mui/material";

const MainLayout = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "97vh",
      }}
    >
      <MainHeader />
      <main style={{ flex: 1 }}>{children}</main>
      <MainFooter />
    </Box>
  );
};

export default MainLayout;
