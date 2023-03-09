import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
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
    <div style={{ width: "100%" }}>
      <Box d="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {chats?.map((chat) => (
          <h6 key={chat?._id}>{chat?.chatName}</h6>
        ))}
      </Box>
    </div>
  );
};

export default Chat;
