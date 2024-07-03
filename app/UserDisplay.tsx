import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material";
import type { User } from "../lib/types";
import Image from "next/image";
import Link from "next/link";
export default function UserDisplay({ user }: { user: User }) {
  return (
    <Box component={"div"} sx={{ height: "100%", position: "relative", mx: "auto", bgcolor: "background.paper", color: "text.primary" }} className="hidden sm:flex justify-center items-center w-full">
      <Box component={"div"} sx={{ color: "text.primary", border: "1px solid", borderColor: "divider" }} className="max-w-[320px] p-4 lg:p-8 flex justify-center flex-col items-center">
        <Avatar alt={user.profile.username} src={user.avatar} sx={{ height: 100, width: 100 }} className="border-4 border-gray-200" />
        <Tooltip title={"@" + user.profile.username}>
          <Typography variant="h6" gutterBottom sx={{ mb: "0" }}>
            {user.profile.firstName + " "} {user.profile.lastName}
          </Typography>
        </Tooltip>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {user.jobTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.primary", mt: "1rem", textAlign: "center" }}>
          {user.Bio}
        </Typography>
        <Box component={"div"} className="flex items-center mt-4 gap-1">
          <Image src="/icons/email_icon.svg" alt="Email Icon" width={16} height={16} />
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            <Link href={`mailto:${user.profile.email}`}>{user.profile.email}</Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
