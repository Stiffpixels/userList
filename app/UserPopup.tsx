import { Avatar, Box, Button, Tooltip, Typography } from "@mui/material";
import type { User } from "../lib/types";
import Image from "next/image";
import Link from "next/link";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function UserPopup({ user, setUser }: { user: User; setUser: React.Dispatch<React.SetStateAction<User>> }) {
  const handleClose = () => {
    setUser((currentUser) => {
      return { ...currentUser, id: -1 };
    });
  };
  return (
    <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" className="sm:hidden" open={user.profile.email !== ""}>
      <Box component={"div"} sx={{ color: "text.primary", border: "1px solid", borderColor: "divider" }} className="max-w-[320px] p-4 lg:p-8 flex justify-center flex-col items-center">
        <IconButton aria-label="close" onClick={handleClose} sx={{ position: "absolute", top: 0, right: 0 }}>
          <Image src="/icons/close_icon.svg" alt="Close Icon" width={24} height={24} />
        </IconButton>
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
    </BootstrapDialog>
  );
}
