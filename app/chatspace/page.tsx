"use client";

import { io, Socket } from "socket.io-client";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Header from "../Components/Header/Header";
import MessageList from "../Components/MessageList/MessageList";
import MessageInput from "../Components/MessageInput/MessageInput";
import RoomInput from "../Components/RoomInput/RoomInput";

interface Message {
  message: string;
  sender: string;
}

interface ChatspaceProps {
  actualUsername: string;
}

export default function Chatspace({ actualUsername }: ChatspaceProps) {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const [inbox, setInbox] = useState<Message[]>([]);
  const [currentRoom, setCurrentRoom] = useState<string | null>(null);

  const handleSendMessage = (message: string) => {
    if (message.length > 0 && actualUsername && currentRoom) {
      socket?.emit("message", { message, sender: actualUsername, room: currentRoom });
    } else {
      alert("You must be in a room to send a message.");
    }
  };

  const handleJoinRoom = (roomName: string) => {
    if (socket) {
      socket.emit("joinRoom", roomName);
      setCurrentRoom(roomName);
    }
  };

  useEffect(() => {
    const socket = io("http://localhost:3000");
    setSocket(socket);

    socket.on("message", (message: Message) => {
      setInbox((inbox) => [...inbox, message]);
    });

    socket.on("roomJoined", (roomName: string) => {
      setCurrentRoom(roomName);
    });

    return () => {
      socket.off("message");
      socket.off("roomJoined");
      socket.disconnect();
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header userName={actualUsername} pfp={"/girl.png"} />
      <div className={styles.containerWrapper}>
        <div className={styles.container}>
          <MessageList inbox={inbox} actualUsername={actualUsername} />
        </div>
      </div>
      <div className={styles.wrap}>
        <MessageInput onSendMessage={handleSendMessage} />
        <RoomInput onJoinRoom={handleJoinRoom} />
      </div>
    </div>
  );
}
