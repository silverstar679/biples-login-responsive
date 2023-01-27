import Box from "@mui/material/Box";
import Group19 from "../../../assets/images/Group19.svg";
import Group20 from "../../../assets/images/Group20.svg";
import Group21 from "../../../assets/images/Group21.svg";
import Group22 from "../../../assets/images/Group22.svg";
import Group23 from "../../../assets/images/Group23.svg";

const Socials = (props) => {
  return (
    <Box
      sx={{
        positoin: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <img src={Group19} style={{ cursor: "pointer" }} alt="social-metamask" />
      <img src={Group21} style={{ cursor: "pointer" }} alt="social-images" />
      <img src={Group20} style={{ cursor: "pointer" }} alt="social-coinbase" />
      <img src={Group22} style={{ cursor: "pointer" }} alt="social-google" />
      <img src={Group23} style={{ cursor: "pointer" }} alt="social-twitter" />
    </Box>
  );
};

export default Socials;
