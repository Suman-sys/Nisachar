import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import SideLeftPanel from "./SideLeftPanel";
import Login from "./Login";
import useMediaQuery from "@mui/material/useMediaQuery";
import { createTheme, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
      light: "#fff",
    },
    secondary: {
      main: "#fff",
      light: "#fff",
    },
  },
});

const LoginPage = () => {
  const matches = useMediaQuery("(min-width:800px)");
  console.log(matches);
  return (
    <ThemeProvider theme={theme}>
      <Box
      justifyContent="center"
      alignItems="center"
      flexDirection= "column"
        sx={{
          display: "flex",
          height: "auto",
          width: "100%",
          bgcolor: "#00205a",
          paddingTop: "8%",
          paddingBottom: "8%",
        }}
      >
        <Grid container direction="row">
          <Grid item xs={12} md={8} sm={7.8}>
            <SideLeftPanel />
          </Grid>
          <Grid item xs={0} sm={0} md={0}>
            <Divider
              orientation="vertical"
              sx={{ width: "0.5px", bgcolor: "white" }}
            />
          </Grid>
          <Grid item xs={12} md={3.9} sm={4}>
            <Login />
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default LoginPage;
