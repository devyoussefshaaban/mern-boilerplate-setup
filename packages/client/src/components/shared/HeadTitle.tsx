import { Box, Button, Divider, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FC } from "react";
import FlexBox from "./FlexBox";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../context";
import { Link } from "react-router-dom";

const HeadTitle: FC<{
  withHomeBtn?: boolean;
  title: string;
  subTitle?: string;
}> = ({ title, subTitle, withHomeBtn }) => {
  const { t } = useTranslation();
  const { language } = useSelector((state: RootState) => state.common);

  return (
    <>
      <FlexBox>
        <Box>
          <Typography variant="h4" fontWeight={600} mb={2}>
            {title}
          </Typography>
          <Typography variant="body1">{subTitle}</Typography>
        </Box>
        {withHomeBtn ? (
          <Link to="/">
            <Button
              startIcon={
                language === "en" ? (
                  <ArrowBackIcon />
                ) : (
                  <ArrowForwardIcon sx={{ ml: 1 }} />
                )
              }
              sx={{ fontWeight: 800 }}
            >
              {t("general.back_home")}
            </Button>
          </Link>
        ) : (
          (null as any)
        )}
      </FlexBox>
      <Divider sx={{ mt: 2, mb: 4 }} />
    </>
  );
};

export default HeadTitle;
