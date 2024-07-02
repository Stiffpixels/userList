import { Box, Skeleton } from "@mui/material";

export default function loading() {
  return (
    <Box component={"section"} sx={{ display: "flex", justifyContent: "start", width: "70%", marginInline: "auto" }}>
      <Box component={"div"} sx={{ width: "45%", maxWidth: 360, py: "1rem" }}>
        <Skeleton variant="circular" width={40} height={40} />
      </Box>
    </Box>
  );
}
