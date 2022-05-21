import { AppBar, Button, IconButton, Toolbar } from "@mui/material";

import { RiMenuLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";
import { SiArchicad } from "react-icons/si";

type HeaderProps = {
  openDrawer: boolean;
  setDrawer: () => void;
};

const Header = ({ setDrawer }: HeaderProps): JSX.Element => {
  return (
    <AppBar position="absolute" sx={{ zIndex: 1500 }}>
      <Toolbar>
        <IconButton edge="start" color="inherit" onClick={setDrawer}>
          <RiMenuLine />
        </IconButton>
        <Button
          disableRipple
          startIcon={<SiArchicad />}
          sx={{
            ".MuiButton-startIcon": {
              marginRight: "20px",
            },
            margin: "auto",
            color: "white",
            textTransform: "none",
            fontSize: 21,
          }}
          variant="text"
        >
          Arc Project
        </Button>

        <IconButton edge="end" color="inherit">
          <FiUser />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
