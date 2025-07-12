import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Select,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../context";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../context/actions/authActions";
import {
  changeLanguage,
  closeConfirmModal,
  openConfirmModal,
  togglethemeMode,
} from "../../context/actions/commonActions";
import { useTranslation } from "react-i18next";
import BrightnessLowIcon from "@mui/icons-material/BrightnessLow";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useState } from "react";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const MainHeader = () => {
  const { language, themeMode } = useSelector(
    (state: RootState) => state.common
  );
  const { user } = useSelector((state: RootState) => state.auth);

  const isDarkMode = themeMode === "dark";

  const dispatch: AppDispatch = useDispatch();

  const navigate = useNavigate();

  const logoutHandler = () => {
    handleClose();
    dispatch(
      openConfirmModal({
        title: t("general.logout"),
        message: t("general.wanna_logout"),
        yesBtn: {
          text: t("general.yes_logout"),
          action: () => {
            dispatch(closeConfirmModal());
            dispatch(logoutUser());
            setTimeout(() => navigate("/auth"), 500);
          },
        },
        noBtn: {
          text: t("general.no_cancel"),
          action: () => dispatch(closeConfirmModal()),
        },
      })
    );
  };

  const changeLanguageHandler = (langauge: "ar" | "en") => {
    dispatch(changeLanguage(langauge));
  };

  const togglethemeModeHandler = () => dispatch(togglethemeMode());

  const { t } = useTranslation();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: ".25rem 0",
        borderBottom: "2px solid #000",
        boxShadow: "0 1px 2px #eee",
      }}
    >
      <div className="logo">
        <Link
          to="/"
          style={{
            color: isDarkMode ? "#fff" : "#000",
            textDecoration: "none",
          }}
        >
          <Typography variant="h6" fontWeight="bolder" px={2}>
            LOGO
          </Typography>
        </Link>
      </div>
      {user ? (
        <nav style={{ flex: 1 }}>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              width: "50%",
              margin: "auto",
            }}
          >
            <li style={{ marginRight: "10px", listStyle: "none" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: isDarkMode ? "#fff" : "#000",
                }}
                to="/"
              >
                {t("header.links.home")}
              </Link>
            </li>
            <li style={{ marginRight: "10px", listStyle: "none" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: isDarkMode ? "#fff" : "#000",
                }}
                to="/about"
              >
                {t("header.links.about")}
              </Link>
            </li>
            <li style={{ marginRight: "10px", listStyle: "none" }}>
              <Link
                style={{
                  textDecoration: "none",
                  color: isDarkMode ? "#fff" : "#000",
                }}
                to="/dashboard"
              >
                {t("header.links.dashboard")}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flex: ".3",
        }}
      >
        {user ? (
          <>
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleClose} sx={{ marginRight: "-15px" }}>
                <Avatar />{" "}
                <span style={{ marginRight: 20 }}>
                  {t("header.links.my_account")}
                </span>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <PersonAdd fontSize="small" />
                </ListItemIcon>
                {t("header.links.add_account")}
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <Settings fontSize="small" />
                </ListItemIcon>
                {t("header.links.settings")}
              </MenuItem>
              <MenuItem onClick={logoutHandler}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                {t("header.links.logout")}
              </MenuItem>
            </Menu>
          </>
        ) : null}
        <Select
          value={language}
          onChange={(e) => changeLanguageHandler(e.target.value as "ar" | "en")}
          size="small"
          sx={{
            minWidth: 90,
            mx: 1,
            color: isDarkMode ? "white" : "#000",
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: isDarkMode ? "white" : "#000",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: isDarkMode ? "#ffb300" : "#1976d2", // optional: highlight on hover
            },
            "& .MuiSvgIcon-root": {
              color: isDarkMode ? "white" : "#000",
            },
          }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
        </Select>
        <IconButton size="large" onClick={togglethemeModeHandler}>
          {isDarkMode ? (
            <Brightness7Icon fontSize="large" color="warning" />
          ) : (
            <BrightnessLowIcon fontSize="large" />
          )}
        </IconButton>
      </Box>
    </header>
  );
};

export default MainHeader;
