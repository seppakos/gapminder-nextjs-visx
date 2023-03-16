import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@/lib/Link";
import Slider from "@mui/material/Slider";
import Grid from "@mui/material/Grid";

export default function Index() {
  return (
    <Grid
      container
      justifyContent={"center"}
      alignItems={"center"}
      direction={"column"}
      height={"100vh"}
    >
      <Box>
        <Typography variant="h1" component="h1" gutterBottom>
          Material UI - Next.js example
        </Typography>
        <Slider
          aria-label="Volume"
          onChange={() => {
            return;
          }}
          defaultValue={30}
        />
      </Box>
    </Grid>
  );
}
