import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Chat = () => {
  const [chats, setChats] = useState([]);

  const fetchChats = async () => {
    await axios
      .get("/api/chat")
      .then((chats) => setChats(chats.data))
      .catch((e) => alert(e.message));
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <Box>
      {chats?.map((chat) => (
        <Typography key={chat?._id}>{chat?.chatName}</Typography>
      ))}
    </Box>
  );
};

export default Chat;
