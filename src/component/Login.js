import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  FormControlLabel,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Logo from "../image/emagia_white.png";

const StyledTextBox = styled(TextField)(({ theme }) => ({
  color: "#fff",

  "& .MuiOutlinedInput-root": {
    // - The Input-root, inside the TextField-root
    "& fieldset": {
      // - The <fieldset> inside the Input-root
      borderColor: "#fff", // - Set the Input border
    },
    "&:hover fieldset": {
      borderColor: "#fff", // - Set the Input border when parent has :hover
    },
    "&.Mui-focused fieldset": {
      // - Set the Input border when parent is focused
      borderColor: "#fff",
    },
  },
}));

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleLogin = async() => {
    const body= {
      email,password

    }

  try{
    const response= await axios({
      method:"post", 
      url:"http://localhost:2000/users/login",
      data:JSON.stringify(body),
      headers: {
        "Content-Type":"application/json"
      }
    })
    console.log(response)


if(response.data){
  alert(response.data)
}
else
    {
      throw "error occurred"
    }
  }catch(error){
    alert("error occured")
  }
  };

  const validateEmail = (email)=> {
    
    return !String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  const validatePassword = (password)=> {
    return password.toLowerCase()===password || password.toUpperCase()===password || password.length<8;
  }

  return (
    <Box
      sx={{
        display: "flex",
        padding: 9,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{ alignItems: "center", marginTop: 0, justifyContent: "center" }}
      >
        <Box
          flexDirection="column"
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
  
          }}
        >
          <Box component="img" src={Logo} height="auto" maxWidth="100" />

          <Typography variant="h6" sx={{ color: "red" }}>
            Digital Recievables
          </Typography>
        </Box>
        <StyledTextBox
          sx={{ marginTop: 5 }}
          inputProps={{ sx: { color: "#fff" } }}
          label={<span style={{ color: "#fff" }}> User Name </span>}
          error={emailError}
          helperText={emailError}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(email)
              ? setEmailError("Please enter valid email")
              : setEmailError("");
          }}
          fullWidth
          required
        />
        <StyledTextBox
          inputProps={{ sx: { color: "#fff" } }}
          label={<span style={{ color: "#fff" }}>Password </span>}
          type="password"
          variant="outlined"
          onChange={(e) => {
            setPassword(e.target.value);
            validatePassword(password)
              ? setPasswordError(
                  "Password must contains upper and lower case letters"
                )
              : setPasswordError("");
          }}
          error={passwordError}
          helperText={passwordError}
          fullWidth
          required
          sx={{ marginTop: 2 }}
        />
        <Box sx={{ display: "flex" }}>
          <FormControlLabel
            control={<Checkbox sx={{ color: "#fff" }} name="Checked" />}
            label={
              <span style={{ fontSize: 11, color: "white" }}>Remember me</span>
            }
          />
          <Button sx={{ ml: "auto" }} color="primary">
            <span style={{ fontSize: 9, color: "white" }}>
              {" "}
              Forgot Password?
            </span>
          </Button>
        </Box>
        <Button onClick={()=>handleLogin()} variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Box>
    </Box>
  );
}
