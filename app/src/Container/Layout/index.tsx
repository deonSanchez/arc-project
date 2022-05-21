import { Box, BoxProps, Grid, styled } from "@mui/material";
import { useState } from "react";

import Header from "Components/Header";
import SideDrawer from "Components/SideDrawer";

type Props = {
  children: any;
};

const drawerWidth: number = 60;

interface StyledBoxProps extends BoxProps {
  expand: boolean;
  drawerWidth: number;
}

const StyledBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "expand",
})<StyledBoxProps>(({ theme, expand, drawerWidth }) => ({
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  position: "absolute",
  marginLeft: drawerWidth,
  marginTop: theme.spacing(8),
  transition: theme.transitions.create("margin-left", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  ...(!expand && {
    marginLeft: drawerWidth * 4,
    transition: theme.transitions.create("margin-left", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
}));

const Layout = ({ children }: Props): JSX.Element => {
  const [openDrawer, setOpenDrawer] = useState(true);

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header openDrawer={openDrawer} setDrawer={handleDrawer} />
      <Grid container direction="column">
        <Grid item>
          <SideDrawer drawerWidth={drawerWidth} openDrawer={openDrawer} />
        </Grid>
        <Grid item xs>
          <StyledBox expand={openDrawer} drawerWidth={drawerWidth}>
            {children}
          </StyledBox>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Layout;
