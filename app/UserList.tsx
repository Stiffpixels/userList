"use client";
import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, ListItemButton, Pagination } from "@mui/material";
import UserDisplay from "./UserDisplay";
import type { User } from "../lib/types";
import Image from "next/image";
import UserPopup from "./UserPopup";

export default function UserList({ user }: { user: User[] }) {
  const [page, setPage] = React.useState(1);
  const [selectedUser, setSelectedUser] = React.useState<User>(user[0]);
  return (
    <Box component={"section"}>
      <Box component={"div"} sx={{ bgcolor: "background.paper", color: "text.primary", position: "absolute", display: "flex", flexDirection: "row" }} className="w-full h-[100lvh]">
        <Box component={"aside"} className="h-full w-full flex flex-col  max-w-[640px] sm:max-w-[320px] lg:max-w-[380px]">
          <Box component="div" className="flex py-4 pl-4">
            <Image src="/icons/user_icon.svg" alt="User Icon" width={32} height={32} />
            <Typography variant="h5" gutterBottom sx={{ pl: "1rem", mb: "0", letterSpacing: "4" }}>
              User
            </Typography>
          </Box>
          <Divider variant="fullWidth" component={"hr"} />
          <Box component="div" className="overflow-auto">
            <List sx={{ width: "100%" }}>
              {user.slice((page - 1) * 10, page * 10).map((user, index) => {
                return (
                  <ListItemButton
                    alignItems="flex-start"
                    sx={{ gap: 1 }}
                    key={page + index}
                    selected={selectedUser.profile.email === user.profile.email}
                    onClick={() => {
                      setSelectedUser(user);
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar alt={user.profile.username} src={user.avatar} sx={{ height: 50, width: 50 }} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.profile.firstName + " " + user.profile.lastName}
                      secondary={
                        <React.Fragment>
                          <Typography sx={{ display: "inline-block", width: "100%" }} component="span" variant="caption">
                            {user.jobTitle}
                          </Typography>
                          <Typography sx={{ display: "inline-block", width: "100%" }} component="span" variant="caption">
                            {"@" + user.profile.username}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItemButton>
                );
              })}
            </List>
          </Box>
          <Divider variant="fullWidth" component="div" />
          <Box component="div" sx={{ mx: "auto", pb: "1rem", mt: "1rem", width: "fit-content" }}>
            <Pagination defaultPage={1} count={user.length / 10} onChange={(e, value) => setPage(value)} size="small" />
          </Box>
        </Box>

        <Divider orientation="vertical" flexItem component="div" className="lg:block" />

        <UserDisplay user={selectedUser} />
        {selectedUser.id !== -1 && <UserPopup user={selectedUser} setUser={setSelectedUser} />}
      </Box>
    </Box>
  );
}
