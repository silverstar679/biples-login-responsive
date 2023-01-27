import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import OutlinedInput from "@mui/material/OutlinedInput";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import useMediaQuery from "@mui/material/useMediaQuery";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import Divider from "@mui/material/Divider";
import Header from "./Header";
import Socials from "./Socials";

const Login = (props) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        bgcolor: "#111111",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          border: "1px solid #252525",
          borderRadius: "12px",
          background:
            "linear-gradient(20.08deg, rgba(0, 0, 0, 0.48) 6.24%, rgba(10, 0, 0, 0.07) 103.48%)",
          backdropFilter: "blur(62.5px)",
          minHeight: "500px",
          minWidth: isMobile ? "350px" : "530px",
          px: isMobile ? "20px" : "80px",
          py: isMobile ? "50px" : "65px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "170px",
            height: "170px",
            left: isMobile ? "100px" : "250px",
            top: isMobile ? "300px" : "400px",
            background: "#FA15FF",
            filter: "blur(95.9214px)",
            transform: "rotate(-15deg)",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            width: "125px",
            height: "125px",
            left: isMobile ? "50px" : "100px",
            top: isMobile ? "300px" : "400px",
            background: "#1563FF",
            filter: "blur(95.9214px)",
            transform: "rotate(-15deg)",
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Typography sx={{ fontSize: "25px", fontWeight: "600" }}>Sign in</Typography>
          <Typography sx={{ fontSize: "13px" }}>
            <Link href="#" underline="none">
              Create account
            </Link>{" "}
            instead?
          </Typography>
        </Box>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="username-input" sx={{ fontSize: "16px" }}>
            User Name
          </InputLabel>
          <OutlinedInput
            placeholder="User name"
            id="username-input"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle color="disabled" />
              </InputAdornment>
            }
            sx={{
              mt: 3,
              mb: 3,
              px: "12px",
              borderRadius: 3,
              position: "relative",
              backgroundColor: "rgba(104, 104, 104, 0.22)",
              backdropFilter: "blur(2px)",
              fontSize: 13,
              width: "100%",
            }}
          />
        </FormControl>

        <FormControl variant="standard">
          <InputLabel shrink htmlFor="password-input" sx={{ fontSize: "16px" }}>
            Password
          </InputLabel>
          <OutlinedInput
            placeholder="Password"
            id="password-input"
            type="password"
            startAdornment={
              <InputAdornment position="start">
                <LockIcon color="disabled" />
              </InputAdornment>
            }
            sx={{
              mt: 3,
              mb: 3,
              px: "12px",
              borderRadius: 3,
              position: "relative",
              backgroundColor: "rgba(104, 104, 104, 0.22)",
              backdropFilter: "blur(2px)",
              fontSize: 13,
              width: "100%",
            }}
          />
        </FormControl>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Checkbox />
            <Typography sx={{ fontSize: "13px" }}>Remember me</Typography>
          </Box>
          <Link href="#" sx={{ fontSize: "10px" }} underline="none">
            Forget your password?
          </Link>
        </Box>

        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)",
            textTransform: "none",
            color: "#FFFFFF",
            backdropFilter: "blur(2px)",
            borderRadius: "10px",
            py: "12px",
            mb: 3,
          }}
        >
          Sign in
        </Button>
        <Divider sx={{ fontSize: "13px", mb: 3 }}>or</Divider>
        <Socials />
      </Box>
    </Box>
  );
};

export default Login;
