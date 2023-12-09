import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SigninAction } from "../store/SigninSlice";
import Logo from "../assets/quantum-ai.png"

const drawerWidth = 240;
const navItems = ["Home", "Image", "Sound", "Text", "Login"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.signin);
  const dispatch = useDispatch();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleNavigation = (item) => {
    switch (item) {
      case "Home":
        navigate("/");
        break;
      case "Image":
        if (isLoggedIn) navigate("/image");
        else {
          alert("로그인이 필요한 서비스입니다.");
        }
        break;
      case "Sound":
        if (isLoggedIn) navigate("/sound");
        else {
          alert("로그인이 필요한 서비스입니다.");
        }
        break;
      case "Text":
        if (isLoggedIn) navigate("/text");
        else {
          alert("로그인이 필요한 서비스입니다.");
        }
        break;
      case "Login":
        navigate("/login");
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    dispatch(SigninAction.signout());
    navigate("/login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
              }}
              onClick={() => handleNavigation(item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav">
          <Toolbar
            style={{
              backgroundColor: "white",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Typography with img */}
            <Typography
              style={{
                color: "black",
                marginLeft: "-2%", // Set left margin to 10%
                minWidth: "100px", // Set a minimum width
                maxWidth: "200px", // Set a maximum width
                display: { xs: "none", sm: "block" },
                "@media (max-width: 599px)": {
                  display: "none", // Hide img on xs and sm
                },
              }}
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                marginLeft: "-3%", // Set left margin to 10%
              }}
            >
              <img
                src={Logo}
                alt="Quantum AI Logo"
                style={{
                  width: "100%",
                  maxWidth: "100%",
                  marginLeft: "10%",
                }}
              />
            </Typography>

            <div style={{}}>
              <Box
                sx={{
                  "@media (min-width: 599px)": {
                    textAlign: "center",
                    boxSizing: "border-box",
                    position: "fixed",
                    top: "2vh",
                    right: "0",
                  },
                }}
              >
                {navItems.map((item) => (
                  <Button
                    key={item}
                    sx={{
                      color: "#1976D2",
                    }}
                    onClick={() =>
                      item === "Login" ? handleLogout() : handleNavigation(item)
                    }
                    style={{
                      display: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item === "Login"
                      ? isLoggedIn
                        ? "Logout"
                        : "Login"
                      : item}
                  </Button>
                ))}
              </Box>
            </div>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
          <Typography />
        </Box>
      </Box>
    </>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
