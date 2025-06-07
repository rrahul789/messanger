import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
const Header = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to right, #1976d2, #42a5f5)",
        padding: "12px 24px",
        borderRadius: "12px",
        textAlign: "center",
        marginBottom: 2,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          background: "linear-gradient(to right, #ffffff, #cfd8dc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 800,
          letterSpacing: 1,
        }}
      >
        WhatsNotUp
      </Typography>
    </Box>
  );
};

export default Header;
