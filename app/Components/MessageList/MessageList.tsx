import React from 'react';
import styles from './MessageList.module.scss';

interface Message {
  message: string;
  sender: string;
}

interface MessageListProps {
  inbox: Message[];
  actualUsername: string;
}

const MessageList: React.FC<MessageListProps> = ({ inbox, actualUsername }) => {
  return (
    <div className={styles.container}>
      {inbox.map((msg, index) => (
        <div
          key={index}
          className={
            msg.sender === actualUsername
              ? styles.myMessage
              : styles.theirMessage
          }
        >
          <strong>{msg.sender}: </strong>
          {msg.message}
        </div>
      ))}
    </div>
  );
};

export default MessageList;
