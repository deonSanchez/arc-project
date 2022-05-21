import {
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";

import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

interface StyledDrawerProps extends DrawerProps {
  drawerWidth: number;
}

const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open",
})<StyledDrawerProps>(({ theme, open, drawerWidth }) => ({
  ".MuiDrawer-paper": {
    overflowX: "hidden",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    ...(!open && {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: drawerWidth * 4,
    }),
  },
}));

type SideDrawerProps = {
  openDrawer: boolean;
  drawerWidth: number;
};

const SideDrawer = ({
  openDrawer,
  drawerWidth,
}: SideDrawerProps): JSX.Element => {
  let navigate = useNavigate();

  const navigation = [
    { name: "Dashboard", icon: <FaHome size={24} />, route: "/dashboard" },
    { name: "Settings", icon: <IoMdSettings size={24} />, route: "/settings" },
  ];

  const handleRoute = (route: string) => {
    navigate(route);
  };

  return (
    <StyledDrawer
      drawerWidth={drawerWidth}
      open={openDrawer}
      variant="permanent"
    >
      <List component="nav" sx={{ paddingTop: 8 }}>
        {navigation.map((nav) => (
          <ListItem sx={{ padding: 0 }}>
            <ListItemButton onClick={() => handleRoute(nav.route)}>
              <ListItemIcon>{nav.icon}</ListItemIcon>
              <ListItemText primary={nav.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledDrawer>
  );
};

export default SideDrawer;
