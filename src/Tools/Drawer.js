import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuRounded from "@mui/icons-material/MenuRounded";
import { useNavigate } from "react-router-dom";

export default function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });
  let navigate = useNavigate();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const navigateTo = (text) => {
    navigate("/" + text);
  };

  const list = (anchor) => (
    <Box
      sx={{ width: 170 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Home", "About"].map((text, index) => (
          <ListItem
            button
            key={text}
            onClick={() => {
              navigateTo(text);
            }}
          >
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // const list = (anchor) => (
  //   <Box
  //     sx={{ width: 170 }}
  //     role="presentation"
  //     onClick={toggleDrawer(anchor, false)}
  //     onKeyDown={toggleDrawer(anchor, false)}
  //   >
  //     <List>
  //       {["Home", "Mission", "About"].map((text, index) => (
  //         <ListItem
  //           button
  //           key={text}
  //           onClick={() => {
  //             navigateTo(text);
  //           }}
  //         >
  //           <ListItemText primary={text} />
  //         </ListItem>
  //       ))}
  //     </List>
  //   </Box>
  // );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuRounded
            fontSize="large"
            sx={{ position: "fixed", right: "3%" }}
            onClick={toggleDrawer(anchor, true)}
          />
          <SwipeableDrawer
            sx={{ opacity: "70%" }}
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
