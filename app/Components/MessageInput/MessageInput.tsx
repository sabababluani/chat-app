import React, { useState } from 'react';
import styles from './MessageInput.module.scss';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSendMessage = () => {
    if (message.length > 0) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        name="message"
        value={message}
        className={styles.input}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter message"
      />
      <button className={styles.button} onClick={handleSendMessage}>
        Send Message
      </button>
    </div>
  );
};

export default MessageInput;
