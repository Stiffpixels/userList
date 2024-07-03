import { Box, Divider, Skeleton } from "@mui/material";
import LoadingSidebar from "./LoadingSidebar";
export default function loading() {
  return (
    <Box component={"div"} sx={{ bgcolor: "background.paper", color: "text.primary", position: "absolute", display: "flex", flexDirection: "row", width: "100%", height: "100lvh" }}>
      <LoadingSidebar />
      <Divider orientation="vertical" flexItem component="div" className="lg:block" />
      <Box component={"div"} className="hidden md:flex w-full h-full justify-center items-center">
        <Box component="div">
          <Skeleton variant="rectangular" sx={{ width: "300px", height: "300px" }} />
        </Box>
      </Box>
    </Box>
  );
}
