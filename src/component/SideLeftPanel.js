import React from "react";
import { Box } from "@mui/material";
import BackGroundImage from "../image/back.png";
import Logo from "../image/forg.png";

const SideLeftPanel = () => {
  return (
    <Box component="div" display="flex" flexDirection="column" justifyContent="center" alignItems="center"
      style={{ backgroundImage: `url(${BackGroundImage})`, maxWidth: "95%" }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{ marginTop: 1 }}
          component="img"
          src={Logo}
          height="auto"
          maxWidth="65%"
        />
      </Box>
    </Box>
  );
};

export default SideLeftPanel;
