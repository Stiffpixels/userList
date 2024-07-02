import UserList from "./UserList";
import { Box, Divider, Typography } from "@mui/material";

export default async function Home() {
  const response = await fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const user = await response.json();
    return <UserList user={user} />;
  }
  return (
    <Box component={"section"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100vw", height: "100vh", marginInline: "auto", pt: "1rem" }}>
      <Box component={"div"} sx={{ display: "flex", alignItems: "center", border: "1px solid", borderRadius: 2, p: "1rem", borderColor: "divider", gap: "10px" }}>
        <Typography variant="h4" gutterBottom sx={{ m: "0" }}>
          No User Found
        </Typography>
        <Divider variant="middle" orientation="vertical" flexItem component="div" />
        <Typography variant="h4" gutterBottom sx={{ m: "0" }}>
          404
        </Typography>
      </Box>
    </Box>
  );
}
