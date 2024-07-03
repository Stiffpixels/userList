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

// Component used to hold the sidebar with title, user list and pagination
export default function UserList({ user }: { user: User[] }) {
  const [page, setPage] = React.useState(1);

  // Rearranging the user list to put the users without avatar at the end
  const slicedUser = user.slice(0, 9);
  const rearrangedUser = user.slice(9).concat(slicedUser);
  const [selectedUser, setSelectedUser] = React.useState<User>(rearrangedUser[0]);
  return (
    <Box component={"main"} sx={{ color: "text.primary", display: "flex", flexDirection: "row", width: "100%", height: "100lvh" }}>
      <Box component={"section"} sx={{ bgcolor: "background.paper" }} className="h-full w-full grid grid-rows-gridAside max-w-[640px] sm:max-w-[320px] lg:max-w-[380px]">
        <Box component="div">
          <Box component={"div"} className="flex py-4 pl-4">
            <Image src="/icons/user_icon.svg" alt="User Icon" width={32} height={32} />
            <Typography variant="h5" gutterBottom sx={{ pl: "1rem", mb: "0", letterSpacing: "4" }}>
              User
            </Typography>
          </Box>
          <Divider variant="fullWidth" component="div" sx={{ m: "0" }} />
        </Box>

        <Box component="div" className="overflow-auto">
          <List sx={{ width: "100%", pt: "0" }}>
            {rearrangedUser.slice((page - 1) * 10, rearrangedUser[page * 10] ? page * 10 : rearrangedUser.length).map((user, index) => {
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

        <Box component={"div"} className="self-end">
          <Divider variant="fullWidth" component="div" />
          <Box component="div" sx={{ mx: "auto", pb: "1rem", mt: "1rem", width: "fit-content" }}>
            <Pagination defaultPage={1} count={Math.ceil(rearrangedUser.length / 10)} onChange={(e, value) => setPage(value)} size="small" />
          </Box>
        </Box>
      </Box>

      <Divider orientation="vertical" flexItem component="div" className="lg:block" />

      <UserDisplay user={selectedUser} />
      {selectedUser.id !== -1 && <UserPopup user={selectedUser} setUser={setSelectedUser} />}
    </Box>
  );
  // return (
  //   <>
  //     <Box component={"div"} sx={{ color: "text.primary", display: "flex", flexDirection: "row", width: "100%", height: "100lvh" }}>
  //       hello
  //     </Box>
  //   </>
  // );
}
