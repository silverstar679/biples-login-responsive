import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Logo from "../../../assets/images/Logo.svg";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        mb: 3,
      }}
    >
      <img src={Logo} alt="Logo" />
      <Typography
        sx={{
          ml: 1,
          fontSize: "25px",
          textTransform: "uppercase",
          fontWeight: "600",
          lineHeight: "35px",
        }}
      >
        biples
      </Typography>
    </Box>
  );
};

export default Header;
