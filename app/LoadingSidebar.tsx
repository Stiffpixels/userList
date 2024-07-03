"use client";
import { styled } from "@mui/material/styles";
import { Skeleton, Box } from "@mui/material";

export default function LoadingSidebar() {
  const IconSkeleton = styled(Skeleton)(({ theme }) => {
    return {
      width: 50,
      height: 50,
      marginBlock: "1rem",
      marginLeft: ".5rem",
      [theme.breakpoints.up("md")]: {
        width: 60,
        height: 60,
      },
    };
  });

  const Sidebar = styled(Box)(({ theme }) => {
    return {
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateRows: "auto auto 1fr",
      maxWidth: "640px",
      [theme.breakpoints.up("sm")]: { maxWidth: "320px" },
      [theme.breakpoints.up("lg")]: { maxWidth: "380px" },
    };
  });
  return (
    <Sidebar component={"div"}>
      <Box component="div">
        <Skeleton variant="rectangular" sx={{ width: "100%", height: "60px" }} />
      </Box>
      <Box component="div" className="overflow-auto">
        <Box sx={{ width: "100%", pt: "0", pl: ".5rem" }}></Box>
        {[...Array(10)].map((_, index) => {
          return <IconSkeleton key={index} variant="circular" />;
        })}
      </Box>

      <Box component={"div"} className="self-end">
        <Skeleton variant="rectangular" sx={{ width: "100%", height: "60px" }} />
      </Box>
    </Sidebar>
  );
}
