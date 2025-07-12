import { Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const MainFooter = () => {
  const { t } = useTranslation();

  return (
    <footer
      style={{
        padding: "1.5rem 0 0",
        borderTop: "2px solid #000",
      }}
    >
      <Typography variant="body2" textAlign="center">
        {t("footer.typography")}
      </Typography>
    </footer>
  );
};

export default MainFooter;
