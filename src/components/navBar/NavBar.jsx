import {
  Drawer,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  ListItemIcon,
  Box,
} from "@mui/material";
import NavListDrawer from "./NavBarDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import "./navBar.css";
import Logo from "../../assets/images/logo.svg";
import AtomButton from "../atoms/AtomButton";

const navLinks = [
  {
    title: "DESCRIPTION",
    path: "#description",
  },
  {
    title: "FEATURES",
    path: "/features",
  },
  {
    title: "SCREENS",
    path: "#screens",
  },
  {
    title: "EXTRA",
    path: "#extra",
    icon: <ArrowDropDownIcon />,
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <AppBar position="fixed">
        <Toolbar className="ResponsiveNavBar">
          <a href="/">
            <img src={Logo} alt="logo" className="logo" />
          </a>
          <IconButton
            className="burguerIcon"
            onClick={() => setOpen(true)}
            sx={{ display: { xs: "block", sm: "none" } }}
          >
            <MenuIcon />
            <image src="../assets/images/logo.svg"></image>
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((item) => (
              <Button
                key={item.title}
                component="a"
                href={item.path}
                style={{
                  color: "#333333",
                  fontSize: "1rem",
                  fontWeight: "700",
                }}
              >
                {item.title}
                <ListItemIcon>{item.icon}</ListItemIcon>
              </Button>
            ))}
            <AtomButton variant="Outlined" className="buttonOutlined" button_content="DOWNLOAD"/>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <NavListDrawer navLinks={navLinks} />
      </Drawer>
    </>
  );
};

export default NavBar;
