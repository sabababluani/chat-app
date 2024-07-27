'use client';
import { io, Socket } from 'socket.io-client';
import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Header from './Components/Header/Header';
import UsernameInput from './Components/UsernameInput/UsernameInput';
import MessageList from './Components/MessageList/MessageList';
import MessageInput from './Components/MessageInput/MessageInput';
import RoomInput from './Components/RoomInput/RoomInput';

interface Message {
  message: string;
  sender: string;
}

export default function Home() {
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const [inbox, setInbox] = useState<Message[]>([]);
  const [actualUsername, setActualUsername] = useState('');

  const handleSendMessage = (message: string) => {
    if (message.length > 0 && actualUsername) {
      socket?.emit('message', { message, sender: actualUsername });
    } 
  };

  const handleJoinRoom = (roomName: string) => {
    socket?.emit('joinRoom', roomName);
  };

  const handleSetUsername = (username: string) => {
    setActualUsername(username);
  };

  useEffect(() => {
    const socket = io('http://localhost:3000');
    setSocket(socket);

    socket.on('message', (message: Message) => {
      setInbox((inbox) => [...inbox, message]);
    });

    return () => {
      socket.off('message');
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <Header userName={'Saba Palavandishvili'} pfp={'/girl.png'} />
      <div className={styles.wrapper}>
        {!actualUsername ? (
          <UsernameInput onSetUsername={handleSetUsername} />
        ) : (
          <>
            <MessageList inbox={inbox} actualUsername={actualUsername} />
            <MessageInput onSendMessage={handleSendMessage} />
            <RoomInput onJoinRoom={handleJoinRoom} />
          </>
        )}
      </div>
    </div>
  );
}
