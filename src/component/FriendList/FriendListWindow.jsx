import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import { friendList } from "../../data/mockData";
import { useContext } from "react";
import { FriendContext } from "../../context/FriendContext";

const FriendListWindow = () => {
  const { selectedFriend, setSelectedFriend } = useContext(FriendContext);
  const getInitials = (name) => {
    const names = name.trim().split(" ");
    if (names.length === 1) return names[0][0];
    return names[0][0] + names[1][0];
  };

  const handleFriendClick = (friend) => {
    setSelectedFriend(friend);
  };
  return (
    <Box
      sx={{
        width: "92%",
        height: "95%",
        backgroundColor: "#f9f9f9",
        padding: 2,
      }}
    >
      <Typography variant="h6" sx={{ marginBottom: 2, fontWeight: "bold" }}>
        Friends
      </Typography>
      <List>
        {friendList.map((friend) => (
          <ListItem
            key={friend.id}
            button
            sx={{
              borderRadius: 2,
              "&:hover": { backgroundColor: "#e0f7fa" },
              backgroundColor:
                selectedFriend?.id === friend.id ? "#b2ebf2" : "transparent",
            }}
            onClick={() => handleFriendClick(friend)}
          >
            <ListItemAvatar>
              <Avatar sx={{ bgcolor: "#90caf9" }}>
                {getInitials(friend.name).toUpperCase()}
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={
                <Typography variant="subtitle1" fontWeight="bold">
                  {friend.name}
                </Typography>
              }
              secondary={
                <Typography variant="body2" color="text.secondary">
                  {friend.lastMessage}
                </Typography>
              }
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FriendListWindow;
