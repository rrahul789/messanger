import { Box, Typography, TextField, IconButton, Paper } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState, useContext } from "react";
import { FriendContext } from "../../context/FriendContext";


const ChatBoxWindow = () => {
  const [message, setMessage] = useState("");
  const { selectedFriend, setSelectedFriend } = useContext(FriendContext);

  if (!selectedFriend) {
    return (
      <Box p={2}>
        <Typography variant="h6">Select a friend to start chatting</Typography>
      </Box>
    );
  }
  const handleSend = () => {
    if (message.trim() === "") return;
  
    const newMsg = {
      id: Date.now(),
      sender: "user",
      text: message,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    const updatedFriend = {
      ...selectedFriend,
      messages: [...selectedFriend.messages, newMsg],
    };
    setSelectedFriend(updatedFriend);
  
    setMessage("");
  };
  

  return (
    <Paper sx={{ height: '95%', display: 'flex', flexDirection: 'column', padding: 2, backgroundColor: '#fdfdfd' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Chat
      </Typography>
      <Box sx={{ flex: 1, overflowY: "auto", mb: 2, paddingRight: 1 }}>
        {selectedFriend?.messages.map((msg) => (
          <Box
            key={msg.id}
            display="flex"
            justifyContent={msg.sender === "user" ? "flex-end" : "flex-start"}
            mb={1}
          >
            <Box
              sx={{
                bgcolor: msg.sender === "user" ? "#1976d2" : "#e0e0e0",
                color: msg.sender === "user" ? "#fff" : "#000",
                px: 2,
                py: 1,
                borderRadius: 2,
                maxWidth: "70%",
              }}
            >
              <Typography variant="body2">{msg.text}</Typography>
              <Typography variant="caption" sx={{ display: "block", textAlign: "right", mt: 0.5 }}>
                {msg.timestamp}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
      <Box display="flex" gap={1}>
        <TextField
          fullWidth
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <IconButton color="primary" onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default ChatBoxWindow;
